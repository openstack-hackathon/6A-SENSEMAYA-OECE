var mongoose = require('mongoose')


var schema = mongoose.Schema({

  idPaciente :  {type : mongoose.Schema.ObjectId, ref : 'Paciente'},
  idMedico : {type : mongoose.Schema.ObjectId, ref : 'Medico'},
  tokenId : String

});

module.exports = mongoose.model('Access', schema);
