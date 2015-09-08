module.exports = [
  function() {
    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      template: require('./example-directive.html'),
      controller: [
        '$element',
        function($element) {
          $element.on('click', () => $element.toggleClass('clicked'));
        }
      ],
      controllerAs: 'vm',
      bindToController: true
    };
  }
];
