var express = require('express'),
    router = express.Router(),
    common = require('./CommonResponse'),
    WerableModel = require('../model/WerableModel');

    router.get('/', function(req, res){

      var qry = WerableModel.find();
      qry.exec(function(err, data){
        common.send(err, data, res);
      })

    })

    router.get('/:idWear', function(req, res){

      var qry = WerableModel.find({idWerable:req.params.idWear});
      qry.populate('userId');
      qry.exec(function(err, data){
        return res.send(common.response(err, data));
      })

    });


    router.post('/', function(req, res){

      var request = req.body;
      console.log(request);
      var newObj = {userId:request.userId, idWerable: request.idWerable};
      console.log(newObj);
      var werable = new WerableModel(newObj);
      werable.save(function(err, data){
        common.send(err, data, res);
      });

    });


module.exports = router;
