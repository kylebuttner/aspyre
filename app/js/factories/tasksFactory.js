goalbusterApp.factory('TasksFactory', function(){
  var Task = function(name){
    this.name = name;
  };
  return Task;
})