(function () {

    // option that is recommended. create a variable that is your controller.
    function OrdersController($scope, $routeParams, customersFactory) {

        // create a private var to track the routeParam in the route
        var customerId = $routeParams.customerId;

        $scope.customer = null;

        // a private function to pre-get all orders for a particular customer
        function init() {
            // search the customers for the customerId
            $scope.customer = customersFactory.getCustomer(customerId)
            .success(function (customer) {
                $scope.customer = customer;
            })
                .error(function (data, status, headers, config) {
                    console.log("error: " + status);
                });
        }


        init();
    };

    // to ensure $scope parm isn't minified, inject it magically.
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customerApp').controller('OrdersController', OrdersController);



}());