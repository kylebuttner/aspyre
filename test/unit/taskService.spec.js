"use strict"

describe('TasksService', function() {
  beforeEach(module('goalbusterApp'));

  var TasksService, httpBackend, TasksFactory;
  var apiURL = "http://goalbuster-api.herokuapp.com"
  var taskData = [{name: "read notes"}, {name: "buy bike"}]
  var task = "new task"
  var goalId =  1
  var taskId = 1

  beforeEach(inject(function(_TasksService_, _TasksFactory_, $httpBackend){
    TasksService = _TasksService_;
    TasksFactory =  _TasksFactory_;
    httpBackend = $httpBackend;
  }));

  it ('featch a list of tasks for a goal', function() {
    httpBackend.expectGET(apiURL + '/goals/' + goalId + "/tasks.json" ).respond(taskData)
    var task1 = new TasksFactory("read notes")
    var task2 = new TasksFactory("buy bike")

    TasksService.getAllFromApi(goalId).then(function(tasks){
       expect(tasks).toContain(task1, task2);
    });
    httpBackend.flush();
  });

  it ('sends a post request', function() {
    httpBackend.expectPOST(apiURL + '/goals/' + goalId +"/tasks").respond(201, 'success');
    TasksService.postTaskToApi(task, goalId).then(function(response){
      expect(response.status).toEqual(201);
    });
    httpBackend.flush();
  });

  it ('sends a put request', function() {
    httpBackend.expectPUT(apiURL + "/tasks/" + taskId).respond(204, 'task updated successfully');
    TasksService.editTaskOnApi(task, taskId).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  });

  it ('deletes a task', function() {
    httpBackend.expectDELETE(apiURL + "/tasks/" + taskId).respond(204, 'task deleted successfully');
    TasksService.deleteTaskOnApi(taskId).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  })

});
