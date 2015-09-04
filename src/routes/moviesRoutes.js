var express = require('express');

var routes = function(Movie) {
    var moviesRouter = express.Router();
    var moviesController = require('../controllers/moviesController')(Movie);

    moviesRouter.route('/')
        .get(moviesController.getMovies)
        .post(moviesController.postMovie);

    moviesRouter.route('/:movieId')
        .all(moviesController.findById)
        .get(moviesController.getMovie)
        .put(moviesController.putMovie)
        .patch(moviesController.patchMovie)
        .delete(moviesController.deleteMovie);

    return moviesRouter;
};

module.exports = routes;
