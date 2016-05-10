var goalbusterApp = angular.module('goalbusterApp', ['ngRoute', 'xeditable', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'ng-token-auth'])
  .run(function(editableOptions) {
    editableOptions.theme = 'default';
  })
  .config(['$authProvider', '$routeProvider', function($authProvider, $routeProvider) {
    $authProvider.configure({
       apiUrl: 'https://goalbuster-api.herokuapp.com',
       authProviderPaths: {
         github: '/auth/github'
       }
    });
    $routeProvider
      .when("/", {
        templateUrl: 'views/home.html'
      })
      .when("/addnewgoal", {
        templateUrl: 'views/addnewgoal.html'
      })
      .otherwise({redirectTo:'/'});
  }]);
