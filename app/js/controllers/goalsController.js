"use strict"

goalbusterApp.controller('GoalsController', ['ipCookie','GoalsService', '$location', function(ipCookie,GoalsService, $location) {
  var self = this;
  self.goals = [];

  GoalsService.getAllFromApi().then(_saveGoals);

  self.addNewGoal = function(formObj) {
    GoalsService.postGoalToApi(formObj);
    self.goals.push(formObj);
  };

  self.editGoal = function(goalObj) {
    GoalsService.editGoalInApi(goalObj);
    self.goals.forEach(function(goal){
      if (goal.id === goalObj.id) {
        goal === goalObj
      }
    });
  };

 self.deleteGoal = function(goalObj) {
    GoalsService.deleteGoalOnApi(goalId);
    var goalIndex;
    for (var i=0;i<self.goals.length;i++) {
      if (self.goals[i].id === goalObj.id) {
        goalObj = i;
      }
    };
    self.tasks.splice(goalIndex,1)
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

  self.redirectToHome = function() {
    $location.url('/home')
  }

  function _saveGoals(response) {
    response.forEach(function(goal){
      self.goals.push(goal);
    });
  };
}]);
