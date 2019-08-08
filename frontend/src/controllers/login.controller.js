(function () {
    'use strict';

    app.controller('loginCtrl', function ($scope, $location, $rootScope, $log, AuthService) {

        $scope.login = function (user) {
            AuthService.login(user).then(function (user) {

                if (user && user.length > 0) { // login successful 
                    $rootScope.isUserLoggedIn = true;
                    $rootScope.loggedInUser = user[0].username;
                } else {
                    $scope.closeThisDialog(true);
                    $location.path('/');
                    return;
                }

                if (user[0].isAdmin === "true") {
                    $rootScope.isAdmin = true;
                    $scope.closeThisDialog(true);
                    $location.path('/adminpage');
                } else {
                    $rootScope.isAdmin = false;
                    $scope.closeThisDialog(true);
                    $location.path('/movies');
                }
            }, function () {

            });
        };

        $scope.register = function (data) {
            AuthService.register(JSON.stringify(data)).then(function (newuser) {
                $log.info(`User registered` + JSON.stringify(newuser));
            })
        };
    })
}());