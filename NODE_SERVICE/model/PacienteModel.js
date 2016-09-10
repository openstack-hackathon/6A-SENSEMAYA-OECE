var mongoose = require('mongoose')

var schema = mongoose.Schema({
  nombre : String,
  apellidoPaterno : String,
  apellidoMaterno : String,
  fechaNacimiento : Date,
  rfc : String,
  curp : String,
  genero : String,
  statura : String,
  peso : String,
  tipo : String,
  contactos : [],
  patologicas : [],
  telefono : String,
  mail : String
})

module.exports = mongoose.model('Paciente', schema);
