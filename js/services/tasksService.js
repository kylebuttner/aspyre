"use strict"

goalbusterApp.service('TasksService',['TasksFactory', '$http', function(TasksFactory, $http){
  self = this;

  self.getAllFromApi = function(goalId){
        return $http.get('https://goalbuster-api.herokuapp.com/goals/' + goalId +'/tasks.json')
    .then(_handleResponseFromApi);
  }

  self.postTaskToApi = function(data, goalId){
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/goals/' + goalId + "/tasks",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data, 'daily', false)
    });
  }

  self.editTaskOnApi = function(data, taskId){
    return $http({
      method: 'PUT',
      url: 'http://localhost:3000/tasks/' + taskId,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: _formatPOSTData(data, 'daily', true)
    });
  }

  self.deleteTaskOnApi = function(taskId){
    return $http({
      method: 'DELETE',
      url: 'http://localhost:3000/tasks/' + taskId,
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
    var newTask = new TasksFactory(TaskData.name)
    newTask.name = TaskData.name;
    newTask.id = TaskData.id;
    return newTask;
  }

  function _formatPOSTData(NewTask, frequency, boolean) {
    var data = {name: NewTask, frequency: frequency, completed: boolean};
    return JSON.stringify(data);
  }
}])




// 'http://localhost:3000/goals/goals/'
//https://goalbuster-api.herokuapp.com
