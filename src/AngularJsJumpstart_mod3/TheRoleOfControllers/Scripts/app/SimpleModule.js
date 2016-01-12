var myApp = angular.module('simpleApp', ['ngAnimate', 'ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'CustomerController',
            templateUrl: 'scripts/app/views/customers.html'
        })
        .when('/orders/:customerId', {
            controller: 'OrdersController',
            templateUrl: 'scripts/app/views/orders.html'
        })
        .otherwise({ redirectTo: '/' });

});