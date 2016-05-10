module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-cookie/angular-cookie.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/ng-token-auth/dist/ng-token-auth.js',
      'app/bower_components/angular-animate/angular-animate.min.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap.min.js',
      'app/bower_components/angular-xeditable/dist/js/xeditable.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
    ]
  });
};
