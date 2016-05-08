"use strict"

goalbusterApp.service('TasksService',['TasksFactory', '$http', function(TasksFactory, $http){
  self = this;

  self.getAllFromApi = function(goalId){
    console.log("get service", goalId)
        return $http.get('http://goalbuster-api.herokuapp.com/' + goalId +'/tasks.json')
    .then(_handleResponseFromApi);
  }

  self.postTaskToApi = function(data, goalId){
    console.log("service", goalId)
    return $http({
      method: 'POST',
      url: 'http://goalbuster-api.herokuapp.com/' + goalId + "/tasks",
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
    return new TasksFactory(TaskData.name)
  }

  function _formatPOSTData(NewTask) {
    var data = {name: NewTask};
    return JSON.stringify(data);
  }
}])




// 'http://goalbuster-api.herokuapp.com/goals/'