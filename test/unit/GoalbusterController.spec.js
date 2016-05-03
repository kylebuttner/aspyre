describe('GoalbusterController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl;

  beforeEach(inject(function($controller, _GoalFactory_) {
    ctrl = $controller('GoalbusterController');
    GoalFactory = _GoalFactory_;
  }));


  it('initializes with a goal', function() {
    var goal1 = new GoalFactory("Goal 1");
    var goal2 = new GoalFactory("Goal 2");
    var goal3 = new GoalFactory("Goal 3");
    expect(ctrl.goals).toEqual([goal1, goal2, goal3]);
  });

  it('can add a new goal', function() {
    ctrl.addNewGoal('NewGoal');
    var goal = new GoalFactory('NewGoal');
    expect(ctrl.goals.pop()).toEqual(goal);
  });
});
