"use strict"

goalbusterApp.controller('GoalsController', ['ipCookie', '$q', 'GoalsFactory','GoalsService', 'TasksService', '$auth', function(ipCookie, $q, GoalsFactory, GoalsService, TasksService, $auth) {
  var self = this;
  var goalText = '';
  self.goals = [];

  GoalsService.getAllFromApi().then(_saveGoals);

  function _saveGoals(response) {
    self.goals = response;
  };

  self.addNewGoal = function(newGoal) {
    GoalsService.postGoalToApi(newGoal);
    self._refreshGoals();
    self.goalText='';
  };

  self._refreshGoals = function() {
     GoalsService.getAllFromApi().then(_saveGoals)
  };

  self.editGoal = function(name, id) {
    GoalsService.editGoalInApi(name, id);
  };

  function _saveGoals(response) {
    self.goals = response;
  };
  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };
}]);
