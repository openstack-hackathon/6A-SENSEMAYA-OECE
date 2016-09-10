mongoose = require('mongoose')

var schema = mongoose.Schema({

  nombre : String,
  apellidoPaterno : String,
  apellidoMaterno : String,
  cedula : String,
  lugarTrabajo : String,
  especialidades : []

})

module.exports = mongoose.model('Medico', schema);
