"use strict"

describe('GoalService', function() {
  beforeEach(module('goalbusterApp'));

  var GoalService, GoalFactory, httpBackend;
  var apiURL = "http://goalbuster-api.herokuapp.com/";
  var goalsData = [{name: "learn piano"}, {name: "finish book"}, {name: "more sport"} ]
  var goal = {name: "new goal"};

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

  it('post request takes an argument', function(){
    spyOn(GoalService, 'postGoal');
    GoalService.postGoal(goal);
    expect(GoalService.postGoal).toHaveBeenCalledWith(goal);
  })

  it ('sends a post request', function(){
    httpBackend.expectPOST(apiURL + 'goals').respond(201, 'success');
    GoalService.postGoal(goal).then(function(response){
      expect(response.status).toEqual(201);
    });
  });

  // fit ('sends the right arguments to api', function(goals){
  //   var goal1 = new GoalFactory("learn piano");
  //
  //   GoalService.postGoalsToApi(goal1);
  //   expect(httpBackend).toHaveBeenCalledWith(goal1);
  //
  // });
});
