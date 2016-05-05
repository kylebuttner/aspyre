"use strict"

goalbusterApp.service('GoalService', ['$http', 'GoalFactory', function($http, GoalFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('http://goalbuster-api.herokuapp.com/goals.json')
      .then(_handleResponseFromApi);
  }

  self.postGoalToApi = function(data) {
     return $http({
      method: 'POST',
      url: 'http://goalbuster-api.herokuapp.com/goals',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data)
    });

  }

  function _formatPOSTData(param) {
    var data = {name: param};
    return JSON.stringify(data);
  }

  function _handleResponseFromApi (response)  {
    return response.data.map(_createGoalFromData);
  }

  function _createGoalFromData (goalsData){
    return new GoalFactory(goalsData.name);
  }



}]);
