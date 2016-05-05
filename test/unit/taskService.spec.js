// "use strict"

describe('TaskService', function() {
  beforeEach(module('goalbusterApp'));

  var TaskService, httpBackend;
  var apiURL = "http://goalbuster-api.herokuapp.com/goals/"
  var taskData = [{name: "read notes"}, {name: "buy bike"}]
  var task = "new task"
  var goalId =  "1"

  beforeEach(inject(function(_TaskService_, _TaskFactory_, $httpBackend){
    TaskService = _TaskService_;
    TaskFactory =  _TaskFactory_;
    httpBackend = $httpBackend;
  }));

  it ('featch a list of tasks for a goal', function() {
    httpBackend.expectGET(apiURL + goalId + "/tasks.json" ).respond(taskData)
    var task1 = new TaskFactory("read notes")
    var task2 = new TaskFactory("buy bike")

    TaskService.getAllFromApi(goalId).then(function(tasks){
       expect(tasks).toContain(task1, task2);
    });
    httpBackend.flush();    
  });

  it ('sends a post request', function() {
    httpBackend.expectPOST(apiURL + goalId +"/tasks").respond(201, 'success');
    TaskService.postTaskToApi(task, goalId).then(function(response){
      expect(response.status).toEqual(201);
    });
    httpBackend.flush();
  })

});