function LonginCtrl($location, $scope, $http) {

	var login = this;

	$scope.login = {
		user : "us",
		password : "pas"
	};
	
	$scope.user = "";
	$scope.password = "";

	$scope.loginClick = function(){
		console.log("click");
		console.log($scope.user);
		console.log($scope.password);
    
    $http.post("http://172.16.11.97:3000/login/",{user:""+$scope.user, password:""+$scope.password})
    	.success(function(data){       	 	
    		var rol=data.result.rol;
	       console.log("El rol es: "+rol);
	       if(rol=="paciente"){
	       	$location.path('/dashboards/1');
	       }
	       else if(rol=="medico"){
	       		$location.path('/doc/dash');
	       }else{
	       	$location.path('/pharm/dash');
	       }
    	})
    	.error(function (data) {
			swal("Contraseña Incorrecta!", "Intentalo de nuevo...!", "error");
			$location.path('/#/login');
        })
		
	}

	 
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('LonginCtrl', LonginCtrl);