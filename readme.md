# 정리정돈의 기술

### 모듈화

반복되는 로직을 별도의 파일로 분리해서 잘 정리정돈 할 수 있는 기술.

소프트웨어의 복잡도를 낮춘다 .

`module2.js`

```javascript
var sum = require('./lib/sum');
console.log(sum(1,2));

var cal = require('./lib/calculator');
console.log('cal sum',cal.sum(1,2));
console.log('cal avg',cal.avg(1,2));
```

`calculator.js`

```javascript
module.exports.sum = function(a,b){
  return a+b;
}
module.exports.avg = function(a,b){
  return (a+b)/2;
}
```

### 라우트 분리하기

라우트가 많아짐에 따라서 개발을 할 때, 필요한 라우트를 찾는 것이 어려워짐. 따라서, 애플리케이션의 구조를 단순화할 필요가 있음.

***유사한 목적의 라우트끼리 묶어서 파일별로 쪼갠다.***

`route.js`

```
var router = express.Router();
router.get('/r1', function(req,res){
  res.send('Hello /p1/r1');
});

router.get('/r2', function(req,res){
  res.send('Hello /p1/r2');
});

//p1경로의 접근은 router에게 위임.
app.use('/p1',router);
```



