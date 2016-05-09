goalbusterApp.factory('TasksFactory', function(){
  var Task = function(){
    self.completed = false;
  };
  return Task;
})