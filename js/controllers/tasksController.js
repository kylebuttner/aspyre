"use strict"

goalbusterApp.controller('TasksController', ['TasksService', function(TasksService) {
  var self = this;
  var taskText = '';


  self.getTasksForGoal = function(goalId) {
    TasksService.getAllFromApi(goalId).then(_saveTasks);
  };

  self.addNewTask = function (formObj, goalId) {
    TasksService.postTaskToApi(formObj, goalId);
    _refreshTasks(goal_id);
    self.taskText='';
  };

  self.editTask = function(taskObj) {
    TasksService.editTaskOnApi(taskUpdate, taskId);
  };

  self.deleteTask = function(taskObj) {
    TasksService.deleteTaskOnApi(taskId);
    _refreshTasks(taskObj.goal_id);
  };

  function _refreshTasks(goalId) {
     TasksService.getAllFromApi(goalId).then(_saveTasks);
  };

  function _saveTasks(response) {
    self.tasks = response;
  };

}]);
