/* jshint unused:false */
var angular = require('angular');
require('angular-mocks');

var testsContext = require.context('./src', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

Function.prototype.bind = Function.prototype.bind || function (thisp) {
  var fn = this;
  return function () {
    return fn.apply(thisp, arguments);
  };
};
