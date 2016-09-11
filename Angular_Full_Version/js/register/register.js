function RegisterCtrl($location, $scope, $http) {

	var register = this;

	$scope.register = {
		nombre : "",
 		apellidoPaterno : "",
 		apellidoMaterno : "",
		fechaNacimiento : "",
		sexo: "",
		curp : "",
		rfc: "",
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
		religion : "",
		email : "",
		grupoS : "",
		coment : "",
	};	

	$scope.registerClick = function(){
		console.log("click");
		console.log($scope.register);	

		$http({
                      method : "POST",
                      data: $scope.register,
                      url : "http://172.16.1.43:3000/pacientes/"
                  }).success(function(resultado, status, headers, config){
                            swal("Registro guardado", "El usuario se dio de alta con exito", "success");				
                          $location.path('/');
                  });	
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('RegisterCtrl', RegisterCtrl);