"use strict"

goalbusterApp.service('GoalService', ['$http', 'GoalFactory', function($http, GoalFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('http://goalbuster-api.herokuapp.com/goals.json')
      .then(_handleResponseFromApi);
  }

  self.postGoalToApi = function(goal) {
    return $http.post('http://goalbuster-api.herokuapp.com/goals', goal)
  }

  function _formatPOSTData(data) {
    JSON.stringify(data);
  }

  function _handleResponseFromApi (response)  {
    return response.data.map(_createGoalFromData);
  }

  function _createGoalFromData (goalsData){
    return new GoalFactory(goalsData.name);
  }



}]);
