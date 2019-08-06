(function() {
    'use strict';

    app.controller('loginCtrl', function($scope, $location, $rootScope, $log, AuthService) {

        $scope.login = function(credentials) {
            AuthService.login(credentials).then(function(user) {

                if (user && user.length > 0) { // login successful 
                    $rootScope.isUserLoggedIn = true;
                    $rootScope.loggedInUser = user[0].username;
                } else {
                    $location.path('/');
                    return;
                }

                if (user[0].isAdmin === "true") {
                    $rootScope.isAdmin = true;
                 
                    $location.path('/adminpage');
                } else {
                    $rootScope.isAdmin = false;
                    $location.path('/movies');
                }
                $scope.user=$rootScope.isAdmin
                console.log($scope.user);
            }, function() {

            });
        };
    })

}());