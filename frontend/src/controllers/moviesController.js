(function() {
    'use strict';

    app.controller('MoviesCtrl', function Control($scope, $http, $log, ngDialog) {

        $scope.movies = {};

        $http.get("http://localhost:3000/movies")
            .then((response) => {
                $scope.movies = response.data;
            })
            .catch((error) => {
                $log.log("Error fetching movies: " + JSON.stringify(error));
            });

        $scope.openMovieDetails = function(movieId) {

            let modalScope = $scope;
            modalScope.movieId = movieId;

            ngDialog.open({
                template: 'views/partials/modals/moviedetails.html',
                className: 'ngdialog-theme-default',
                scope: modalScope,
                controller: 'MovieDetailsCtrl',
                width: 600,
                height: 600,
                showClose: true
            });
        };
    })
}());