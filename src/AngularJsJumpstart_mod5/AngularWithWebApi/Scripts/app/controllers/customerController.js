// don't leave global variables laying around. move to another file and use the angular.module('name') later.
//var mySimpleApp = angular.module('simpleApp', []);
// put your var into an anonymous function like...
// (function() { ... code here ... }());

(function () {


    function CustomerController($scope, customersFactory, appSettings) {


        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [];

        // -- this is what i defined in values.js 
        // angular.module('customerapp').value('appSettings',
        // {
        //    date: Date("2016-01-13").toString(),
        //    title: 'Customers Application',
        //    version: '1.0'
        // });
        $scope.appSettings = appSettings;

        $scope.orderByMe = function (propName) {

            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;

        }

        function init() {

            $scope.customers = customersFactory.getCustomers()
                .success(function (customers) {
                    console.log("found " + customers.length + " customers");
                    $scope.customers = customers;
                })
                .error(function (data, status, headers, config) {
                    console.log("error: " + status);
                });

        }

        init();
    };

    // to ensure $scope parm isn't minified, inject it magically. same for angular names for factories, services, values and constants.
    CustomerController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customerApp').controller('CustomerController', CustomerController);



}());