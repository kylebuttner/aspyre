"use strict"

goalbusterApp.controller('GoalsController', ['GoalsService', function(GoalsService) {
  var self = this;
  self.goals = [];

  GoalsService.getAllFromApi().then(_saveGoals);

  self.addNewGoal = function(newGoal) {
    GoalsService.postGoalToApi(newGoal);
    _refreshGoals();
    self.goalText='';
  };

  self.editGoal = function(GoalObj) {
    GoalsService.editGoalInApi(GoalObj);
  };

 self.deleteGoal = function(GoalId) {
    GoalsService.deleteGoalOnApi(GoalId);
    _refreshGoals();
  };

  function _refreshGoals() {
     GoalsService.getAllFromApi().then(_saveGoals)
  };

  function _saveGoals(response) {
    self.goals = response;
  };
}]);
