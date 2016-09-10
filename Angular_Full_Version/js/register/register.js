function RegisterCtrl($location, $scope, $http) {

	var register = this;

	$scope.register = {
		nombre : "",
		apPaterno : "",
		apMaterno : "",
		fechaNac : "",
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
		religion : "",
		email : "",
		grupoS : "",
		coment : "",
	};	

	$scope.registerClick = function(){
		console.log("click");
		console.log($scope.register);		
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('RegisterCtrl', RegisterCtrl);