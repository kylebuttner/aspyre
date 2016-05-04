"use strict"

goalbusterApp.service('GoalService', ['$http', 'GoalFactory', function($http, GoalFactory) {
  var self = this;

  self.getAll = function() {
    return $http.get('http://goalbuster-api.herokuapp.com/goals.json')
      .then(_handleResponseFromApi);
  }

  self.postGoalsToApi = function(goal) {
    var req = {
     method: 'POST',
     url: 'http://goalbuster-api.herokuapp.com/',
     headers: {
       'Content-Type': 'application/json'
     },
     data: goal
   };
    // $http(req)
    //   .then()

  }

  function _handleResponseFromApi (response)  {
    return response.data.map(_createGoalFromData);
  }

  function _createGoalFromData (goalsData){
    return new GoalFactory(goalsData.name);
  }



}]);
