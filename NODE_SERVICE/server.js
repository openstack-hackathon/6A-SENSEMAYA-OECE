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

mongoose.connect('mongodb://localhost:27017/DigitalPlot');
//mongoose.connect("mongodb://localhost:27017/CrossAdmin-test");
var db = mongoose.connection;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Test");
  next();
});


// Static files
app.use('/assets', express.static(__dirname + '/public'))
app.use(express.static('node_modules/express.io'))
// Body parser
app.use(bodyParser.json())


app.get('/', function (req, res) {
	res.send({success:true});
})


http.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})
