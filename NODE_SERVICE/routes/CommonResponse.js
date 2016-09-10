var commmonRespose = {};


commmonRespose.response = function(err, data){
  var result = {};

    result.success = true;
    result.result = data;

  return result;

}

commmonRespose.send = function(err, data, res){
   res.send(this.response(err, data));
};

module.exports = commmonRespose;
