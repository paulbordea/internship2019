(function() {
    'use strict';
    app.controller('bookingAdmin', function($scope, $http) {

        $http
            .get('http://localhost:3000/bookingInfo')
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