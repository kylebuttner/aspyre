"use strict"

goalbusterApp.service('GoalsService', ['$http', 'GoalsFactory', function($http, GoalsFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('http://localhost:3000/goals.json')
      .then(_handleResponseFromApi);
  };

  self.postGoalToApi = function(goalObj) {
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/goals/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(goalObj)
    });
  };

  self.editGoalInApi = function(goalObj) {
    return $http({
      method: 'PUT',
      url: 'http://localhost:3000/goals/' + goalObj.id,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(goalObj)

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

  function _formatPOSTData(goalObj) {
    console.log('goal obj', goalObj)
    return JSON.stringify(goalObj);
  };

  function _handleResponseFromApi (response)  {
    return response.data.map(_createGoalFromData);
  };

  function _createGoalFromData (goalObj){
    var newgoal = new GoalsFactory();
    newgoal.name = goalObj.name;
    newgoal.id = goalObj.id;
    newgoal.completed = goalObj.completed;
    return newgoal;
  };
}]);
