(function() {
    'use strict';

    app.controller('homeCtrl', function($scope) {
        $scope.isUserAdmin = () => {
            return $scope.isUserLoggedIn && $scope.isUserAdmin;
        };

        $scope.loginButtonText = () => {
            if ($scope.isUserLoggedIn) {
                return `Logout (${$scope.loggedInUser})`;
            } else {
                return `Login`;
            }
        };
    })
}());