var mySimpleApp = angular.module('simpleApp', []);

mySimpleApp.controller('simpleController', function SimpleController($scope) {


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
});