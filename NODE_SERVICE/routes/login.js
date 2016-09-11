var express = require('express'),
    medicoModel = require('../model/MedicoModel.js'),
    pacienteModel = require('../model/PacienteModel.js'),
    router = express.Router();

    router.get('/', function(req, res){

      res.send({success:true})

    });

    router.post('/', function(req, res){
      var login = req.body;
      console.log(req.body);

      var qryPaciente = pacienteModel.findOne({curp:login.user},
        function(err, data){
          if(data != null){
            var result = new Object(data);
            result.rol = "paciente";
            res.send({success:true, result : result, rol : 'paciente'})
          }else{

            medicoModel.findOne({curp:login.user}, function(err,data){

              if(data != null){
                var result = new Object(data);
                result.rol = "medico";
                res.send({success:true, result : result, rol : 'medico'})
              }else{
                res.send({success:false})
              }

            })

          }
        });

    });

module.exports = router;
