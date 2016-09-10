var express = require('express'),
    router = express.Router();

    router.get('/', function(req, res){

      res.send({success:true})

    });

    router.post('/', function(req, res){
      var login = req.body;
      console.log(req.body);

      var splitUsr = login.user.split('-');

      var result = {rol : splitUsr[0], userName : login.user};

      res.send({success:true, result : result})

    });

module.exports = router;
