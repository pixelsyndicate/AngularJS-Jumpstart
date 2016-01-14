// don't leave global variables laying around. move to another file and use the angular.module('name') later.
//var mySimpleApp = angular.module('simpleApp', []);
// put your var into an anonymous function like...
// (function() { ... code here ... }());

(function () {


    function CustomerController($scope, customersFactory, appSettings, $log) {


        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [];

        $scope.appSettings = appSettings;

        $scope.orderByMe = function (propName) {

            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;

        }

        $scope.deleteCustomer = function (customerId) {
            customerFactory.deleteCustomer(customerId)
                .success(function (status) {
                    if (status) {
                        for (var i = 0, len = $scope.customers.length; i < len; i++) {
                            if ($scope.customers[i] == customerId) {
                                // remove that record
                                $scope.customers.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('unable to delete customer');
                    }
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status); // this does console log
                });
        };

        function init() {

            // $scope.customers = 
            customersFactory.getCustomers()
                .success(function (data, status) {
                    $log.log("found " + data.length + " customers - status: " + status);
                    $scope.customers = data;
                })
                .error(function (data, status, headers, config) {

                    $log.log("error in .getCustomer() " + data.error + ' ' + status); // this does console log
                });

        }

        init();
    };

    // to ensure $scope parm isn't minified, inject it magically. same for angular names for factories, services, values and constants.
    CustomerController.$inject = ['$scope', 'customersFactory', 'appSettings', '$log'];

    angular.module('customerApp').controller('CustomerController', CustomerController);



}());