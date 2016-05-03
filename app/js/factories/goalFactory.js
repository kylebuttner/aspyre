goalbusterApp.factory('GoalFactory', [ function() {
  var Goal = function(name){
    this.name = name;
  };

  return Goal;
}]);
