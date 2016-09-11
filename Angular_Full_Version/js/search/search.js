function SearchCtrl($location, $scope, $http) {

	var search = this;

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
		$http.get("http://172.16.1.43:3000/pacientes/"+$scope.search.parametro+"/"+$scope.search.tipo+"")
	    	.success(function(data){       	 	
	    		console.log(data);
	    		console.log(data.result[0]);
	    		$scope.result=data.result;
	    	})
	    	.error(function (data) {
				swal("No encontrado", "Verifique los datos o registre", "error");				
	        })	

		}else if ($scope.search.tipo=="NOMBRE") {
		$http.post("http://172.16.1.43:3000/pacientes/find",{nombre:""+$scope.search.parametro, apellidoPaterno:""+$scope.search.parametro2, apellidoMaterno:""+$scope.search.parametro3})
	    	.success(function(data){       	 	
	    		console.log(data);
	    		console.log(data.result[0]);
	    		$scope.result=data.result;
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
		url : "http://172.16.1.43:3000/access"
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