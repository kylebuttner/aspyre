"use strict" 

describe ('TasksFactory', function(){
  beforeEach(module('goalbusterApp'));

  var task;

  beforeEach(inject(function(TasksFactory){
    task = new TasksFactory("new Task")
  }));

  it('creates a new factory object with a goal', function () {
    expect(task.name).toEqual('new Task');
  });
});