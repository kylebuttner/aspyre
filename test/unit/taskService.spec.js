// "use strict"

describe('TaskService', function() {
  beforeEach(module('goalbusterApp'));

  var TaskService, httpBackend;
  var apiURL = "http://goalbuster-api.herokuapp.com"
  var taskData = [{name: "read notes"}, {name: "buy bike"}]
  var task = "new task"
  var goalId =  1
  var taskId = 1

  beforeEach(inject(function(_TaskService_, _TaskFactory_, $httpBackend){
    TaskService = _TaskService_;
    TaskFactory =  _TaskFactory_;
    httpBackend = $httpBackend;
  }));

  it ('featch a list of tasks for a goal', function() {
    httpBackend.expectGET(apiURL + '/goals/' + goalId + "/tasks.json" ).respond(taskData)
    var task1 = new TaskFactory("read notes")
    var task2 = new TaskFactory("buy bike")

    TaskService.getAllFromApi(goalId).then(function(tasks){
       expect(tasks).toContain(task1, task2);
    });
    httpBackend.flush();
  });

  it ('sends a post request', function() {
    httpBackend.expectPOST(apiURL + '/goals/' + goalId +"/tasks").respond(201, 'success');
    TaskService.postTaskToApi(task, goalId).then(function(response){
      expect(response.status).toEqual(201);
    });
    httpBackend.flush();
  });

  it ('sends a put request', function() {
    httpBackend.expectPUT(apiURL + "/tasks/" + taskId).respond(204, 'task updated successfully');
    TaskService.editTaskOnApi(task, taskId).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  });

  it ('sends deletes a task', function() {
    httpBackend.expectDELETE(apiURL + "/tasks/" + taskId).respond(204, 'task deleted successfully');
    TaskService.deleteTaskOnApi(taskId).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  })

});
