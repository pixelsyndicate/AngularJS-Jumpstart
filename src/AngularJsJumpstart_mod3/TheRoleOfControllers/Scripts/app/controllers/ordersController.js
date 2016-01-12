(function () {

    // option that is recommended. create a variable that is your controller.
    function OrdersController($scope, $routeParams) {

        // create a private var to track the routeParam in the route
        var customerId = $routeParams.customerId;

        // we are going to bind to some orders for the view to use.
        $scope.orders = null;

        // a private function to pre-get all orders for a particular customer
        function init() {
            // search the customers for the customerId
            for (var i = 0, len = $scope.customers.length;
                i < len; i++) {
                if ($scope.customers[i].id === parseInt(customerId)) {
                    // found the correct customer!
                    $scope.orders = $scope.customers[i].orders;
                    break;
                }
            }
        }


        $scope.customers = [
            {
                id: 1,
                joined: '2000-12-02',
                name: 'John',
                city: 'Chandler',
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]
            },
            {
                id: 2,
                joined: '1965-01-25',
                name: 'Zed',
                city: 'Las Vegas',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 9.995
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 9.995
                    }
                ]
            },
            {
                id: 3,
                joined: '1944-06-15',
                name: 'Tina',
                city: 'New York',
                orderTotal: 44.99,
                orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 44.99
                    }
                ]
            },
            {
                id: 4,
                joined: '1995-03-28',
                name: 'Dave',
                city: 'Seattle',
                orderTotal: 101.50,
                orders: [
                    {
                        id: 5,
                        product: 'Kindle',
                        total: 101.50
                    }
                ]
            }
        ];

        init();
    };

    // to ensure $scope parm isn't minified, inject it magically.
    OrdersController.$inject = ['$scope', '$routeParams'];

    myApp.controller('OrdersController', OrdersController);



}());