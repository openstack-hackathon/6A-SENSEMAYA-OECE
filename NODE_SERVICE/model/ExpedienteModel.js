var mongoose = require('mongoose')

var schema = mongoose.Schema({
  images : [],
  idUsuario : {type : mongoose.Schema.ObjectId, ref : 'Paciente'},
  descripcion : String,
  medico : String,
  diganostico : String,
  tratamiento : String
});

module.exports = mongoose.model('Expediente', schema);
