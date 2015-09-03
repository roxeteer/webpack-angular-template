var angular = require('angular');

require('./example.scss');

module.exports = angular.module('myApp.example', [])
  .config([
    '$stateProvider',
    function ($stateProvider) {
      // TODO: define component-specific states here
    }

  ])
  .directive('example', require('./example-directive'))
  .name;
