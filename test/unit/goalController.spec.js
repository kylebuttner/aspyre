"use strict"

describe('GoalsController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, GoalsService, GoalsFactory, GoalObject, TaskName, TasksService, q, GoalId, TaskId;

  beforeEach(inject(function($controller, _GoalsFactory_, _GoalsService_, _TasksService_, $httpBackend, $q) {
    GoalsFactory = _GoalsFactory_;
    GoalsService = _GoalsService_;
    TasksService = _TasksService_;
    GoalObject =  "learn piano"
    GoalId = 1
    TaskName = "read notes"
    TaskId = 1
    ctrl = $controller('GoalsController');
    q = $q;
  }));

  describe('CRUD Goal', function() {
    xit('when initializing it gets all goals from API', function() {
      expect(ctrl.goals).toEqual([]);
    });
    
    it('can add a new goal', function() {
      spyOn(GoalsService, "postGoalToApi");
      ctrl.addNewGoal(GoalObject);
      expect(GoalsService.postGoalToApi).toHaveBeenCalledWith(GoalObject);
    });

    it('refreshes the list of goals', function() {
      spyOn(GoalsService, "getAllFromApi").and.returnValue(q.when());
      ctrl.refreshGoals();
      expect(GoalsService.getAllFromApi).toHaveBeenCalled();
    });
  });
});
