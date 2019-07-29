(function() {
    'use strict';

    app.controller('registerCtrl', function($scope,$log, AuthService) {
        $scope.signup = {};

        $scope.data ={ "rusername": $scope.signup.rusername, "email": $scope.signup.email, "password": $scope.signup.rpassword, "rpassword": $scope.signup.repeatpassword };

        $scope.register = function(data) {
            AuthService.register(JSON.stringify(data)).then(function(newuser){
                $log.info(`User registered`+ JSON.stringify(newuser));

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