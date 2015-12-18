var salesTaxApp = angular.module('salesTaxApp', []);




salesTaxApp.controller('calcCtrl', function ($scope) {
    
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
    $scope.currentState = -1
    $scope.price;
    
    $scope.select = function(state, index) {
        $scope.selected = state;
        $scope.currentState = index;
    };
    $scope.isActive = function(state) {
        return $scope.selected === state;
    };
    $scope.checkIfSelected = function(){
        if ($scope.currentState == -1){
            alert("Please Select a State First");
        }
        
    };
    $scope.checkNumberValid = function(){
        return angular.isNumber($scope.price);
    };
    
    
});

