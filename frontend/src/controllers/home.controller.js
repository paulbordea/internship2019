(function() {
    'use strict';

    app.controller('homeCtrl', function($scope, $location, $window, ngDialog, userService) {
        $scope.isUserAdmin = userService.isUserAdmin;
        $scope.isUserLogged = userService.isUserLoggedIn;

        $scope.loginButtonText = () => {
            if ($window.sessionStorage.isUserLoggedIn === "true") {
                return `Logout (${$window.sessionStorage.loggedInUser})`;
            } else {
                return `Login`;
            }
        };

        $scope.isCurrentRoute = (route) => {
            return route === $location.path();
        };

        $scope.openLoginModal = function() {

            if ($window.sessionStorage.isUserLoggedIn === "true") {
                $window.sessionStorage.isUserLoggedIn = undefined;
                $window.sessionStorage.isAdmin = undefined;
                $window.sessionStorage.loggedInUser = undefined;
                $location.path("/");
            } else {
                ngDialog.open({
                    template: 'views/partials/modals/login/loginModal.html',
                    className: 'ngdialog-theme-default ',
                    scope: $scope,
                    controller: 'loginCtrl',
                    width: 330,
                    height: 'auto',
                    showClose: true
                });
            }
        };
    })
}());