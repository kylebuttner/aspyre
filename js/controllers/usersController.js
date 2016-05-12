goalbusterApp.controller('UsersController', ['ipCookie', '$q', '$auth', function(ipCookie, $q, $auth) {
  var self = this;

  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };

  self.handleRegBtnClick = function() {
    console.log(self.registrationForm);
    $auth.submitRegistration(self.registrationForm);
  };

  self.handleSignOutBtnClick = function() {
    $auth.signOut();
  };

  self.handleLoginBtnClick = function() {
    $auth.submitLogin(self.loginForm);

  };

  self.isUserValid = function() {
    if(!!ipCookie().auth_headers) {
      return true
    } else { return false}
  };

}]);
