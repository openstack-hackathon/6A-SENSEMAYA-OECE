function InfoPCtrl($location, $scope, $http,$rootScope) {
	console.log($rootScope.paciente.result.apellidoPaterno);
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('InfoPCtrl', InfoPCtrl);