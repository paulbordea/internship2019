(function() {
    'use strict';
    app.directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    scope.$apply(function () {
                        scope.fileread = changeEvent.target.files[0];
                      
                    });
                });
            }
        }
    }]);
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
                $scope.uploadme = {};
                $scope.uploadme.src = "";
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
                        description: $scope.description,
                        src: $scope.uploadme.src.name
                    };
                    console.log($scope.model.movies.length);
                   // console.log($scope.uploadme.src.name);
                    $scope.model.movies.push(movie);
                    $http.post("http://localhost:3000/movies",movie,config)
                    .then((response)=>{
                        console.log(response.data)
                    })
                    .catch((error) => {
                        $log.log("Error fetching movies: " + JSON.stringify(error));
                    });
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
                $http
                .delete(`http://localhost:3000/movies/${$scope.model.movies[i].id}`)
                .then((response)=>{
                    console.log(response.data)
                })
                .catch((error) => {
                    $log.log("Error fetching movies: " + JSON.stringify(error));
                });
                console.log("Movie deleted" + i);

            };
            $scope.reset = function() {
                $scope.model.selected = {};
            };
        });
}());