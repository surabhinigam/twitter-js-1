var express = require('express');
var app = express();

app.use('/', function(req, res, next){
	console.log(req.method, req.path);
	//console.log(req.status);
	next();
});

//var specialRouter = express.Router();
// specialRouter.use('/special', function(req, res, next){
// 	console.log(req.method);
// 	console.log("you have reached the special");
// });



app.get('/', function(req, res) {
	//console.log(req.method);
  res.send('Welcome to the Twitter App');
});

app.get('/news', function(req, res) {
  res.send('Welcome to the Twitter App News');
});

app.use('/special', function(req, res, next){
	//console.l
	console.log("getting the special area");
	console.log(req.status);
	res.send("you are in the special area");
});


app.listen(3000, function() {
  console.log('Listening on port 3000');
});