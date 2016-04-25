var app=angular.module("myNoteApp",[]);
    app.controller("myNoteCtrl",function($scope){
    	 $scope.message = "";
    	 //显示变更数量
   		 $scope.left  = function() {return 100 - $scope.message.length;};
   		 //清除文本框
   		 $scope.clear = function() {$scope.message = "";};
   		 //执行保存操作
    	 $scope.save  = function() {alert("Note Saved");};
    });
