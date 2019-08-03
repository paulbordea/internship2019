(function() {
    'use strict';

    app.controller('moviesCtrl', function($scope) {

    })
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