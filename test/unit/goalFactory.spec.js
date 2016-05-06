"use strict"

describe('GoalFactory', function() {
  beforeEach(module('goalbusterApp'));

  var goal;

  beforeEach(inject(function(GoalFactory) {
    goal = new GoalFactory();
  }));

  it('creates a new factory object with a goal', function () {
    expect(goal).toEqual(jasmine.any(Object));
  })
})
