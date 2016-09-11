var express = require('express'),
    pacienteModel = require('../model/PacienteModel'),
    common = require('./CommonResponse'),
    accessModel = require('../model/AccessModel'),
    validate = require('../services/serviceExpediente.js'),
    request = require('request'),
    swiftWrapper = require('../helper/swiftWrapper.js'),
    expedienteModel = require('../model/ExpedienteModel.js'),
    notasModel = require('../model/NotaMedicaModel.js')
    router = express.Router();

    router.get('/', function(req, res){

      swiftWrapper.getInstances();

      var qry = pacienteModel.find({});
      qry.exec(function(err, data){
          common.send(err, data, res);
      });

    });

    router.get('/currentReceta/:idPaciente', function(req, res){
      console.log({idUsuario:req.params.idPaciente});
      notasModel.findOne({idUsuario:req.params.idPaciente},function(err, doc){
        console.log(err);
        console.log(doc);
        res.send({success:true, result : doc});
      })

    });

    router.post('/infoExpediente', function(req, res){
      console.log(req.body);
      var accessObj = req.body;

      accessModel.findOne(accessObj,function(err, data){
          var success = (err == null);
          var validate = (data != null);

          if(success && validate){
            pacienteModel.findOne({},function(err,data){
              console.log(data);
              if(data != undefined){
                accessModel.remove(accessObj,function(err,data){})
                return res.send({status:validate, result: data});
              }else{
                return res.send({status:validate, result: data});
              }

            })
          }else{
            return res.send({status:validate});
          }

      });

      /*
      validate.validateExp(accessObj, function(success){

        if(success){
          return resThat.send({status:success});
          pacienteModel.findOne({},function(err,data){

            console.log(data);
            return resThat.send({status:success});
          })
            return resThat.send({status:success});

        }

        return res.send({status:success});

      });
      */


    });



    router.get('/:idSearch/:tipo', function(req, res){
      var tipo = req.params.tipo;

      var sentence = {};
      sentence[tipo] = req.params.idSearch;

      console.log(sentence);

      var qry = pacienteModel.find(sentence);
      qry.exec(function(err, data){
          common.send(err, data, res);
      });

    });

    router.post('/find', function(req, res){

      var qry = {
        nombre : req.body.nombre,
        apMaterno : req.body.apMaterno,
        apPaterno : req.body.apPaterno
      };

      var qry = pacienteModel.find(qry);
      qry.exec(function(err, data){
          common.send(err, data, res);
      });

    });

    router.post('/', function(req, res){

      var pcObject = req.body;
      console.log(req.body);
      var paciente = new pacienteModel(pcObject);

      paciente.save(function(err, data){
        swiftWrapper.createContainer(data._id, function(err,data){
          console.log('test container');
        })
        common.send(err, data, res);
      })

    })

module.exports = router;
