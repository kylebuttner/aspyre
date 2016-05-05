"use strict"

goalbusterApp.service('TaskService',['TaskFactory', '$http', function(TaskFactory, $http){
  self = this;

  
  self.getAllFromApi = function(goalId){
        return $http.get('http://goalbuster-api.herokuapp.com/goals/'+ goalId +'/tasks.json')
    .then(_handleResponseFromApi);
  }

  self.postTaskToApi = function(data, goalId){
    return $http({
      method: 'POST',
      url: 'http://goalbuster-api.herokuapp.com/goals/' + goalId + "/tasks",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data)
    });

  }

  function _handleResponseFromApi(response) {
    return response.data.map(_createTaskFromData);
  };

  function _createTaskFromData(TaskData) {
    return new TaskFactory(TaskData.name)
  }

  function _formatPOSTData(NewTask) {
    var data = {name: NewTask};
    return JSON.stringify(data);
  }


}])