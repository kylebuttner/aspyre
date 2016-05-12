goalbusterApp.controller('UsersController', ['ipCookie', '$q', '$auth','$location', function(ipCookie, $q, $auth, $location) {
  var self = this;

  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };

  self.handleRegBtnClick = function() {
    $auth.submitRegistration(self.registrationForm);
  };

  self.handleSignOutBtnClick = function() {
    $auth.signOut();
  };

  self.handleLoginBtnClick = function() {
    $auth.submitLogin(self.loginForm);
  };

  self.isUserValid = function() {
    if(!!ipCookie()) {
      return true
    } else { return false}
  };

  self.redirectToHome = function() {
    $location.url('/home')
  }

}]);
