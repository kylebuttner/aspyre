"use strict"

goalbusterApp.controller('TasksController', ['ipCookie', '$q', 'TasksService', '$auth', function(ipCookie, $q, TasksService, $auth) {
  var self = this;

  self.addNewTask = function (newTask, goalId ) {
    TasksService.postTaskToApi(newTask, goalId);
  };

  self.refreshTasks =  function(goalId) {
    TasksService.getAllFromApi(goalId);
  };

  self.editTask = function(taskUpdate, taskId) {
    TasksService.editTaskOnApi(taskUpdate, taskId);
  };

  self.deleteTask = function(taskId) {
    TasksService.deleteTaskOnApi(taskId);
  };
}]);