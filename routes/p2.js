module.exports = function(){
  var p2 = express.Router();
  p2.get('/r1', function(req,res){
    res.send('Hello /p2/r1');
  });

  p2.get('/r2', function(req,res){
    res.send('Hello /p2/r2');
  });
  app.use('/p2',p2);
  return p2;
};
