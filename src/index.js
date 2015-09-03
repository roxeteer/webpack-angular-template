var APP_NAME = 'myApp';

// libraries
var angular = require('angular');
var ngMessages = require('angular-messages');
var uirouter = require('angular-ui-router');

// layout styles
require('./components/layout.scss');

// app
angular.module(APP_NAME, [
  ngMessages,
  uirouter,
  require('./components/example')
])

// app config
.config([
  '$compileProvider',
  function ($compileProvider) {
    // remove debug info in production
    $compileProvider.debugInfoEnabled(ENV_NAME !== 'production');
  }
])

// root level routes
.config([
  '$stateProvider', '$locationProvider', '$urlRouterProvider',
  function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    // TODO: define states
    $stateProvider
      .state({
        name: 'root',
        url: '/',
        views: {
          'root': {
            template: require('./components/example/example.html'),
            controller: require('./components/example/example-controller')
          }
        },
      });
  }
]);

angular.bootstrap(document.body, [APP_NAME]);
