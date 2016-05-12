describe('FeaturesService', function(){
  beforeEach(module('goalbusterApp'));
  var FeaturesService, $httpBackend, apiCall, weatherObj;

  beforeEach(inject(function(_FeaturesService_, $httpBackend){
    FeaturesService = _FeaturesService_;
    httpBackend = $httpBackend;
    apiCall = {url:'http://api.openweathermap.org/data/2.5/weather?q=',
              token: '&appid=fc31ec89424ba65f04b99d6f2e4ed15c',
              units:'&units=metric',
               city:'london'}
    weatherObj= [{temp: "20"}]

  }));

  it ('featches the weather from API', function(){
    httpBackend.expectGET(apiCall.url + apiCall.city + apiCall.token + apiCall.units)
    .respond(weatherObj);
    FeaturesService.getWeather().then(function(weather){
      expect(weather).toContain(weatherObj[0]);
    });
  });
});