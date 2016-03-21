var app=angular.module('myApp',[]);
		//数据绑定实例
		app.controller('myCtrl',function($scope){
			$scope.first="1111";
			$scope.second="22222222";
		});
		//创建自定义的指令
		app.directive("runoobDirective",function(){
			return {
				template:"<h1>自定义指令!</h1>"
			};
		});
		//ng-model 指令可以将输入域的值与 AngularJS 创建的变量绑定。
		app.controller('myCtrlName',function($scope){
			$scope.name="内容绑定";
		});
		//AngularJS Scope 作用域
		app.controller('myCtrlScope',function($scope){
			$scope.carname="scope简单实用";
		});
		//AngularJS Scope 作用范围
		app.controller('myCtrlScopeF',function($scope){
			$scope.names=["1","2","3"];
		});
		//AngularJS Scope 根作用域
		app.controller('myCtrlScopeRoot',function($scope, $rootScope){
			$scope.names=["1","2","3"];
			$rootScope.lastname="0";
		});
		//控制器方法
		app.controller('personCtrl',function($scope){
			$scope.firstName="fist";
			$scope.lastName="last";
			$scope.fullName=function(){
				return $scope.firstName+' '+$scope.lastName;
			};
		});
		app.controller('fpersonCtrl',function($scope){
		$scope.names=[{name:'1',country:'c'},
				  {name:'2',country:'o'},
				  {name:'3',country:'u'}
				];
});
