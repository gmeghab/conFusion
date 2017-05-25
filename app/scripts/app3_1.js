'use strict';

angular.module('confusionApp', ['ngRoute'])

.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/contactus', {
                templateUrl : 'contactus1.html',
                controller  : 'ContactController'
            })
            // route for the menu page
            .when('/menu', {
                templateUrl : 'menu_1.html',
                controller  : 'MenuController'
            })
            // route for the dish details page
            .when('/menu/:id', {
                templateUrl : 'dishdetail3_1.html',
                controller  : 'DishDetailController'
            })
            .otherwise('/contactus');
    })


;