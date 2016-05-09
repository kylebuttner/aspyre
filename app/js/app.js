var goalbusterApp = angular.module('goalbusterApp', ['ipCookie', 'ng-token-auth'])
  .config(function($authProvider) {
    $authProvider.configure({
       apiUrl: 'http://localhost:3000',
       authProviderPaths: {
         github: '/auth/github'
       }
    });
  });
