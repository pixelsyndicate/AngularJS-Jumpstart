



// string, Object - not available in the config function
angular.module('customerApp').value('appSettings',
    {
        date: "2016-01-13",
        title: 'Customers Application',
        version: '1.0'
    });

// is available for the config
angular.module('customerApp').constant('author', 'wdobson@pixelsyndicate.com');