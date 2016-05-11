"use strict"

goalbusterApp.controller('GoalsController', ['GoalsService', '$location', function(GoalsService, $location) {
  var self = this;
  self.goals = [];

  GoalsService.getAllFromApi().then(_saveGoals);

  self.addNewGoal = function(formObj) {
    GoalsService.postGoalToApi(formObj);
    _refreshGoals();
    self.goalText='';
  };

  self.editGoal = function(goalObj) {
    GoalsService.editGoalInApi(goalObj);
  };

 self.deleteGoal = function(goalId) {
    GoalsService.deleteGoalOnApi(goalId);
    _refreshGoals();
  };

  self.setPriorityGoal = function(goal) {
    self.priorityGoal = goal;
  };

  self.getLastGoal = function() {
    return self.goals[self.goals.length-1]
  };

  self.redirectToNewTasks = function() {
    $location.url('/addnewtasks')
  }

  function _refreshGoals() {
     GoalsService.getAllFromApi().then(_saveGoals)
  };

  function _saveGoals(response) {
    self.goals = response;
  };
}]);
