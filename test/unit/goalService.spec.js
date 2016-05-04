"use strict"

describe('GoalService', function() {
  beforeEach(module('goalbusterApp'));

  var GoalService, GoalFactory, httpBackend;
  var apiURL = "http://goalbuster-api.herokuapp.com/";
  var goalsData = [{name: "learn piano"}, {name: "finish book"}, {name: "more sport"} ]

  beforeEach(inject(function(_GoalService_, _GoalFactory_, $httpBackend){
    GoalService = _GoalService_;
    GoalFactory = _GoalFactory_;
    httpBackend = $httpBackend;
  }));

  it ('fetches a list of goals', function(){
    httpBackend.expectGET(apiURL + "goals.json").respond(goalsData);
    var goal1 = new GoalFactory("learn piano");
    var goal2 = new GoalFactory("finish book");

    GoalService.getAll().then(function(goals){
      expect(goals).toContain(goal1, goal2)
    });
    httpBackend.flush();
  });

  fit ('sends the right arguments to api', function(goals){
    var goal1 = new GoalFactory("learn piano");

    GoalService.postGoalsToApi(goal1);
    expect(httpBackend).toHaveBeenCalledWith(goal1);

  });
});
