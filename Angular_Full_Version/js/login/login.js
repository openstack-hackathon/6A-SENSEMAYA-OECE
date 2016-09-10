function LonginCtrl($location, $scope) {

	var login = this;
	console.log("Hola");
	console.log("Holaqwe2ew");

	$scope.login = {
		user : "us",
		password : "pas"
	};
	
	$scope.user = "";
	$scope.password = "";

	$scope.loginClick = function(){
		console.log("click");
		console.log($scope.user);
		console.log($scope.password);
		$location.path('/#');
	}

	 
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('LonginCtrl', LonginCtrl);