var accessModel = require('../model/AccessModel.js');
var service = {};

  service.validateExp = function(qryValidate, callback){

    accessModel.findOne(function(err, data){
        var success = (err == null);
        var validate = (data != null);

        callback((success && validate))

    });

  }

module.exports = service;
