(function() {
    'use strict';

    app.controller('loginCtrl', function($scope, $location, $rootScope, $log, AuthService) {

        $scope.login = function(user) {
            AuthService.login(user).then(function(user) {

                //if (user && user.length > 0) { // login successful 
                if (user) { // login successful 
                    $rootScope.isUserLoggedIn = true;
                    //$rootScope.loggedInUser = user[0].name;
                    $rootScope.loggedInUser = user.name;
                    $rootScope.userId=user.id;
                } else {
                    $scope.closeThisDialog(true);
                    $location.path('/');
                    return;
                }

                //if (user[0].isAdmin === true) {
                if (user.isAdmin === true) {
                    $rootScope.isAdmin = true;
                    $scope.closeThisDialog(true);
                    $location.path('/adminpage');
                } else {
                    $rootScope.isAdmin = false;
                    $scope.closeThisDialog(true);
                    $location.path('/movies');
                }
            }, function() {

            });
        };
    })
}());