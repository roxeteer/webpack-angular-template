var angular = require('angular');

require('./example.scss');

module.exports = angular.module('myApp.example', [])
  .config(RouteConfig)
  .directive('example', require('./example-directive'))
  .name;


RouteConfig.$inject = ['$stateProvider'];

function RouteConfig($stateProvider) {
  // TODO: define component-specific states here
}
