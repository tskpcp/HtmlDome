var app=angular.module('myApp',[]);
app.controller('myCtrlkeyValue',function($scope){
	$scope.datas={data1:{key1:"key1",value1:"value1",value2:"value1-1"},
				 data2:{key1:"key2",value1:"value2",value2:"value1-2"},
				 data3:{key1:"key3",value1:"value3",value2:"value1-3"},};
});
app.controller('myCtrlValue',function($scope){
	$scope.sites={site01 : "Google",site02 : "Runoob",site03 : "Taobao"};
});
app.controller('myCtrlRepeatOroptions',function($scope){
	  $scope.sites = [{site : "Google", url : "http://www.google.com"},
    				  {site : "Runoob", url : "http://www.runoob.com"},
    				  {site : "Taobao", url : "http://www.taobao.com"}];
});
