"use strict"

goalbusterApp.service('GoalService', ['$http', 'GoalFactory', function($http, GoalFactory) {
  var self = this;

  self.getAllFromApi = function() {
    return $http.get('https://goalbuster-api.herokuapp.com/goals.json')
      .then(_handleResponseFromApi);
  }

  self.postGoalToApi = function(data) {
     $http({
      method: 'POST',
      url: 'https://goalbuster-api.herokuapp.com/goals/',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data)
    });
  }

  self.editGoalInApi = function(data, id) {
    console.log("DATAAAA", data, "IDIDD", id)
    $http({
      method: 'PUT',
      url: 'https://goalbuster-api.herokuapp.com/goals/' + id + "/",
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
