"use strict"

describe('GoalbusterController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, GoalService, GoalFactory, GoalObject, TaskName, TaskService, q, GoalId;

  beforeEach(inject(function($controller, _GoalFactory_, _GoalService_, _TaskService_, $httpBackend, $q) {
    GoalFactory = _GoalFactory_;
    GoalService = _GoalService_;
    TaskService = _TaskService_;
    GoalObject =  "learn piano"
    TaskName = "read notes"
    GoalId = 1
    ctrl = $controller('GoalbusterController');
    q = $q;
  }));

  describe('CRUD Goal', function() {
    xit('when initializing it gets all goals from API', function() {
      expect(ctrl.goals).toEqual([]);
    });

    it('can add a new goal', function() {
      spyOn(GoalService, "postGoalToApi");
      ctrl.addNewGoal(GoalObject)
      expect(GoalService.postGoalToApi).toHaveBeenCalledWith(GoalObject);
    });

    it('refreshes the list of goals', function() {
      spyOn(GoalService, "getAllFromApi").and.returnValue(q.when())
      ctrl.refreshGoals()
      expect(GoalService.getAllFromApi).toHaveBeenCalled();
    });
  });

  describe('CRUD Task', function (){
    xit('when initializing it gets all tasks from API', function() {
      expect(ctrl.tasks).toEqual([]);
    });
  
    it('can add a new task', function () {
      spyOn(TaskService, 'postTaskToApi');
      ctrl.addNewTask(TaskName, GoalId);
      expect(TaskService.postTaskToApi).toHaveBeenCalledWith(TaskName, GoalId);
    });

    it('refreshes the list of goals', function() {
      spyOn(TaskService, "getAllFromApi").and.returnValue(q.when())
      ctrl.refreshTasks(GoalId)
      expect(TaskService.getAllFromApi).toHaveBeenCalledWith(GoalId);
    });
  });
});
