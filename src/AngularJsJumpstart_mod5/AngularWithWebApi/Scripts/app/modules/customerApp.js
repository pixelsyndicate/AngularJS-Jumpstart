
angular.module('customerApp', ['ngAnimate', 'ngRoute']);


angular.module('customerApp').config(
    function ($routeProvider) {
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