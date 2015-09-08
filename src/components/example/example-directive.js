module.exports = [
  function() {
    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      template: require('./example-directive.html'),
      controller: ExampleDirectiveController,
      controllerAs: 'vm',
      bindToController: true
    };
  }
];

ExampleDirectiveController.$inject = ['$element'];

function ExampleDirectiveController($element) {
  $element.on('click', () => $element.toggleClass('clicked'));
}
