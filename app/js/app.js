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
      .when("/addnewgoal", {templateUrl: 'partials/addnewgoal.html'})
      .otherwise({redirectTo:'/'});
  }]);
