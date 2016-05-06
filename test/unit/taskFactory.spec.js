"use strict" 

describe ('TaskFactory', function(){
  beforeEach(module('goalbusterApp'));

  var task;

  beforeEach(inject(function(TaskFactory){
    task = new TaskFactory("new Task")
  }));

  it('creates a new factory object with a goal', function () {
    expect(task.name).toEqual('new Task');
  });
});