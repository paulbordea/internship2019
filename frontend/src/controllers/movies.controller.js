(function() {
    'use strict';
    app.factory("db", function() {
        var obj = {};
        obj.item = {

            date: 13082019
        }

        return obj;

    });

    app.controller('moviesCtrl', function($scope) {});

    app.controller('EditCtrl', ['$scope', function($scope) {
        $scope.dateBirth = new Date(2014, 3, 19);
    }]);

    app.controller('movieUser',
        function Control($scope, $http) {

            $scope.movies = {};

            $http.get("http://localhost:3000/movies")
                .then((response) => {
                    $scope.movies = response.data;
                })
                .catch((error) => {
                    $log.log("Error fetching movies: " + JSON.stringify(error));
                });

            $scope.getTemplate = function(movie) {
                return 'display';
            }
        })
}());