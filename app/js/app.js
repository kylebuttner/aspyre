var goalbusterApp = angular.module('goalbusterApp', ['ng-token-auth']);

.config(function($authProvider) {
       $authProvider.configure({
           apiUrl: 'http://goalbuster-api.herokuapp.com'
       });
   });
