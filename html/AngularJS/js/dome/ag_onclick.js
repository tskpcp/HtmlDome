var app=angular.module('myApp',[]);
app.controller('myctrlClick',function($scope){
	$scope.count=0;
});
app.controller('personHideCtrl',function($scope){
	$scope.firstName = "John",
    $scope.lastName = "Doe"
    $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});
app.controller('personShowCtrl',function($scope){
	$scope.firstName = "John",
    $scope.lastName = "Doe"
    $scope.myVar = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };
});
