"use strict"

goalbusterApp.controller('goalsController', ['ipCookie', '$q', 'GoalFactory','GoalService', 'TaskService', '$auth', function(ipCookie, $q, GoalFactory, GoalService, TaskService, $auth) {
  var self = this;

  self.goals = [];

  GoalService.getAllFromApi().then(_saveGoals);

  function _saveGoals(response) {
    self.goals = response;
  };

  self.addNewGoal = function(newGoal) {
    GoalService.postGoalToApi(newGoal);
  };

  self.refreshGoals = function() {
     GoalService.getAllFromApi().then(_saveGoals)
  };

  self.editGoal = function(name, id) {
    GoalService.editGoalInApi(name, id).then(_saveGoals);
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

  function _saveGoals(response) {
    self.goals = response;
  };
  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };
}]);
