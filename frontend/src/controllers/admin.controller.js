(function() {
    'use strict';

    app.controller('admin',

        function Ctrl($scope, $http) {
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

            $scope.addEmployee = function() {
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
            $scope.getTemplate = function(contact) {
                if (contact.id === $scope.model.selected.id) return 'edit';
                else return 'display';
            };

            $scope.editContact = function(contact) {
                $scope.model.selected = angular.copy(contact);
            };

            $scope.saveContact = function(idx) {
                console.log("Saving contact");
                $scope.model.movies[idx] = angular.copy($scope.model.selected);
                $scope.reset();
            };
            $scope.deleteContact = function(i) {
                $scope.model.movies.splice(i, 1);
                console.log("S a sters contactul" + i);

            };



            $scope.reset = function() {
                $scope.model.selected = {};
            };
        });
}());