(function() {
    'use strict';

    app.controller('registerCtrl', function($scope,$log, AuthService) {
        $scope.signup = {};

        $scope.signup = { rusername: '', email: '', password: '', rpassword: '' };

        $scope.register = function(signup) {
            AuthService.register(signup).then(function(newuser){
                $log.info(`User registered`+ JSON.stringify(user));

            })
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