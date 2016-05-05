"use strict"

goalbusterApp.controller('GoalbusterController', ['$q', 'GoalFactory','GoalService', 'TaskService', function($q, GoalFactory, GoalService, TaskService) {
  var self = this;

  self.goals = [];


  GoalService.getAllFromApi().then(_saveGoals)

  function _saveGoals(response) {
    self.goals = response;
  };

  self.addNewGoal = function(newGoal) {
    GoalService.postGoalToApi(newGoal);
  };

  self.refreshGoals = function() {
     GoalService.getAllFromApi().then(_saveGoals)
  };

  self.addNewTask = function (newTask, goalId ) {
    TaskService.postTaskToApi(newTask, goalId);
  };

  self.refreshTasks =  function(goalId) {
    TaskService.getAllFromApi(goalId);
  };

  self.editTask = function(taskUpdate, taskId) {
    TaskService.editTaskOnApi(taskUpdate, taskId);
  };

  self.deleteTask = function(taskId) {
    TaskService.deleteTaskOnApi(taskId);
  };

}]);
