function InfoPCtrl($location, $scope, $http,$rootScope) {

	console.log($rootScope.paciente);

	$scope.realizatx = function(){
		console.log("realizartx...");
		console.log($rootScope.paciente);
		$location.path('/doc/receta');
	}
	console.log($rootScope.paciente.result.apellidoPaterno);
	$scope.histActivo=false;
	$scope.verHistorialMedico = function(){
		$scope.histActivo=true;

	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('InfoPCtrl', InfoPCtrl);
