"use strict"

describe('goalsController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, GoalService, GoalFactory, testObject, q;

  beforeEach(inject(function($controller, _GoalFactory_, _GoalService_, $httpBackend, $q) {
    GoalFactory = _GoalFactory_;
    GoalService = _GoalService_;
    testObject = [{name: "learn piano"}];
    ctrl = $controller('goalsController');
    q = $q;
  }));

  it('when initializing it gets all goals from API', function() {
    expect(ctrl.goals).toEqual([]);
  });

  it('can add a new goal', function() {
    spyOn(GoalService, "postGoalToApi");
    ctrl.addNewGoal(testObject);
    expect(GoalService.postGoalToApi).toHaveBeenCalledWith(testObject);
  });

  it('refreshes the list of goals', function() {
    spyOn(GoalService, "getAllFromApi").and.returnValue(q.when());
    ctrl.refreshGoals();
    expect(GoalService.getAllFromApi).toHaveBeenCalled();
  });
});
