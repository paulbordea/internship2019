(function() {
    'use strict';
    app.factory("db", function() {
        var obj = {};
        obj.item = {

            date: 13082019
        }

        return obj;

    });

    app.controller('moviesCtrl', function($scope,$http) {
      
     $scope.dateBirth = new Date(2019, 3, 19);
     $scope.model = {
        movies: []};
    console.log($scope.dateBirth);
    $scope.clicked=false;
    $scope.search=function(){
        $scope.clicked=true;
        $scope.selectedDate=$scope.dateBirth;
        console.log($scope.selectedDate);
    }
    

    $http.get("http://localhost:3000/movies")
                .then((response) => {
                    $scope.model.movies = response.data;
                })
                .catch((error) => {
                    $log.log("Error fetching movies: " + JSON.stringify(error));
                });

            $scope.getTemplate = function(movie) {
               
                return 'display';
               
            }
            $scope.showModal = function() {
                $scope.item={};
                $scope.item=$scope.model.movies[id];
                var modalPromise = $modal({
                    template: 'moviedetails.view.html',
                    show: false,
                    persist: false,
                    backdrop: 'static',
                    modalClass: 'modal-class',
                    scope: $scope.$new({item: $scope.items[index]})
                  });
              
                  $q.when(modalPromise).then(function(modalEl) {
                    modalEl.modal('show');
                  });
              }
          
            
        })
    }());

    

   
