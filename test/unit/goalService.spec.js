describe('goalService', function() {
  beforeEach(module('goalbusterApp'));

  var goalService, GoalFactory, httpBackend;
  var apiURL = "http://goalbuster-api.herokuapp.com/";
  var goalsData = [{name: "learn piano"}, {name: "finish book"}, {name: "more sport"} ] 

  beforeEach(inject(function(_goalService_, _GoalFactory_, $httpBackend){
    goalService = _goalService_;
    GoalFactory = _GoalFactory_;
    httpBackend = $httpBackend;
  }));

  it ('fetches a list of goals', function(){
    httpBackend.expectGet(apiURL + "goals").respond(goalsData);
    var goal1 = new GoalFactory("learn piano");
    var goal2 = new GoalFactory("finish book");

    goalService.getAll().then(function(goals){
      expect(goals).toEqual([goal1, goal2])
    });
    httpBackend.flush();
  }); 
});