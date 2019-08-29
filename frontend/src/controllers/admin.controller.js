(function() {
    'use strict';
    app.directive("fileread", [function() {
        return {
            scope: {
                fileread: "="
            },
            link: function(scope, element, attributes) {
                element.bind("change", function(changeEvent) {
                    scope.$apply(function() {
                        scope.fileread = changeEvent.target.files[0];

                    });
                });
            }
        }
    }]);
    app.controller('admin',

        function Ctrl($scope, $http, $location, $log, userService) {

          /*   if (!userService.isUserAdmin()) {
                $location.path('/');
                return;
            }
 */
            $scope.model = {
                movies: [],
                selected: {}
            };

            var loadMovies = () => {
                //$http.get("http://localhost:3000/movies")
                $http.get("https://localhost:5001/api/movies")
                    .then((response) => {
                        $scope.model.movies = response.data;
                    
                    })
                    .catch((error) => {
                        $log.log("Error fetching movies: " + JSON.stringify(error));
                    });
            };
           
            loadMovies();
           

            $scope.uploadme = {};
            $scope.uploadme.src = "";
            $scope.addMovie = function() {
                    //Add the new item to the Array.
                    var movie = {
                      //id: $scope.model.movies.length + 1,
                        title: $scope.title,
                        date: $scope.date,
                        time: $scope.time,
                        room: $scope.room,
                        actors: $scope.actors,
                        year: $scope.year,
                        description: $scope.description,
                        src: $scope.uploadme.src.name
                    }
                    var movie1 = {
                        id: $scope.model.movies.length + 1,
                          title: $scope.title,
                          date: $scope.date,
                          time: $scope.time,
                          room: $scope.room,
                          actors: $scope.actors,
                          year: $scope.year,
                          description: $scope.description,
                          src: $scope.uploadme.src.name
                      }

                  //  $http.post("http://localhost:3000/movies", movie)
                    $http.post("https://localhost:5001/api/movies", movie)
                        .then((response) => {
                            console.log(response.data)
                        })
                        .catch((error) => {
                            $log.log("Error fetching movies: " + JSON.stringify(error));
                        });
                    console.log($scope.model.movies.length);
                    console.log($scope.model.movies);
                    $scope.model.movies.push(movie1);
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

            $scope.saveMovie = function(movie) {
                console.log("Saving movie");
                console.log($scope.model.selected);
               // $scope.model.movies[id] = angular.copy($scope.model.selected);
              

               // $http.put(`http://localhost:3000/movies/${movie.id}`, movie)
                $http.put(`https://localhost:5001/api/movies/${movie.id}`, movie)
                    .then((response) => {
                        console.log(response.data);
                        loadMovies();
                    })
                    .catch((error) => {
                        $log.log("Error fetching movies: " + JSON.stringify(error));
                    });

                $scope.reset();
            };
            loadMovies();

            $scope.deleteMovie = function(i) {
                $http
                    .delete(`http://localhost:3000/movies/${$scope.model.movies[i].id}`)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        $log.log("Error fetching movies: " + JSON.stringify(error));
                    });
                $scope.model.movies.splice(i, 1);

                console.log("Movie deleted" + i);

            };
            $scope.reset = function() {
                $scope.model.selected = {};
            };
        });
}());