"use strict"

goalbusterApp.controller('GoalsController', ['GoalsService', function(GoalsService) {
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

  function _refreshGoals() {
     GoalsService.getAllFromApi().then(_saveGoals)
  };

  function _saveGoals(response) {
    self.goals = response;
  };
}]);
