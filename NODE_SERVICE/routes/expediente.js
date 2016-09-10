var express = require('express'),
    router = express.Router();

    router.get('/', function(req, res){
      res.send({success:true, page:'expediente'})
    });

module.exports = router;
