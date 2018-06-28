var express = require('express');
var mysql = require('mysql');
var http = require('http');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost'
  ,port: 3306
  ,user: 'root'
  ,password: 'root'
  ,database: 'test'
});

var server = http.createServer(app).listen(800);
connection.connect();
console.log("hello nodejs");
app.get('/test',function (req,res){
  res.send('hello 조정연');
});

app.get('/getAllMember2', function(req, res){
connection.query('select * from member2',
function(err,rows,fields){
  if(err)throw err;
  console.log(rows);
});
});
app.get('/cssPractice',function(req,res){
  res.sendfile('css3.html');
});



//1.getAuthcode 1 or 2 - authocode 1이거나 2인사람 - 선생님

app.get('/getAuthcode', function(req,res){
  connection.query('select * from member where authocode =1 or authocode = 2  ',
  function(err,rows,fields){
    if(err)throw err;
    res.send(rows);
  });
});

//2.getNameFromBoard - 글을 쓴 적이 있는 사람의 이름 목록 -선생님
app.get('/getNameFromBoard', function(req,res){
  connection.query('select name from member where id in (select id from board) ',
  function(err,rows,fields){
    if(err)throw err;
    res.send(rows);
  });
});

//3.getEmailOfAdmin - 권한이 '관리자'인 사람의 이메일 주소만 (0 이라는 코드를 쓰면 안됨)

app.get('/getNameFromBoard', function(req,res){
  connection.query('select email from member where authcode = '+
  '(select authcode from auth where authority = "관리자") ',
  function(err,rows,fields){
    if(err)throw err;
    res.send(rows);
  });
});

//3.getEmailOfAdmin - 권한이 '관리자'인 사람의 이메일 주소만 (0 이라는 코드를 쓰면 안됨) - 선생님

app.get('/getNameFromBoard', function(req,res){
  connection.query('select email from member where authcode = \
  (select authcode from auth where authority = "관리자")',
  function(err,rows,fields){
    if(err)throw err;
    res.send(rows);
  });
});


//4.getLongestEmail - 이메일 주소가 가장 긴 사람

app.get('/getLongestEmail', function(req,res){
  connection.query('select * from member where length(email) = '+
  '(select max(length(email)) from member) ',
  function(err,rows,fields){
    if(err)throw err;
    res.send(rows);

  });
});

//4.getLongestEmail - 이메일 주소가 가장 긴 사람 -선생님

app.get('/getLongestEmail', function(req,res){
  connection.query('select * from member where length(email) = \
  (select max(length(email)) from member) ',
  function(err,rows,fields){
    if(err)throw err;
    res.send(rows);

  });
});
