'use strict';

var basketApp = angular.module('basketApp', ['ngRoute', 'basketAppCtrl']);

basketApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider.when('/basket', {
            templateUrl: 'partials/itemList.html',
            controller: 'ItemListCtrl'
            })
            .when('/details',{
                templateUrl: 'partials/details.html',
                controller: 'DetailsCtrl'
            })
            .when('/confirmation',{
                templateUrl: 'partials/confirmation.html',
                controller: 'ConfirmationCtrl'
            })
            .otherwise({redirectTo:'/basket'});
       // $locationProvider.html5Mode(true);

    }
]);