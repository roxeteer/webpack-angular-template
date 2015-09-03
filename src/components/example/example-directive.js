module.exports = [
  function() {
    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      template: require('./example-directive.html'),
      link: function(scope, element) {
        element.on('click', () => element.toggleClass('clicked'));
      }
    };
  }
];
