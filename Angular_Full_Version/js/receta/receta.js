function RecetaCtrl($location, $scope, $http,$rootScope) {
  $scope.showNotaMedica = false;
  console.log("$rootScope.paciente");
  console.log($rootScope.paciente);
  $scope.paciente = $rootScope.paciente.result;
  $scope.idPaciente = $scope.paciente._id;
  $scope.showHistMedica = false;
  $scope.datPaciente = {
    "nombrePaciente": $scope.paciente.nombre + " " +$scope.paciente.apellidoPaterno + " " +$scope.paciente.apellidoMaterno,
    "peso":$scope.paciente.peso,
    "statura":$scope.paciente.statura,
    "presion":"",
    "temperatura":"",
    "subjetivo":"",
    "objetivo":"",
    "analisis":"",
    "diagnostico":"",
    "tratamiento":"",
    "":""
  }
  // $scope.nombrePaciente = $scope.paciente.nombre + " " +$scope.paciente.apellidoPaterno + " " +$scope.paciente.apellidoMaterno;

  $scope.checkboxModel = {
         value1 : false,
         value2 : 'YES'
       };


  console.log("$rootScope.session");
  console.log($rootScope.userSession);
  $scope.medico=$rootScope.userSession.result;
  $scope.nombreMedico = $scope.medico.nombre + " " + $scope.medico.apellidoPaterno + " " + $scope.medico.apellidoMaterno;


/*
POST  http://127.16.1.43:3000/exp/notaMedica/57d437a7ab27a76ed76bb56e

{
 "medico" : "Luis perez",
 "especialidad" : "Neurlogo",
 "subjetivo" : "El paciente anuncia una falta de vision al caminar",
 "objetivo" : "FC. 80/120 Temperatura 29 paciente lucido presenta un cuadro nervioso",
 "analisis" : "Se encuentra hitoria clinica turbia",
 "diagnostico" : "Paciente con crisis nerviosa convulsiva",
 "tratamiento": "100 mg de paracetamol",
 "laboratorio" : "0"
}
*/

  $scope.guardaReceta =  function(){

    $scope.datPaciente.medico = $scope.medico;
    $scope.datPaciente.medico = "Neurlogo";
    console.log("Guarda Receta");
    console.log($scope.datPaciente);
    $http({
					  method : "POST",
					  data: $scope.datPaciente,
					  url : " http://172.16.1.43:3000/exp/notaMedica/"+$scope.idPaciente
				  }).success(function(resultado, status, headers, config){
							console.log("Nota medica guardada");
				  });



  }

  $scope.verHistorialMedico = function(){
    $scope.showHistMedica = true;
    $scope.showNotaMedica = false;

 $http({
         method : "GET",
         data: $scope.datPaciente,
         url : "http://172.16.1.43:3000/exp/notaMedica/"+$scope.idPaciente
       }).success(function(resultado, status, headers, config){
           console.log("Historial Medico");
           $scope.result = resultado.result;
           console.log($scope.result);
       });
  }

  $scope.detalle = function(reg){
    console.log("reg");
    console.log(reg);
    $scope.detalleHis = reg;
  }

  
  $scope.realizatx = function(){
    $scope.showHistMedica = false;
    $scope.showNotaMedica = true;
		/*console.log("realizartx...");
		console.log($rootScope.paciente);
		$location.path('/doc/receta');*/
	}

  $scope.example = {
         value: new Date(2016, 10, 11)
       };
}
/**
 *
 * Pass function into module
 */
angular
.module('inspinia')
.controller('RecetaCtrl', RecetaCtrl);
