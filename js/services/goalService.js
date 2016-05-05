"use strict"

goalbusterApp.service('GoalService', ['$http', 'GoalFactory', function($http, GoalFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('http://localhost:3000/goals.json')
      .then(_handleResponseFromApi);
  }

  self.postGoalToApi = function(data) {
     $http({
      method: 'POST',
      url: 'http://localhost:3000/goals/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data)
    });
  }

  self.editGoalInApi = function(data, id) {
    console.log(data)
    $http({
      method: 'PUT',
      // url: 'http://goalbuster-api.herokuapp.com/goals/' + id + "/",
      url: 'http://localhost:3000/goals/' + id,

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
    var newgoal = new GoalFactory();
    newgoal.name = goalsData.name;
    newgoal.id = goalsData.id;
    console.log(newgoal)
    return newgoal;
  }



}]);
