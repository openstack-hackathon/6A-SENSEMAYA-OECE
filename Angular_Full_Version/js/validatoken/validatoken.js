function validacionCtrl($location, $scope, $http,$rootScope) {
	$scope.infoPaciente={};
	$scope.validaToken= function(){
				$scope.dataReq = {
			idPaciente:"57d437a7ab27a76ed76bb56e",
        	idMedico:"57d45bd391ba7b732db7a796",
        	tokenId:$scope.tokenU
		}
		
		//Solicita Token
		$http({
		method : "POST",
		data: $scope.dataReq,
		url : $rootScope.host+"/pacientes/infoExpediente"
		}).success(function(resultado){	
		if(resultado.status)	{
			$rootScope.paciente = resultado;
			$location.path('/doc/paciente');
		}else{
			swal("Token Incorrecto!", "Intentalo de nuevo!", "error");			

		}

		});
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('validacionCtrl', validacionCtrl);