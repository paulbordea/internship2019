(function() {
    'use strict';

    app.controller('signupCtrl', function($scope, $rootScope, $routeParams, $location, $http) {
        $scope.signup = {};

        $scope.signup = { rusername: '', email: '', password: '', rpassword: '' };

        $scope.register = function(customer) {
            /* RestApiClientService.post('register', {
                user: customer
            }).then(function(results) {
                RestApiClientService.toast(results);
                if (results.status == "success") {
                    $location.path('dashboard');
                }
            }); */
        };
    });
}());