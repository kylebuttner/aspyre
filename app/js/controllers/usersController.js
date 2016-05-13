goalbusterApp.controller('UsersController', ['ipCookie', '$q', '$auth','$location', function(ipCookie, $q, $auth, $location) {
  var self = this;

  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };

  self.handleRegBtnClick = function() {
    $auth.submitRegistration(self.registrationForm)
  };

  self.handleSignOutBtnClick = function() {
    $auth.signOut();
  };

  self.handleLoginBtnClick = function() {
    $auth.submitLogin(self.loginForm);
  };

  self.isUserValid = function() {
    if(!!ipCookie().auth_headers && !!ipCookie().auth_headers.expiry) {
      return true
    } else { return false}
  };

  self.userName = function() {
    if(!!ipCookie().auth_headers && !!ipCookie().auth_headers.expiry){
      console.log(ipCookie())
    }
  }
  self.redirectToHome = function() {
    $location.url('/home')
  }

}]);
