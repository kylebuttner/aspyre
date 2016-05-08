"use strict"

goalbusterApp.controller('TasksController', ['ipCookie', '$q', 'TasksService', '$auth', function(ipCookie, $q, TasksService, $auth) {
  var self = this;
  var taskText = '';


  self.getTasksForGoal = function(goalId) {
    TasksService.getAllFromApi(goalId).then(_saveTasks);
  };

  self.addNewTask = function (newTask, goalId ) {
    TasksService.postTaskToApi(newTask, goalId);
    _refreshTasks(goalId);
    self.taskText='';
  };

  self.editTask = function(taskUpdate, taskId) {
    TasksService.editTaskOnApi(taskUpdate, taskId);
  };

  self.deleteTask = function(taskId) {
    TasksService.deleteTaskOnApi(taskId);
  };

  function _refreshTasks(goalId) {
     TasksService.getAllFromApi(goalId).then(_saveTasks)
  };

  function _saveTasks(response) {
    self.tasks = response;
  };

}]);