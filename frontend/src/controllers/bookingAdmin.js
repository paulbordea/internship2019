(function() {
    'use strict';
    app.controller('bookingAdmin', function($scope, $http) {

        $http
            .get('https://localhost:5001/api/booking')
            .then((response) => {
                $scope.bookingInfo = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
        $scope.getTemplate = function(info) {
            return 'display';
        };
    })
}());