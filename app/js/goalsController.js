"use strict"

goalbusterApp.controller('GoalbusterController', ['GoalFactory','GoalService', function(GoalFactory, GoalService) {
  var self = this;
  self.goals = [];


  GoalService.getAll().then(_saveGoals)

  function _saveGoals(response) {
    return self.goals = response
  }

  self.addNewGoal = function(newGoal) {
    self.goals.push(new GoalFactory(newGoal));
  };



}]);
