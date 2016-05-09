"use strict" 

describe ('TasksFactory', function(){
  beforeEach(module('goalbusterApp'));

  var task;

  beforeEach(inject(function(TasksFactory){
    task = new TasksFactory()
  }));

  it('creates a new factory object with a goal', function () {
    expect(task).toEqual(jasmine.any(Object));
  });
});