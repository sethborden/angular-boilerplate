(function() {
    'use strict';
    angular.module('app')
    .factory('random', random);

    function random() {
        var srvc = this;
        srvc.getCredit = getCredit;
        srvc.data = {
            name: 'Batman',
            alias: 'Bruce Wayne',
            city: 'Gotham'
        };

        /* methods live here */
        function getCredit() {
            return [
                srvc.data.name,
                'A.K.A.',
                srvc.data.alis,
                'located in',
                srvc.data.city
            ].join(' ');
        }

        return srvc;
    }

})();
