(function() {
    'use strict';

    app.controller('MovieDetailsCtrl', ['$scope', '$http', function($scope, $http) {

        let movieId = $scope.movieId;

        if (movieId) {

            $http.get(`http://localhost:3000/movies?id=${movieId}`)
                .then((response) => {

                    if (response.data && response.data.length > 0) {
                        $scope.movie = response.data[0];
                    }
                })
                .catch((error) => {
                    $log.log(`Error fetching movie with id: ${movieId}`);
                });
        }
    }]);
}());