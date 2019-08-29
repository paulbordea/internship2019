(function() {
    'use strict';

    app.controller('loginCtrl', function($scope, $location, $window, AuthService) {

        $scope.login = function(user) {
            AuthService.login(user).then(function(user) {

                //if (user && user.length > 0) { // login successful 
                  if (user) { // login successful 
                    $window.sessionStorage.loggedInUser = user.name;
                    $window.sessionStorage.isUserLoggedIn = true;
                    // $window.sessionStorage.loggedInUser = user[0].name;
                    $window.sessionStorage.userId = user.id;

                } else {
                    $scope.closeThisDialog(true);
                    $location.path('/');
                    return;
                }

 
               // if (user[0].isAdmin === true) {

                if (user.isAdmin === true) {
                    $window.sessionStorage.isAdmin = true;
                    $scope.closeThisDialog(true);
                    $location.path('/adminpage');
                } else {
                    $window.sessionStorage.isAdmin = false;
                    $scope.closeThisDialog(true);
                    $location.path('/movies');
                }
            }, function() {

            });
        };
    })
}());