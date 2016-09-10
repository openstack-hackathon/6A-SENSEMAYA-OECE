function LonginCtrl($location, $scope) {

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
		/*request({
	    method:'POST',
	    body:{
	      "password" : "12345",
	      "user" : "medico-123123",
	      "pass" : "qwerty"
	    },
	    uri: 'http://172.16.11.97:8989/',
	    json: true
	    }, (err, res, body) =>{
	       console.log(body);	       
	       if(body.successPassword === true){
	          //

	       }else{
	          alert("Contraseña Incorrecta!", "Intentalo de nuevo...!", "error");
	          
	       }
	       */
	       var rol=$scope.user;
	       console.log("El rol es: "+rol);
	       if(rol=="paciente"){
	       	$location.path('/dashboards/1');
	       }
	       else if(rol=="medico"){
	       		$location.path('/doc/dash');
	       }else{
	       	$location.path('/pharm/dash');
	       }
		
	}

	 
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('LonginCtrl', LonginCtrl);