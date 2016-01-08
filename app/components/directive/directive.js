(function() {
    angular.module('app')
    .directive('directive', directive);

    function directive(service) {
        return {
            templateUrl: 'app/components/directive/directive.template.html',
            controller: directiveController,
            controllerAs: 'vm',
            restrict: 'EA',
            //isolate: '=value',
            link: function(scope, element, attributes) {

            }
        };
    }

    directiveController.$inject = ['$scope', '$log'];
    function directiveController($scope, $log) {
        $log($scope);
    }
})();
