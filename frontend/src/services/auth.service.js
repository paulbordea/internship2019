(function() {
    'use strict';
    var config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }
    app.factory('AuthService', function($http,$location) {
        var AuthService = {};
        AuthService.login = function(credentials) {
            return $http
                .get(`http://localhost:3000/credentials?username=${credentials.username}&password=${credentials.password}
                `, )
                .then(function(res) {
                   return res.data
                });
        };
        AuthService.register=function(signup){
            return $http
            .post(`http://localhost:3000/users`,signup,
            config)
            .then(function(response){
                return response.data
            }
            )
        }
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