goalbusterApp.controller('GoalbusterController', [ function() {
  var self = this;

  self.goals = ["Goal 1", "Goal 2", "Goal 3"]

  self.addNewGoal = function(newGoal) {
    self.goals.push(newGoal);
  };
  
}]);
