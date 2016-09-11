var mongoose = require('mongoose');


var schema = mongoose.Schema({
  medico : String,
  especialidad : String,
  subjetivo : String,
  objetivo : String,
  analisis : String,
  diagnostico : String,
  tratamiento: String,
  laboratorio : String,
  idPicture : String,
  idUsuario : {type : mongoose.Schema.ObjectId, ref : 'Paciente'},
  fecha : {type : Date, default : Date.now}
});

module.exports = mongoose.model('NotasMedica', schema);
