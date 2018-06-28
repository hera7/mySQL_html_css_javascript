var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/getCarPrice', function (req,res){
  res.sendfile("0072.html");
});

app.get('/carSelt', function (req,res){
  var carB = req.query.carBuying;
  var carC = req.query.carselct2;

  var result = "";
  var str = [];
  str[0] =[2100,1300,1500,3500,3200];
  str[1] = [100,120,200,130,80];
  result=str[0][carB]+str[1][carC] ;
  res.send(result+"만원");
});
