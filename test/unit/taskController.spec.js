"use strict"

describe('TasksController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, TaskObj, TasksService, TasksFactory, q, GoalId;

  beforeEach(inject(function($controller, _TasksService_, $httpBackend) {
    TasksService = _TasksService_;
    GoalId = 1;
    TaskObj = {name :"read notes", id: 1}
    ctrl = $controller('TasksController');
  }));


  describe('CRUD Task', function (){
    xit('when initializing it gets all tasks from API', function() {
      expect(ctrl.tasks).toEqual([]);
    });

    it('can add a new task', function () {
      spyOn(TasksService, 'postTaskToApi');
      ctrl.addNewTask(TaskObj, GoalId);
      expect(TasksService.postTaskToApi).toHaveBeenCalledWith(TaskObj, GoalId);
    });

    it('can update a task', function () {
      spyOn(TasksService, 'editTaskOnApi');
      ctrl.editTask(TaskObj);
      expect(TasksService.editTaskOnApi).toHaveBeenCalledWith(TaskObj);
    });

    it('can delete a task', function () {
      spyOn(TasksService, 'deleteTaskOnApi');
      ctrl.deleteTask(TaskObj);
      expect(TasksService.deleteTaskOnApi).toHaveBeenCalledWith(TaskObj);
    });
  });
});