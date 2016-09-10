var mongoose = require('mongoose');


var schema = mongoose.Schema({
  "idWerable" : String,
  "userId" : {type : mongoose.Schema.ObjectId, ref : 'Paciente'}
})

module.exports = mongoose.model('Werable', schema);
