var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var settings = require('./settings/settings')
var router = express.Router();

var app = express();

var Movie = require('./models/movieModel');
var Night = require('./models/nightModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(settings.mongodb.uri, settings.mongodb.options);

var moviesRouter = require('./routes/moviesRoutes')(Movie);
var nightsRouter = require('./routes/nightsRoutes')(Night);

app.use('/api/movies', moviesRouter);
app.use('/api/nights', nightsRouter);

app.get('/', function(req,res) {
  res.send('welcome to my API');
});

app.listen(settings.port, function() {
  console.log('application is running on port: ' + settings.port);
});

module.exports = app;
