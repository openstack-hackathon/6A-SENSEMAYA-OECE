function SearchCtrl($location, $scope, $http, $rootScope) {

	var search = this;
$scope.registro = false;
	$scope.search = {
		tipo : "",
		parametro : "",
		parametro2 : "",
		parametro3 : "",

	};
	$scope.result=[];
	$scope.searchClick = function(){
		console.log("click");
		console.log($scope.search);
		if($scope.search.tipo!="NOMBRE"){
		$http.get($rootScope.host+"/pacientes/"+$scope.search.parametro+"/"+$scope.search.tipo+"")
	    	.success(function(data){
	    		console.log(data);
	    		console.log(data.result[0]);
	    		$scope.result=data.result;
					if(!$scope.result.length>0){
						swal("No encontrado", "Verifique los datos o registre", "error");
						$scope.registro = true;
					}
	    	})
	    	.error(function (data) {
					swal("No encontrado", "Verifique los datos o registre", "error");
				});

		}else if ($scope.search.tipo=="NOMBRE") {
		$http.post($rootScope.host+"/pacientes/find",{nombre:""+$scope.search.parametro, apellidoPaterno:""+$scope.search.parametro2, apellidoMaterno:""+$scope.search.parametro3})
	    	.success(function(data){
	    		console.log(data);
	    		console.log(data.result[0]);
	    		$scope.result=data.result;
					if(!$scope.result.length>0){
						$scope.registro = true;
					}
	    	})
	    	.error(function (data) {
				swal("No encontrado", "Verifique los datos o registre", "error");
	        })
		}
	}

	$scope.getToken = function(){
		//Datos
		$scope.dataReq = {
			idPaciente:"57d437a7ab27a76ed76bb56e",
        	idMedico:"57d45bd391ba7b732db7a796"
		}
		//Solicita Token
		$http({
		method : "POST",
		data: $scope.dataReq,
		url : $rootScope.host+"/access"
		}).success(function(resultado, status, headers, config){
		console.log("success");
		$location.path('/doc/validatoken');
		});
		//Redirije
	}
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('SearchCtrl', SearchCtrl);
