var goalbusterApp = angular.module('goalbusterApp', ['ipCookie', 'ng-token-auth'])
  .config(function($authProvider) {
         $authProvider.configure({
             apiUrl: 'http://goalbuster-api.herokuapp.com',
             authProviderPaths: {
               github: '/auth/github'
             }
         });
       });
