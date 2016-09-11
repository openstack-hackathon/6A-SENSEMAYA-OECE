var express = require('express'),
    notaMedica = require('../model/NotaMedicaModel.js'),
    common = require('./CommonResponse'),
    router = express.Router();

    router.get('/', function(req, res){

      res.send({success:true, page:'expediente'});

    });

    router.get('/notaMedica/:idPaciente', function(req, res){
      notaMedica.find({idUsuario:req.params.idPaciente}, function(err, doc){
        console.log('nota medica finder');
        common.send(err, doc, res);
      });
    });

    router.post('/notaMedica/:idPaciente', function(req, res){
      var dataSave = req.body;
      dataSave.idUsuario = req.params.idPaciente;

      nota = new notaMedica(dataSave);

      nota.save(function(err, doc){
        return res.send({success:true, response : doc});
      });


    })

    router.put('/notaMedica/:idNota/:idPaciente', function(req, res){

      res.send({success:true});
    })

module.exports = router;
