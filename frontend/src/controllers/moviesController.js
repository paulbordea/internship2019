(function() {
    'use strict';
    app.filter("dateFilter", function() {
        return function datefilter(items, movieDate) {

            var result = [];
            angular.forEach(items, function(movie) {
                angular.forEach(movie.movieSchedule,function(value){
                var newDate= value.date.substring(0,10).split('-');
                newDate = newDate[1]+'/'+newDate[2]+'/'+ newDate[0];
                if (Date.parse(newDate) === Date.parse(movieDate)) {
                   result.push(movie);
                }})   
            });
       return result;
            
        };
    });

    app.controller('MoviesCtrl', function Control($scope, $filter, $location, $http, $log, ngDialog, userService) {

        $scope.movieDate = new Date(2019, 7, 13);
 
        

        $scope.isUserLogged = userService.isUserLogged;

        $scope.movieDate = new Date(2019,7,13);
       /*  if (!$scope.isUserLoggedIn) {
            alert("You have to be logged in! ");
            $location.path('/');
            return;
        }
         */
        console.log($scope.movieDate);
        
        

        $scope.movies = {};

       // $http.get("http://localhost:3000/movies")
        $http.get("https://localhost:5001/api/movies")
            .then((response) => {
        
                $scope.movies = response.data;
                
                $filter('dateFilter')(movies, selectedDate);
             
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
                height: 'auto',
                showClose: true
            });
        };

        $scope.bookMovie = function(movieId) {
           
            $location.path('/booking/' + movieId);
        };
    })
}());