var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/getTranslate', function (req,res){
  res.sendFile("languge.html");
});

app.get('/trans', function (req,res){
  var context = req.query.abc;
  var language = req.query.langlang;
  var result = "";
  var str = [];
  str[0] =["hello","nice to meet you","thanks","sorry","howMuch"];
  str[1] = ["こんにちは","はじめまして","ありがとうございます","申し訳ありません","いくらですか"];
  result=str[language][context];
  res.send(result);
});
