(function () {
    'use strict';

    app.controller('MovieDetailsCtrl', ['$scope', '$http', function ($scope, $http) {

        let movieId = $scope.movieId;

        if (movieId) {

           // $http.get(`http://localhost:3000/movies?id=${movieId}`)
            $http.get(`https://localhost:5001/api/movies/${movieId}`)
                .then((response) => {

                    if (response.data && Object.keys(response.data).length > 0) {
                        $scope.movie = response.data;
                    }
                })
                .catch((error) => {
                    $log.log(`Error fetching movie with id: ${movieId}`);
                });
        }
    }]);
}());