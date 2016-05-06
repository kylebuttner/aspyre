"use strict"

goalbusterApp.controller('goalsController', ['ipCookie', '$q', 'GoalFactory','GoalService', '$auth', function(ipCookie, $q, GoalFactory, GoalService, $auth) {
  var self = this;

  self.goals = [];

  GoalService.getAllFromApi().then(_saveGoals);

  self.addNewGoal = function(newGoal) {
    GoalService.postGoalToApi(newGoal);
  };

  self.refreshGoals = function() {
     GoalService.getAllFromApi().then(_saveGoals)
  };

  self.editGoal = function(name, id) {
    GoalService.editGoalInApi(name, id).then(_saveGoals);
  };

  function _saveGoals(response) {
    self.goals = response;
  };
  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };
}]);
