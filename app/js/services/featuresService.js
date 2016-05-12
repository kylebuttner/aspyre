goalbusterApp.service('FeaturesService',['$http', function($http){
  var self = this;
  self.getWeather = function(){

  var apiCall ={url:'http://api.openweathermap.org/data/2.5/weather?q=',
  token: '&appid=fc31ec89424ba65f04b99d6f2e4ed15c',
  units:'metric',
  city:'london'}
  

  return $http.jsonp(apiCall.url +  apiCall.token, { params : {
    q : apiCall.city,
    units : apiCall.units,
    callback: 'JSON_CALLBACK'
    }})
      .then(_handleResponseFromApi);
  }


  function _handleResponseFromApi(data) {
    return data.data.main.temp+"\xB0C"
  };
}]);



