var express = require('express'),
    router = express.Router(),
    ScreenModel = require('../model/Screen');

    router.get('/', function(req, res){

      ScreenModel.find({},function(err, doc){
        res.send({result:doc})
      })

    });    

module.exports = router;
