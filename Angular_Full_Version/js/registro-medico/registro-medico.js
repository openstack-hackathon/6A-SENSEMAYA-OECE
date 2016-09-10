function RegistroMedicoCtrl($location, $scope, $http) {

	var register = this;

	$scope.register = {
		nombre : "",
 		apellidoPaterno : "",
 		apellidoMaterno : "",
 		cedula : "",
		fechaNacimiento : "",
		sexo: "",
		curp : "",
		estadoC : "",
		nacionalidad : "",
		lugarNac : "",
		calle : "",
		numEx : "",
		numIn : "",
		colonia : "",
		cp : "",
		pais : "",
		estado : "",
		ocupacion : "",
		tel1 : "",
		tel2 : "",
		cel : "",
		email : ""
	};

	$scope.registerClickq = function(){
		console.log("click");
		console.log($scope.register);
		$http({
					  method : "POST",
					  data: $scope.register,
					  url : "http://172.16.1.43:3000/medicos"
				  }).success(function(resultado, status, headers, config){
							console.log("success");
					  	$location.path('/login');
				  });
	}

	$scope.cancelar = function(){
		$location.path('/');
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('RegistroMedicoCtrl', RegistroMedicoCtrl);
