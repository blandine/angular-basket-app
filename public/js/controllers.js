'use strict';

var basketAppCtrl = angular.module('basketAppCtrl',['itemsService','userService']);

basketAppCtrl.controller('ItemListCtrl',['items', '$scope',
    function(items, $scope){
        //do sthg
        $scope.items = items;
        $scope.price = function(items) {
            var sum = 0;
            items.map(function(item){sum += item.price * item.quantity;});
            return sum;
        };
        $scope.add = function(item){
            item.quantity ++;
        };
        $scope.remove = function(item){
            item.quantity = item.quantity > 1 ? item.quantity-1 : 1; // we don't want user to remove item ;)
        };
}]);


basketAppCtrl.controller('DetailsCtrl',['$scope', '$location', 'user',
    function($scope, $location, user){
        $scope.user = user;
        $scope.save = function(user) {
            $location.path("/confirmation");
        }
    }]);

basketAppCtrl.controller('ConfirmationCtrl', ['$scope', 'user', 'items',
    function($scope, user, items){
        $scope.user = user;
        $scope.items = items;
        $scope.ok = "none";
        $scope.validOrder = function(ok){
            $scope.ok = "block";
        }
    }]);