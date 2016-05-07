"use strict"

goalbusterApp.controller('GoalbusterController', ['$q', 'GoalFactory','GoalService', function($q, GoalFactory, GoalService) {

  var self = this;
  var goalText = '';
  self.goals = [];

  GoalService.getAllFromApi().then(_saveGoals);

  self.addNewGoal = function(newGoal) {
    GoalService.postGoalToApi(newGoal);
    self._refreshGoals();
    self.goalText='';
  };

  self._refreshGoals = function() {
     return GoalService.getAllFromApi().then(_saveGoals)
  };

  self.editGoal = function(name, id) {
    GoalService.editGoalInApi(name, id);
  };

  function _saveGoals(response) {
    self.goals = response;
  };
}]);
