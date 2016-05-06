"use strict"

goalbusterApp.controller('GoalbusterController', ['$q', 'GoalFactory','GoalService', '$auth', function($q, GoalFactory, GoalService, $auth) {
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

  self.handleBtnClick = function() {
    $auth.authenticate("github");
  }

}]);
