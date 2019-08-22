(function() {
    'use strict';

    app.factory('userService', function($window) {
        var UserService = {};

        UserService.isUserAdmin = () => {
            return $window.sessionStorage.isUserLoggedIn === "true" && $window.sessionStorage.isAdmin === "true";
        };
        UserService.isUserLogged = () => {
            return $window.sessionStorage.isUserLoggedIn === "true";
        }

        return UserService;
    });
}());