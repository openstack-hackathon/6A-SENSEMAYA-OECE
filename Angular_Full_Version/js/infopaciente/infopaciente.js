function InfoPCtrl($location, $scope, $http,$rootScope) {

		console.log($rootScope.paciente);
		var p = $rootScope.paciente.result;
		console.log(p);
		$scope.d1=""+p.nombre +" "+p.apellidoPaterno +" "+p.apellidoMaterno;
		if(p.genero==="M"){
			p.genero="Masculino";
		}else{
			p.genero="Femenino";			
		}
		$scope.d2="Genero: "+p.genero +" Estatura: "+p.statura +" Peso: "+p.peso;
		$scope.d3="Tipo de sangre: "+p.tipo;
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
