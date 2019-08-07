(function() {
    'use strict';

    var config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    app.factory('AuthService', function($http, $location) {
        var AuthService = {};

        AuthService.login = function(user) {
            return $http
                .get(
                    `https://localhost:5001/users/${user.username}/${user.password}`,
                    config
                )
                .then(function(res) {
                    return res.data
                });
        };

        AuthService.register = function(user) {
            return $http
                .post(`http://localhost:3000/users`, user, config)
                .then(function(response) {
                    return response.data
                })
        }

        return AuthService;
    });
}());