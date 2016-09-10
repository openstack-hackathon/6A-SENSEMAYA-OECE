var express = require('express'),
    accessModel = require('../model/AccessModel'),
    common = require('./CommonResponse')
    router = express.Router();

    router.get('/', function(req, res){
      res.send({success:true, page:'accessController'})
    });

    router.post('/', function(req, res){

      var accessObject = req.body;
      accessObject.tokenId = createToken();

      console.log(accessObject);
      var access = new accessModel(accessObject);
      access.save(function(err, doc){
          return common.send(err,doc, res);
      });

    })

    router.post('/validateAccessController', function(){
      
    });

    function createToken(){
      return "ABCD";
    }

module.exports = router;
