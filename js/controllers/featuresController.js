goalbusterApp.controller('FeaturesController', ['FeaturesService', function(FeaturesService){
  var self = this;
  self.city = 'London'
  
  self.weather = function(){
    return FeaturesService.getWeather().then(function(resp){
      self.temp = resp
    })
  };
}])