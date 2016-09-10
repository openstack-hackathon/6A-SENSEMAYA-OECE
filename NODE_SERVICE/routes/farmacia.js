var express = require('express'),
    router = express.Router();

    router.get('/', function(req, res){

      res.send({success:true, page:'farmacia'})

    });

module.exports = router;
