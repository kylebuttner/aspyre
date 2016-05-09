"use strict"

describe('GoalsController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, GoalsService, GoalsFactory, GoalName, TaskName, TasksService, q, GoalId, TaskId;

  beforeEach(inject(function($controller, _GoalsFactory_, _GoalsService_, _TasksService_, $httpBackend, $q) {
    GoalsFactory = _GoalsFactory_;
    GoalsService = _GoalsService_;
    TasksService = _TasksService_;
    GoalName =  "learn piano"
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
      ctrl.addNewGoal(GoalName);
      expect(GoalsService.postGoalToApi).toHaveBeenCalledWith(GoalName);
    });

    it('unpdates a goal', function() {
      spyOn(GoalsService, 'editGoalInApi');
      ctrl.editGoal(GoalName, GoalId);
      expect(GoalsService.editGoalInApi).toHaveBeenCalledWith(GoalName, GoalId);
    });

    it('deletes a goal', function() {
      spyOn(GoalsService, "deleteGoalOnApi");
      ctrl.deleteGoal(GoalId);
      expect(GoalsService.deleteGoalOnApi).toHaveBeenCalledWith(GoalId);
    });
  });

  describe('Front end features', function() {
    it('sets a priority goal', function() {
      var goal = ctrl.addNewGoal(GoalName)
      ctrl.setPriorityGoal(goal)
      expect(ctrl.priorityGoal).toEqual(goal);
    })
  })
});
