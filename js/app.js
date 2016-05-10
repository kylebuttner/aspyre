var goalbusterApp = angular.module('goalbusterApp', ['ngRoute', 'xeditable', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'ng-token-auth', 'ui.router'])
  .run(['$rootScope', '$state', 'editableOptions', function($rootScope, $state, editableOptions) {
    $rootScope.$on('auth:login-success', function() {
      $state.go("add new goal")
      // alert('ALERT')
    })
    editableOptions.theme = 'default';
  }])
  .config(['$authProvider', '$stateProvider', '$urlRouterProvider', function($authProvider, $stateProvider, $urlRouterProvider) {
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
      })
      .state("add new goal", {
        url: "/add_goal",
        // abstract: true,
        templateUrl: 'views/addnewgoal.html',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      });
      $urlRouterProvider.otherwise('/');
  }]);
