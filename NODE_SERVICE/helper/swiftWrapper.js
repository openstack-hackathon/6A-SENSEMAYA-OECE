var request = require('request'),
    authVo = require('./authVo');

var swiftClient = {}
var url = "http://172.16.6.2:8080/v1/AUTH_af39c34c6a8b4c628c853f5803e6f978/";


function createSession(callback){
  console.log('process.env.TOKEN_SESSION ---------');
  console.log(process.env.TOKEN_SESSION);
  console.log('----- process.env.TOKEN_SESSION');
  var options = {
    url : "http://172.16.6.2:5000/v3/auth/tokens/",
    method : "POST",
    json : authVo
  };
  request.post(options)
  .on('response', function(response) {
    //console.log(response.headers['x-subject-token']);
    response.headers['x-subject-token'];
    process.env.TOKEN_SESSION = response.headers['x-subject-token'];
    callback(response.headers['x-subject-token']);
  })

}

swiftClient.getInstances = function(){
  createSession(function(data){
    console.log("SESSION DATA");
    console.log(data);
    console.log("< ======= SESSION DATA ===== >");
    request.get(
        {url:url,
        "headers": {
          'X-Auth-Token': data
        }
      },callback)

    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        //console.log(info.stargazers_count + " Stars");
        //console.log(info.forks_count + " Forks");
      }
    }

  })
}

swiftClient.uploadImage = function(nameContainer, callback){
  console.log("CREATE CONTAINER SESSION");
  console.log(process.env.TOKEN_SESSION);

  request.put({
    url : url+'57d4a7f95ad30b7f7be582fe'+'/143Snorlax_AG_anime.png',
    "headers": {
      'X-Auth-Token': process.env.TOKEN_SESSION,
      "Content-Length": "1"
    }
  },callback);

  function callback(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode == 200) {
      console.log(body);
      //console.log(info.stargazers_count + " Stars");
      //console.log(info.forks_count + " Forks");
    }
  }

}

swiftClient.createContainer = function(nameContainer, callback){
  console.log("CREATE CONTAINER SESSION");
  console.log(process.env.TOKEN_SESSION);
  console.log(url+nameContainer);
  request.put({
      url : url+nameContainer,
      "headers": {
        'X-Auth-Token': process.env.TOKEN_SESSION
      }
      },callback)
  function callback(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode == 200) {
      console.log(body);
      //console.log(info.stargazers_count + " Stars");
      //console.log(info.forks_count + " Forks");
    }
  }
}

module.exports = swiftClient;
