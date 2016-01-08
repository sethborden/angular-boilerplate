(function() {
    angular.module('app')
    .filter('marklar', filter);

    function filter(input) {
        return 'marklar';
    }
})();
