var express = require('express');
var router = express.Router();

var app = express();
var port = process.env.PORT || 3000;

moviesRouter = require('./routes/moviesRoutes')();
nightsRouter = require('./routes/nightsRoutes')();

app.use('/api/movies', moviesRouter);
app.use('/api/nights', nightsRouter);

app.get('/', function(req,res) {
  res.send('welcome to my API');
});

app.listen(port, function() {
  console.log('gulp is running on port: ' + port);
});

module.exports = app;
