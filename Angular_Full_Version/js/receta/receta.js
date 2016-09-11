function RecetaCtrl($location, $scope, $http,$rootScope) {
	console.log($rootScope.paciente);

	$scope.realizatx = function(){
		console.log("realizartx...");
		console.log($rootScope.paciente);
		$location.path('/doc/receta');
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('RecetaCtrl', RecetaCtrl);
