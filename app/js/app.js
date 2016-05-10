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
      .state("home", {
        url: "/home",
        templateUrl: 'views/home.html',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      })
      .state("add new goal", {
        url: "/addnewgoal",
        // abstract: true,
        templateUrl: 'views/addnewgoal.html',
        resolve: {
          auth: function($auth) {
            return $auth.validateUser();
          }
        }
      });
      $urlRouterProvider.otherwise('/');

  }])

  .directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
  })
