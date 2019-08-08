(function() {
    'use strict';

    app.controller('admin',

        function Ctrl($scope, $http, $location) {

            if (!$scope.isUserLoggedIn || !$scope.isAdmin) {
                $location.path('/');
                return;
            }

            $scope.model = {
                movies: [],
                selected: {}
            };

            $http.get("http://localhost:3000/movies")
                .then((response) => {
                    $scope.model.movies = response.data;
                })
                .catch((error) => {
                    $log.log("Error fetching movies: " + JSON.stringify(error));
                });

            $scope.addMovie = function() {
                    //Add the new item to the Array.
                    var movie = {
                        id: $scope.model.movies.length + 1,
                        title: $scope.title,
                        date: $scope.date,
                        time: $scope.time,
                        room: $scope.room,
                        actors: $scope.actors,
                        year: $scope.year,
                        description: $scope.description
                    };

                    $scope.model.movies.push(movie);
                    console.log($scope.model.movies.length);
                    console.log($scope.model.movies);
                    $scope.reset();
                }
                // gets the template to ng-include for a table row / item
            $scope.getTemplate = function(movie) {
                if (movie.id === $scope.model.selected.id) return 'edit';
                else return 'display';
            };
            $scope.editMovie = function(movie) {
                $scope.model.selected = angular.copy(movie);
            };
            $scope.saveMovie = function(id) {
                console.log("Saving movie");
                $scope.model.movies[id] = angular.copy($scope.model.selected);

           
                $scope.reset();
            };
            $scope.deleteMovie = function(i) {
                $scope.model.movies.splice(i, 1);

                console.log("Movie deleted" + i);

            };
            $scope.reset = function() {
                $scope.model.selected = {};
            };
        });
}());