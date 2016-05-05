goalbusterApp.factory('TaskFactory', function(){
  var Task = function(name){
    this.name = name;
  };
  return Task;
})