describe('GoalFactory', function() {
  beforeEach(module('goalbusterApp'));

  var goal;

  beforeEach(inject(function(GoalFactory) {
    goal = new GoalFactory('New Goal');
  }));

  it('creates a new factory object with a goal', function () {
    expect(goal.name).toEqual('New Goal');
  })
})
