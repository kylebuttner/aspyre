"use strict"

describe('GoalsService', function() {
  beforeEach(module('goalbusterApp'));

  var GoalsService, GoalsFactory, httpBackend;
  var apiURL = "https://goalbuster-api.herokuapp.com/";
  var goalsData = [{name: "learn piano", id: 1}, {name: "finish book", id: 2}, {name: "more sport", id: 3} ]
  var goal = {name: "new goal", id: 4};
  var goalId = 1;

  beforeEach(inject(function(_GoalsService_, _GoalsFactory_, $httpBackend){
    GoalsService = _GoalsService_;
    GoalsFactory = _GoalsFactory_;
    httpBackend = $httpBackend;
  }));

  it ('fetches a list of goals', function(){
    httpBackend.expectGET(apiURL + "goals.json").respond(goalsData);
    var goal1 = new GoalsFactory();
    goal1.name = "learn piano";
    goal1.id = 1
    var goal2 = new GoalsFactory("finish book");
    goal2.name = "finish book";
    goal2.id = 2

    GoalsService.getAllFromApi().then(function(goals){
      expect(goals).toContain(goal1, goal2)
    });
    httpBackend.flush();
  });

  it('post request takes an argument', function(){
    spyOn(GoalsService, 'postGoalToApi');
    GoalsService.postGoalToApi(goal);
    expect(GoalsService.postGoalToApi).toHaveBeenCalledWith(goal);
  });

  it ('sends a post request', function(){
    httpBackend.expectPOST(apiURL + 'goals/').respond(201, 'success');
    GoalsService.postGoalToApi(goal).then(function(response){
      expect(response.status).toEqual(201);
    });
    httpBackend.flush();
  });

  it ('sends a put request', function() {
    httpBackend.expectPUT(apiURL + "goals/" + goalId).respond(204, 'goal updated successfully');
    GoalsService.editGoalInApi(goal, goalId).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  });

  it ('sends deletes a goal', function() {
    httpBackend.expectDELETE(apiURL + "goals/" + goalId).respond(204, 'goal deleted successfully');
    GoalsService.deleteGoalOnApi(goalId).then(function(response){
      expect(response.status).toEqual(204);
    });
    httpBackend.flush();
  });
});
