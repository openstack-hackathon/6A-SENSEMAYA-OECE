function LonginCtrl($location, $scope, $http, $rootScope) {

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

    $http.post("http://172.16.1.43:3000/login/",{user:""+$scope.user, password:""+$scope.password})
    	.success(function(data){
				$rootScope.userSession = data;
    		var rol=data.rol;
	       console.log("El rol es: "+rol);
	       if(rol=="Paciente"){
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
