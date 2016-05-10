var goalbusterApp = angular.module('goalbusterApp', ['ngRoute', 'xeditable', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'ng-token-auth'])
  .run(function(editableOptions) {
    editableOptions.theme = 'default';
  })
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
