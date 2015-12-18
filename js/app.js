var salesTaxApp = angular.module('salesTaxApp', []);




salesTaxApp.controller('calcCtrl', function ($scope, stateInfoService) {
    
    stateInfoService.states = stateInfoService.getStates(function(response) {
        $scope.states = response.data;
    });
    
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
salesTaxApp.service('stateInfoService', function($http){
   this.getStates = function(callback) {
       $http.get('data/states.json').then(callback);
   };
    
});

