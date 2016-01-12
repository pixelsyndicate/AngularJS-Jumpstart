// don't leave global variables laying around. move to another file and use the angular.module('name') later.
//var mySimpleApp = angular.module('simpleApp', []);
// put your var into an anonymous function like...
// (function() { ... code here ... }());

(function () {

    // option that is recommended. create a variable that is your controller.
    function SimpleController($scope) {


        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
        { name: 'Danny Wallace', city: 'Phoenix' },
        { name: 'Jamie Riley', city: 'Atlanta' },
        { name: 'Heedy Thomas', city: 'Chandler' },
        { name: 'Jeff James', city: 'Seattle' },
        ];

        $scope.orderByMe = function (propName) {

            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;

        }
    };

    // to ensure $scope parm isn't minified, inject it magically.
    SimpleController.$inject = ['$scope'];

    angular.module('simpleApp').controller('simpleController', SimpleController);

}());