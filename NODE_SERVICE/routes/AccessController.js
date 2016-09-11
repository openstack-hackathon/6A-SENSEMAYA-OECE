var express = require('express'),
    accessModel = require('../model/AccessModel'),
    common = require('./CommonResponse'),
    randomToken = require('random-token'),
    request = require('request'),
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
        return res.send({success:true});
/*
          postData('',accessObject.tokenId,function(){
              return common.send(err,doc, res);
          })*/

      });

    })

    router.post('/validateAccessController', function(){

    });

    function createToken(){
    //  return randomToken(5);
    return "12345";
    }

  function postData(num, data, callback){
    var mensajePost = "https://www.masmensajes.com.mx/wss/smsapi11.php?usuario=isa&password=isasystem&celular=+525552137297&mensaje="+data;
     console.log(mensajePost);
     request.post(
        mensajePost,
         { form: { key: 'value' } },
         function (error, response, body) {
            callback();
             if (!error && response.statusCode == 200) {
               console.log("Masmensajes response");
                 console.log(body)
             }
         }
     );
   }

module.exports = router;
