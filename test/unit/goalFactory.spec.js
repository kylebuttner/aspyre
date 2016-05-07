"use strict"

describe('GoalsFactory', function() {
  beforeEach(module('goalbusterApp'));

  var goal;

  beforeEach(inject(function(GoalsFactory) {
    goal = new GoalsFactory();
  }));

  it('creates a new factory object with a goal', function () {
    expect(goal).toEqual(jasmine.any(Object));
  })
})
