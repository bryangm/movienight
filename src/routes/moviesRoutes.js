var express = require('express');

var routes = function() {
    var moviesRouter = express.Router();
    var moviesController = require('../controllers/moviesController')();

    moviesRouter.route('/')
        .get(moviesController.get);

    return moviesRouter;
};

module.exports = routes;
