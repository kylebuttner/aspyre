"use strict"

describe('GoalbusterController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, GoalService, GoalFactory, testObject;

  beforeEach(inject(function($controller, _GoalFactory_, _GoalService_, $httpBackend) {
    GoalFactory = _GoalFactory_;
    GoalService = _GoalService_;
    testObject = [{name: "learn piano"}];
    ctrl = $controller('GoalbusterController');
  }));



  it('when initializing it gets all goals from API', function() {
    expect(ctrl.goals).toEqual([]);
  });

  it('can add a new goal', function() {
    spyOn(GoalService, "postGoalToApi");
    ctrl.addNewGoal(testObject)
    expect(GoalService.postGoalToApi).toHaveBeenCalledWith(testObject);

  });

  it('refreshs the list of goals', function() {
    spyOn(GoalService, "getAllFromApi");
    ctrl.refreshGoals()
    expect(GoalService.getAllFromApi).toHaveBeenCalled;

  });
});
