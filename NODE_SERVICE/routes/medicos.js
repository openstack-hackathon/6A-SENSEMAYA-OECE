var express = require('express'),
    router = express.Router(),
    common = require('./CommonResponse'),
    medicoModel = require('../model/MedicoModel');

    router.get('/', function(req, res){

      var qry = medicoModel.find({});
      qry.exec(function(err, data){
        return res.send(common.response(err, data));
      })

      //res.send({success:true, page:'medicos'})

    });


    router.post('/', function(req, res){
      var medico = req.body;
      
      var medModel = new medicoModel(medico);

      medModel.save(function(err, data){
        return res.send(common.response(err, data));
      });

    })



module.exports = router;
