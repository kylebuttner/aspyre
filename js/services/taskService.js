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

  self.editTaskOnApi = function(data, taskId){
    return $http({
      method: 'PUT',
      url: 'http://goalbuster-api.herokuapp.com/tasks/' + taskId,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data)
    });
  }

  self.deleteTaskOnApi = function(taskId){
    return $http({
      method: 'DELETE',
      url: 'http://goalbuster-api.herokuapp.com/tasks/' + taskId,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
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
