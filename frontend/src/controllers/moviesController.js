(function () {
    'use strict';
    app.filter("dateFilter",function() {
        return function datefilter(items, movieDate) {
          
        var result = [];
        angular.forEach(items, function(value){
            if (Date.parse(value.date) === Date.parse(movieDate) )  {
                result.push(value);
             }
         });
       
         return result;
         };
     });
    app.controller('MoviesCtrl', function Control($scope,$filter,$location, $http, $log, ngDialog) {

        $scope.movieDate = new Date(2019,6,11);
        if (!$scope.isUserLoggedIn) {
            alert("You have to be logged in! ");
            $location.path('/');
            return;
        }
        
        console.log($scope.movieDate);
        
        
        $scope.movies = {};

        $http.get("http://localhost:3000/movies")
            .then((response) => {
                $scope.movies = response.data;
                $filter('dateFilter')(movies,selectedDate);
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