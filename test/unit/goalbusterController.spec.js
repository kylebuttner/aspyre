"use strict"

describe('GoalbusterController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, GoalService, GoalFactory, testObject;

  beforeEach(inject(function($controller, _GoalFactory_, _GoalService_, $httpBackend) {
    ctrl = $controller('GoalbusterController');
    GoalFactory = _GoalFactory_;
    GoalService = _GoalService_;
    testObject = [{name: "learn piano"}];
    spyOn(GoalService, 'getAll').and.returnValue(testObject)
  }));



  fit('when initializing it gets all goals from API', function() {
    expect(ctrl.goals).toEqual(testObject);
  });


  // it('initializes with a goal', function() {
  //   var goal1 = new GoalFactory("Goal 1");
  //   var goal2 = new GoalFactory("Goal 2");
  //   var goal3 = new GoalFactory("Goal 3");
  //   expect(ctrl.goals).toEqual([goal1, goal2, goal3]);
  // });

  fit('can add a new goal', function() {
    ctrl.addNewGoal('NewGoal');
    var goal = new GoalFactory('NewGoal');
    expect(ctrl.goals.pop()).toEqual(goal);
  });
});
