var goalbusterApp = angular.module('goalbusterApp', ['ngRoute', 'xeditable', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'ng-token-auth', 'ui.router'])
  .run(function(editableOptions) {
    editableOptions.theme = 'default';
  })
  .config(['$authProvider', '$stateProvider', function($authProvider, $stateProvider) {
    $authProvider.configure({
       apiUrl: 'https://goalbuster-api.herokuapp.com',
       authProviderPaths: {
         github: '/auth/github'
       }
    });
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: 'views/signUp.html',
        data: {
          requireLogin: false
        }
      });
      // .state("/addnewgoal", {
      //   templateUrl: 'views/addnewgoal.html'
      // })
      // .otherwise({redirectTo:'/'});
  }]);
