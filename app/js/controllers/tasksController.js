"use strict"

goalbusterApp.controller('TasksController', ['TasksService', function(TasksService) {
  var self = this;
  var taskText = '';


  self.getTasksForGoal = function(goalId) {
    TasksService.getAllFromApi(goalId).then(_saveTasks);
  };

  self.addNewTask = function (formObj, goalId) {
    TasksService.postTaskToApi(formObj, goalId);
    _refreshTasks(goalId);
    self.taskText='';
  };

  self.editTask = function(taskUpdate, taskId) {
    TasksService.editTaskOnApi(taskUpdate, taskId);
  };

  self.deleteTask = function(taskId) {
    TasksService.deleteTaskOnApi(taskId);
    _refreshTasks(goalId);
  };

  function _refreshTasks(goalId) {
     TasksService.getAllFromApi(goalId).then(_saveTasks);
  };

  function _saveTasks(response) {
    self.tasks = response;
  };

}]);
