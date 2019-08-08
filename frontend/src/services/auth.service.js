(function() {
    'use strict';

    var config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT'
        }
    }

    app.factory('AuthService', function($http, $location) {
        var AuthService = {};

        AuthService.login = function(user) {
            return $http
                .get(
                    `https://localhost:5001/api/users/${user.username}/${user.password}`,
                    config
                )
                .then(function(res) {
                    return res.data
                });
        };

        AuthService.register = function(user) {
            return $http
                .post(`http://localhost:5001/api/users`, user, config)
                .then(function(response) {
                    return response.data
                })
        }

        return AuthService;
    });
}());