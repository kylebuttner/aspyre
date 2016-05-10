var goalbusterApp = angular.module('goalbusterApp', [ 'xeditable', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'ng-token-auth', 'ui.router'])
  .run(['$rootScope', '$state', 'editableOptions', function($rootScope, $state, editableOptions) {
    $rootScope.$on('auth:login-success', function() {
      $state.go("home")
    })
    $rootScope.$on('auth:login-error', function() {
      alert('Login failed')
    })
    $rootScope.$on('auth:logout-success', function() {
      $state.go("welcome")
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
        url: "/welcome",
        templateUrl: 'views/Welcome.html',
        data: {
          requireLogin: false
        }
      })
      .state("SignIn", {
        url: "/signin",
        templateUrl: 'views/SignIn.html',
        data: {
          requireLogin: false
        }
      })
      .state("signup", {
        url: "/signup",
        templateUrl: 'views/SignUp.html',
        data: {
          requireLogin: false
        }
      })
      .state("home", {
        url: "/home",
        templateUrl: 'views/home.html',
        data: {
          requireLogin: true
        }
      })
      .state("add new goal", {
        url: "/addnewgoal",
        templateUrl: 'views/addnewgoal.html',
        data: {
          requireLogin: true
        }
      });
      $urlRouterProvider.otherwise('/welcome');

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
