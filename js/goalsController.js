"use strict"

goalbusterApp.controller('GoalbusterController', ['$q', 'GoalFactory','GoalService', function($q, GoalFactory, GoalService) {
  var self = this;

  self.goals = [];

  GoalService.getAllFromApi().then(_saveGoals)

  function _saveGoals(response) {
    self.goals = response
  }

  self.addNewGoal = function(newGoal) {
    GoalService.postGoalToApi(newGoal);
  };

  self.refreshGoals = function() {
     GoalService.getAllFromApi().then(_saveGoals)
  }

}]);
