"use strict"

describe('TasksController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, TaskName, TasksService, TasksFactory, q, GoalId, TaskId;

  beforeEach(inject(function($controller, _TasksFactory_, _TasksService_, $httpBackend, $q) {
    TasksService = _TasksService_;
    TasksFactory = _TasksFactory_;
    GoalId = 1;
    TaskName = "read notes";
    TaskId = 1;
    ctrl = $controller('TasksController');
    q = $q;
  }));


  describe('CRUD Task', function (){
    xit('when initializing it gets all tasks from API', function() {
      expect(ctrl.tasks).toEqual([]);
    });

    it('can add a new task', function () {
      spyOn(TasksService, 'postTaskToApi');
      ctrl.addNewTask(TaskName, GoalId);
      expect(TasksService.postTaskToApi).toHaveBeenCalledWith(TaskName, GoalId);
    });

    it('refreshes the list of tasks', function() {
      spyOn(TasksService, "getAllFromApi").and.returnValue(q.when())
      ctrl.refreshTasks(GoalId)
      expect(TasksService.getAllFromApi).toHaveBeenCalledWith(GoalId);
    });

    it('can update a task', function () {
      spyOn(TasksService, 'editTaskOnApi');
      ctrl.editTask(TaskName, TaskId);
      expect(TasksService.editTaskOnApi).toHaveBeenCalledWith(TaskName, TaskId);
    });

    it('can delete a task', function () {
      spyOn(TasksService, 'deleteTaskOnApi');
      ctrl.deleteTask(TaskId);
      expect(TasksService.deleteTaskOnApi).toHaveBeenCalledWith(TaskId);
    });
  });
});