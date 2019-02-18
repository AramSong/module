var express = require('express');
var app = express();

//(app) require를 통해서 가져온 p1의 exports를 가져온 함수가 app이라는 객체를 전달
var p1 = require('./routes/p1')(app);
//p1경로의 접근은 router에게 위임.
app.use('/p1',p1);

//p2.js의 매개변수를 통해서 함수객체가 들어올 수 있음.
var p2 = require('./routes/p2')(app);
app.use('/p2',p2);

app.listen(3003,function(){
  console.log('connected');
});
