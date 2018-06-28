var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function (req,res){
  res.send("hello world");
});

app.get('/request1', function(req,res){
  res.send("response1")
});

app.get('/request2', function(req,res){
  res.send("response2")
});

app.get('/request3', function(req,res){
  res.send("response3")
});

app.get('/getRequest', function(req,res){
  console.log(req.query);
  res.send("your querystring is : " +
  req.query.a + req.query.b + req.query.c);
});

// app.get('/getFile', function(req,res){
//   res.sendfile("ajax.html");
// });

app.get('/getFile', function(req,res){
  res.sendfile("requestTest.html");
});





// cmd 키고 supervisor app.js(파일이름)
// http://localhost/test
