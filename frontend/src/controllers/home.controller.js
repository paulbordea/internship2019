(function() {
    'use strict';

    app.controller('homeCtrl', function($scope, $rootScope, $location, ngDialog) {
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

        $scope.openLoginModal = function() {

            if ($scope.isUserLoggedIn === true) {
                $rootScope.isUserLoggedIn = false;
                $rootScope.isUserAdmin = false;
                $rootScope.loggedInUser = undefined;

                $location.path("/");
            } else {
                ngDialog.open({
                    template: 'views/partials/modals/login/loginModal.html',
                    className: 'ngdialog-theme-default',
                    scope: $scope,
                    controller: 'loginCtrl',

                    width: 400,

                    height: 'auto',              
                    showClose: true
                });
            }            
        };
    })
}());