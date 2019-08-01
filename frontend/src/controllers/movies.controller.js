(function() {
    'use strict';

    app.controller('moviesCtrl', function($scope) {

    })
    app.controller('movieUser',
    function Control($scope){
        $scope.model={
            usermovies:[{
                id: 2,
            
                title: "Ben",
                date: "7/10/2019",
                time: "12:00",
                room: "room 2",
                actors: "John Snow, Emilia Clarke",
                year: "2018",
                description: "A fascinating story about a little boy who is going to cnjhnbhjfdnjjfjfjjdjdjghjdhhgjd"
            },
            {
                id: 1,
                title: "Ben",
                date: "7/10/2019",
                time: "12:00",
                room: "room 255",
                actors: "John Snow, Emilia Clarke",
                year: "2018",
                description: "A fascinating story about a little boy who is going to cnjhnbhjfdnjjfjfjjdjdjghjdhhgjd"
    
            },
            {
                id: 3,
                title: "Ben",
                date: "7/10/2019",
                time: "12:00",
                room: "room 2",
                actors: "Jnow, Emilia Clarke",
                year: "2018",
                description: "A fascinating story about a little boy who is going to cnjhnbhjfdnjjfjfjjdjdjghjdhhgjd"
    
            }
        ]
        }
        $scope.getTemplate=function(movie){
            return 'display';
        }
    })
}());