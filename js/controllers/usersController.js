goalbusterApp.controller('UsersController', ['ipCookie', '$q', '$auth', function(ipCookie, $q, $auth) {
  var self = this;

  self.handleBtnClick = function() {
    $auth.authenticate("github");
  };

  self.handleRegBtnClick = function() {
    console.log(self.registrationForm);
    console.log('registration');
    $auth.submitRegistration(self.registrationForm);
  };

  self.handleSignOutBtnClick = function() {
    console.log('signout');
    $auth.signOut();
  };

  self.handleLoginBtnClick = function() {
    console.log('login');
    $auth.submitLogin(self.loginForm);

  };

  self.isUserValid = function() {
    console.log('something');
    console.log(ipCookie().auth_headers);
    if(!!ipCookie().auth_headers) {
      return true
    } else { return false}
  };

}]);
