(function() {
    'use strict';

    app.controller('homeCtrl', function($scope, $location) {
        $scope.isUserAdmin = () => {
            
            return $scope.isUserLoggedIn && $scope.isAdmin;

        };

        $scope.loginButtonText = () => {
            if ($scope.isUserLoggedIn) {
                return `Logout (${$scope.loggedInUser})`;
            } else {
                return `Login`;
            }
        };

        $scope.isCurrentRoute = (route) => {
            return route === $location.path();
        };
    })
}());