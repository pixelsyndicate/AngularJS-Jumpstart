(function () {

    var customersFactory = function (customersService) {

        var factory = {};
        var customers = [];
        var customer = null;

        function init() {

            customers = customersService.getCustomers();
        };

        init();

        factory.getCustomers = function () {
            return customers;
        };

        factory.getCustomer = function (customerId) {

            for (var i = 0, len = customers.length; i < len; i++) {

                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }

            return {};
        }

        return factory;
    }

    customersFactory.$inject = ['customersService'];

    angular.module('customerApp').factory('customersFactory', customersFactory);
}());