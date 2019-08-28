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
          console.log(user.name);
            return $http
                //.get(`http://localhost:3000/users?name=${user.name}&password=${user.password}`)
                .get(`https://localhost:5001/api/users/${user.name}/${user.password}`)
                .then(function(res) {
                    return res.data
                })
                .catch((error) => {
                    $log.error(error);
                });
        };
        return AuthService;
    });
}());