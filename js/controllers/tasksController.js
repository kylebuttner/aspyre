"use strict"

goalbusterApp.controller('TasksController', ['TasksService', function(TasksService) {
  var self = this;

  self.getTasksForGoal = function(goalId) {
    TasksService.getAllFromApi(goalId).then(_saveTasks);
  };

  self.addNewTask = function (formObj, goalId) {
    TasksService.postTaskToApi(formObj, goalId);
    self.tasks.push(formObj)
  };

  self.editTask = function(taskObj) {
    TasksService.editTaskOnApi(taskObj);
    self.tasks.forEach(function(task){
      if (task.id === taskObj.id) {
        task === taskObj
      }
    })
  };

  self.deleteTask = function(taskObj) {
    TasksService.deleteTaskOnApi(taskObj);
    var taskIndex;
    for (var i=0;i<self.tasks.length;i++) {
      if (self.tasks[i].id === taskObj.id) {
        taskIndex = i;
      }
    };
    self.tasks.splice(taskIndex,1)
  };

  function _saveTasks(response) {
    self.tasks = response;
  };

}]);
