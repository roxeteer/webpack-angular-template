var APP_NAME = 'myApp';

// libraries
var angular = require('angular');
var ngMessages = require('angular-messages');
var uirouter = require('angular-ui-router');

// layout styles
require('./components/layout.scss');

// app
angular
  .module(APP_NAME, [
    ngMessages,
    uirouter,
    require('./components/example')
  ])
  .config(AppConfig)  // app config
  .config(RouteConfig);  // root level routes

angular.bootstrap(document.body, [APP_NAME]);


AppConfig.$inject = ['$compileProvider'];

function AppConfig($compileProvider) {
  // remove debug info in production
  $compileProvider.debugInfoEnabled(ENV_NAME !== 'production');
}


RouteConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function RouteConfig($stateProvider, $locationProvider, $urlRouterProvider) {
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
          controller: require('./components/example/example-controller'),
          controllerAs: 'root'
        }
      },
    });
}
