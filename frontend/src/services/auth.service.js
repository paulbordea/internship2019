(function() {
    'use strict';

    app.factory('AuthService', function($http) {
        var AuthService = {};
        AuthService.login = function(credentials) {
            return $http
                .get(`http://localhost:3000/credentials?username=${credentials.username}&password=${credentials.password}
                `, )
                .then(function(res) {
                    //Session.create(res.data.id,res.data.user.id,res.data.user.role);
                    return res.data;
                });
        };
        AuthService.isAuthenticated = function() {
            //return !!Session.userId;
            return true;
        };
        AuthService.isAuthorized = function(authorizedRoles) {
            /*  if(!angular.isArray(authorizedRoles)){
                 authorizedRoles=[authorizedRoles];
             }
             return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole)!== -1); */
        };

        return AuthService;
    });

}());