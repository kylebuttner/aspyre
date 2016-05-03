goalbusterApp.controller('GoalbusterController', [ 'GoalFactory', function(GoalFactory) {
  var self = this;

  self.goals = [new GoalFactory("Goal 1"),
                new GoalFactory("Goal 2"),
                new GoalFactory("Goal 3")]

  self.addNewGoal = function(newGoal) {
    self.goals.push(new GoalFactory(newGoal));
  };

}]);
