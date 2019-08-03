(function() {
    'use strict';

    app.controller('loginCtrl', function($scope, $location, $rootScope, $log, AuthService) {
        $scope.credentials = {
            username: '',
            password: ''
        }
        $scope.login = function(credentials) {
            AuthService.login(credentials).then(function(user) {
                if (user && user.length > 0 && user[0].username === "admin") {
                    $location.path('/adminpage')
                } else {
                    $location.path('/movies');
                }
            }, function() {

            });
        };
    })

}());