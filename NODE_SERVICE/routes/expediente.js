var express = require('express'),
    notaMedica = require('../model/NotaMedicaModel.js'),
    common = require('./CommonResponse'),
    multer = require('multer'),
    swiftClient = require('../helper/swiftWrapper.js'),
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

    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
          cb(null, file.originalname);

      }
    })

    router.put('/notaMedica/:idNota/:idPaciente',
      multer({storage:storage}).single('upl'),
      function(req, res){

      swiftClient.uploadImage("","");

      res.send({success:true});
    })

module.exports = router;
