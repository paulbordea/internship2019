(function() {
    'use strict';
    
    var config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }

    app.factory('AuthService', function($http) {
        var AuthService = {};

        AuthService.login = function(credentials) {
            return $http
                .get(`http://localhost:3000/credentials?username=${credentials.username}&password=${credentials.password}
                `, )
                .then(function(res) {
                   return res.data
                });
        };

        AuthService.register = function(user){
            return $http
            .post(`http://localhost:3000/users`, user, config)
            .then(function(response){
                return response.data
            });
        };
       return AuthService;
    });
}());