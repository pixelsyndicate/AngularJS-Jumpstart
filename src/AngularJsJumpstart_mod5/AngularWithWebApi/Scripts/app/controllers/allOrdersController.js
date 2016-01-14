(function () {

    // option that is recommended. create a variable that is your controller.
    function AllOrdersController($scope, $log, customersFactory) {
        $scope.orders = [];
        $scope.ordersTotal = 0;
        $scope.totalType = '';

        // a private function to pre-get all orders for a particular customer
        function init() {
            customersFactory.getOrders()
                .success(function (data) {
                    $scope.orders = data;
                    getOrdersTotal();
                })
                .error(function (data, status, headers, config) {
                    $log.log("error: " + data.error + ' ' + status);
                });

        }

        function getOrdersTotal() {
            var total = 0;
            for (var i = 0, len = $scope.orders.length; i < len; i++) {
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal = total;
            $scope.totalType = ($scope.ordersTotal > 160) ? 'success' : 'danger';
        }



        init();
    };

    // to ensure $scope parm isn't minified, inject it magically.
    AllOrdersController.$inject = ['$scope', '$log', 'customersFactory'];

    angular.module('customerApp').controller('AllOrdersController', AllOrdersController);



}());