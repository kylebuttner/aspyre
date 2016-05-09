"use strict"

goalbusterApp.service('GoalsService', ['$http', 'GoalsFactory', function($http, GoalsFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('http://localhost:3000/goals.json')
      .then(_handleResponseFromApi);
  };

  self.postGoalToApi = function(data) {
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/goals/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data, false)
    });
  };

  self.editGoalInApi = function(data, goalId) {
    return $http({
      method: 'PUT',
      url: 'http://localhost:3000/goals/' + goalId,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data, true)

    });
  };

  self.deleteGoalOnApi = function(goalId){
    return $http({
        method: 'DELETE',
        url: 'http://localhost:3000/goals/' + goalId,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
  };

  function _formatPOSTData(param, boolean) {
    console.log(param);
    var data = {name: param, completed: boolean}
    console.log(JSON.stringify(data));
    return JSON.stringify(data);
  };

  function _handleResponseFromApi (response)  {
    return response.data.map(_createGoalFromData);
  };

  function _createGoalFromData (goalsData){
    var newgoal = new GoalsFactory();
    newgoal.name = goalsData.name;
    newgoal.id = goalsData.id;
    return newgoal;
  };
}]);
