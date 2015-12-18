var salesTaxApp = angular.module('salesTaxApp', []);

salesTaxApp.controller('stateListCtrl', function ($scope) {
    $scope.states = [
        {
            'code': 'CA',
            'name': 'California',
            'tax': 0.08
        },
        {
            'code': 'TX',
            'name': 'Texas',
            'tax': 0.07
        },
        {
            'code': 'OR',
            'name': 'Oregon',
            'tax': 0.00
        },
        {
            'code': 'AK',
            'name': 'Alaska',
            'tax': 0.03
        },
    ];
    
    
});