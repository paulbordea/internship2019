(function() {
    'use strict';

    var config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT'
        }
    }

    app.factory('AuthService', function($http, $log) {
        var AuthService = {};

        AuthService.login = function(user) {
            return $http
                //.get(`http://localhost:3000/users?username=${user.name}&password=${user.password}`)
                .get(`https://localhost:5001/api/users/${user.username}/${user.password}`)
                .then(function(res) {
                    return res.data
                })
                .catch((error) => {
                    $log.error(error);
                });
        };

        AuthService.register = function(user) {
            return $http
                //.post(`http://localhost:3000/users`, user, config)
                .post(`https://localhost:5001/api/users`, user, config)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    $log.error(error);
                });
        };
        return AuthService;
    });
}());