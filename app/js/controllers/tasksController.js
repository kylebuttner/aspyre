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

  self.editTask = function(taskObj) {
    TasksService.editTaskOnApi(taskObj);
    _refreshTasks();
  };

  self.deleteTask = function(taskObj) {
    TasksService.deleteTaskOnApi(taskObj);
    _refreshTasks();
  };

  function _refreshTasks(goalId) {
     TasksService.getAllFromApi(goalId).then(_saveTasks);
  };

  function _saveTasks(response) {
    self.tasks = response;
  };

}]);
