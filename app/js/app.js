var goalbusterApp = angular.module('goalbusterApp', ['xeditable', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'ng-token-auth'])
  .run(function(editableOptions) {
    editableOptions.theme = 'default';
  })
  .config(function($authProvider) {
    $authProvider.configure({
       apiUrl: 'https://goalbuster-api.herokuapp.com',
       authProviderPaths: {
         github: '/auth/github'
       }
    });
  });
