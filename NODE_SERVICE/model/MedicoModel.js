mongoose = require('mongoose')

var schema = mongoose.Schema({

  nombre : String,
  rfc : String,
  curp : String,
  apellidoPaterno : String,
  apellidoMaterno : String,
  cedula : String,
  lugarTrabajo : String,
  especialidades : []

})

module.exports = mongoose.model('Medico', schema);
