var express = require('express');

var routes = function() {
    var moviesRouter = express.Router();
    var moviesController = require('../controllers/moviesController')();

    moviesRouter.route('/')
        .get(moviesController.getMovies)
        .post(moviesController.postMovie);

    moviesRouter.route('/:movieId')
        .get(moviesController.getMovie)
        .put(moviesController.putMovie)
        .patch(moviesController.patchMovie)
        .delete(moviesController.deleteMovie);

    return moviesRouter;
};

module.exports = routes;
