var filterSortApp = angular.module('myApp', []);

filterSortApp.controller('defaultCtrl', ['$scope', function ($scope) {


    $scope.orderByMe = function (x) {

        if ($scope.myOrderBy != undefined && $scope.myOrderBy.substr(0, 1) == '-') {
            $scope.myOrderBy = x;

            var leadingChar = $scope.myOrderBy.substr(0, 1);
        } else {
            $scope.myOrderBy = '-' + x;
        }

        switch (x) {
        case 'name':
            $scope.ascCity = null;
            $scope.ascJoined = null;
            $scope.ascOrderTotal = null;
            break;
        case 'city':
            $scope.ascName = null;
            $scope.ascJoined = null;
            $scope.ascOrderTotal = null;
            break;
        case 'joined':
            $scope.ascCity = null;
            $scope.ascName = null;
            $scope.ascOrderTotal = null;
            break;
        case 'orderTotal':
            $scope.ascCity = null;
            $scope.ascJoined = null;
            $scope.ascName = null;
            break;
        }
    }

    $scope.customers = [
        {
            joined: '2002-04-26',
            name: 'John',
            city: 'Salt Lake City',
            orderTotal: 23.993,
            sortOrderAsc: true
                },
        {
            joined: '2005-09-15',
            name: 'Ceres',
            city: 'Mobile',
            orderTotal: 22.1,
            sortOrderAsc: true
                },
        {
            joined: '1998-11-03',
            name: 'Melvin',
            city: 'Dallas',
            orderTotal: 98.55,
            sortOrderAsc: true
                },
        {
            joined: '2015-02-31',
            name: 'Erin',
            city: 'Shelby',
            orderTotal: 10001.112,
            sortOrderAsc: true
                }];
        }]);
