var express = require('express');
var swig = require('swig')
var bodyParser = require('body-parser')
var fs = require('fs');
var app = express();
var mongoose = require('mongoose');
var http = require('http').Server(app);
var io = require('socket.io')(http);


// Configurar de swig!
app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
swig.setDefaults({cache:false})


/****************************************
**
** CONFIGURACION DE MONGODB
**
******************************************/

//mongoose.connect('mongodb://localhost:27017/DigitalPlot');
//mongoose.connect("mongodb://localhost:27017/CrossAdmin-test");
mongoose.connect("mongodb://localhost:27017/APP_ECE");
var db = mongoose.connection;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Test");
  next();
});


// Static files
app.use('/', express.static(__dirname + '/public'))
app.use(express.static('node_modules/express.io'))
// Body parser
app.use(bodyParser.json())


/********** ROUTES *********/
var login = require('./routes/login');
var exp = require('./routes/expediente');
var farmacia = require('./routes/farmacia');
var medicos = require('./routes/medicos');
var pacientes = require('./routes/pacientes');
var werable = require('./routes/Werable');
var access = require('./routes/AccessController');

app.use('/login', login);
app.use('/exp', exp);
app.use('/farmacia', farmacia);
app.use('/medicos', medicos);
app.use('/pacientes', pacientes);
app.use('/werable', werable);
app.use('/access', access);


http.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
