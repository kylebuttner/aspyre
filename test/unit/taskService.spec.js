"use strict"

describe('TasksService', function() {
  beforeEach(module('goalbusterApp'));

  var TasksService, httpBackend, TasksFactory, task1, task2;
  var apiURL = "https://goalbuster-api.herokuapp.com";
  var taskData = [{name: "read notes", frequency: "monthly", id: 1, completed: false}, {name: "buy bike", frequency: "daily", id:2, completed: true}];
  var formObj = {name: "new task", frequency: "daily"};
  var goalId =  1;

  beforeEach(inject(function(_TasksService_, _TasksFactory_, $httpBackend){
    TasksService = _TasksService_;
    TasksFactory =  _TasksFactory_;
    httpBackend = $httpBackend;
  }));

  it ('featch a list of tasks for a goal', function() {
    httpBackend.expectGET(apiURL + '/goals/' + goalId + "/tasks.json" ).respond(taskData)
      task1 = new TasksFactory()
      task2 = new TasksFactory()
      task1.name = "read notes";
      task2.name = "buy bike";
      task1.frequency = "monthly"
      task2.frequency = "daily"
      task1.id = 1;
      task2.id = 2;
      task1.completed = false;
      task2.completed = true;

    TasksService.getAllFromApi(goalId).then(function(tasks){
       expect(tasks).toContain(task1, task2);
    });
    httpBackend.flush();
  });

  it ('sends a post request', function() {
    httpBackend.expectPOST(apiURL + '/goals/' + goalId +"/tasks").respond(201, 'success');
    TasksService.postTaskToApi(formObj, goalId).then(function(response){
      expect(response.status).toEqual(201);
    });
    httpBackend.flush();
  });

  it ('sends a put request', function() {
    httpBackend.expectPUT(apiURL + "/tasks/" + task1.id).respond(204, 'task updated successfully');
    TasksService.editTaskOnApi(task1).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  });

  it ('deletes a task', function() {
    httpBackend.expectDELETE(apiURL + "/tasks/" + task1.id).respond(204, 'task deleted successfully');
    TasksService.deleteTaskOnApi(task1).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  });

});
