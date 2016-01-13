(function () {

    var customersFactory = function ($http) {

        var factory = {};
        var customers = [];
        var customer = null;

        function init() {
            
         //   customers = customersService.getCustomers();
         //   console.log("customers returned : " + customers);
        };

        init();

        factory.getCustomers = function () {
            return $http.get('../api/customers');
            // return customers;
        };

        factory.getCustomer = function (customerId) {
            return $http.get('../api/customers/' + customerId);
            //for (var i = 0, len = customers.length; i < len; i++) {

            //    if (customers[i].id === parseInt(customerId)) {
            //        return customers[i];
            //    }
            //}

            return {};
        }

        return factory;
    }

    customersFactory.$inject = ['$http'];

    angular.module('customerApp').factory('customersFactory', customersFactory);
}());