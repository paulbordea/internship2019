(function () {
    'use strict';

    app.controller('MoviesCtrl', function Control($scope, $http, $log, ngDialog) {

        $scope.dateBirth = new Date(2019, 3, 19);

        console.log($scope.dateBirth);
        $scope.clicked = false;
        $scope.search = function () {
            $scope.clicked = true;
            $scope.selectedDate = $scope.dateBirth;
            console.log($scope.selectedDate);
        }
        $scope.movies = {};

        $http.get("http://localhost:3000/movies")
            .then((response) => {
                $scope.movies = response.data;
            })
            .catch((error) => {
                $log.log("Error fetching movies: " + JSON.stringify(error));
            });

        $scope.openMovieDetails = function (movieId) {

            let modalScope = $scope;
            modalScope.movieId = movieId;

            ngDialog.open({
                template: 'views/partials/modals/moviedetails.html',
                className: 'ngdialog-theme-default',
                scope: modalScope,
                controller: 'MovieDetailsCtrl',
                width: 600,
                height: 'auto',
                showClose: true
            });
        };
    })
}());