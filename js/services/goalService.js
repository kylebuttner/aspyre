"use strict"

goalbusterApp.service('GoalService', ['$http', 'GoalFactory', function($http, GoalFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('https://goalbuster-api.herokuapp.com/goals.json')
      .then(_handleResponseFromApi);
  };

  self.postGoalToApi = function(data) {
    return $http({
      method: 'POST',
      url: 'https://goalbuster-api.herokuapp.com/goals/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data)
    });
  };

  self.editGoalInApi = function(data, goalId) {
    return $http({
      method: 'PUT',
      url: 'https://goalbuster-api.herokuapp.com/goals/' + goalId,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data)
    });
  }

  self.deleteGoalOnApi = function(goalId){
    return $http({
        method: 'DELETE',
        url: 'https://goalbuster-api.herokuapp.com/goals/' + goalId,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
  };

  function _formatPOSTData(param) {
    var data = {name: param};
    return JSON.stringify(data);
  };

  function _handleResponseFromApi (response)  {
    return response.data.map(_createGoalFromData);
  };

  function _createGoalFromData (goalsData){
    var newgoal = new GoalFactory();
    newgoal.name = goalsData.name;
    newgoal.id = goalsData.id;
    return newgoal;
  };
}]);
