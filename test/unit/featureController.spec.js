describe('FeaturesController', function() {
  beforeEach(module('goalbusterApp'));

  var FeaturesService, ctrl, httpBackend;

  beforeEach(inject(function($controller, $httpBackend, _FeaturesService_) {
    FeaturesService = _FeaturesService_;
    ctrl = $controller('FeaturesController');
    httpBackend =  $httpBackend;
  }));

  xdescribe('weather', function() {
    it('gets the weather of the current city', function(){
      spyOn(FeaturesService, "getWeather");
      ctrl.weather()
      expect(FeaturesService.getWeather).toHAveBeenCalled;
    });
  });
});