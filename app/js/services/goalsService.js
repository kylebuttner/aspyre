"use strict"

goalbusterApp.service('GoalsService', ['$http', 'GoalsFactory', function($http, GoalsFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('https://goalbuster-api.herokuapp.com/goals.json')
      .then(_handleResponseFromApi);
  };

  self.postGoalToApi = function(formObj) {
    return $http({
      method: 'POST',
      url: 'https://goalbuster-api.herokuapp.com/goals/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(formObj)
    });
  };

  self.editGoalInApi = function(goalObj) {
    return $http({
      method: 'PUT',
      url: 'https://goalbuster-api.herokuapp.com/goals/' + goalObj.id,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(goalObj)

    });
  };

  self.deleteGoalOnApi = function(goalObj){
    return $http({
        method: 'DELETE',
        url: 'https://goalbuster-api.herokuapp.com/goals/' + goalObj.id,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
  };

  function _formatPOSTData(dataObj) {
    return JSON.stringify(dataObj);
  };

  function _handleResponseFromApi (response)  {
    return response.data.map(_createGoalFromData);
  };

  function _createGoalFromData (goalObj){
    var newgoal = new GoalsFactory();
    newgoal.name = goalObj.name;
    newgoal.id = goalObj.id;
    newgoal.completed = goalObj.completed
    return newgoal;
  };
}]);
