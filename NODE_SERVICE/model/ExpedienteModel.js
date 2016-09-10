var mongoose = require('mongoose')


var schema = mongoose.Schema({
  images : [],
  descripcion : String,
  medico : String
});

module.exports = mongoose.model('Expediente', schema);
