// don't leave global variables laying around. move to another file and use the angular.module('name') later.
//var mySimpleApp = angular.module('simpleApp', []);
// put your var into an anonymous function like...
// (function() { ... code here ... }());

(function () {

    // option that is recommended. create a variable that is your controller.
    function CustomerController($scope, customersFactory) {


        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [];


        $scope.orderByMe = function (propName) {

            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;

        }

        function init() {

            $scope.customers = customersFactory.getCustomers();

        }

        init();
    };

    // to ensure $scope parm isn't minified, inject it magically.
    CustomerController.$inject = ['$scope', 'customersFactory'];

    myApp.controller('CustomerController', CustomerController);



}());