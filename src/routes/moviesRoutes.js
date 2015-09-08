var express = require('express');

var routes = function(Movie) {
    var moviesRouter = express.Router();
    var moviesController = require('../controllers/moviesController')(Movie);

    moviesRouter.route('/')
        .get(moviesController.listMovies)
        .post(moviesController.addMovie);

    moviesRouter.route('/:movieId')
        .all(moviesController.findMovieById)
        .get(moviesController.findMovie)
        .put(moviesController.updateMovie)
        .delete(moviesController.deleteMovie);

    moviesRouter.route('/:movieId/directors')
        .all(moviesController.findMovieById)
        .post(moviesController.addDirector);

    moviesRouter.route('/:movieId/directors/:personId')
        .all(moviesController.findMovieById)
        .delete(moviesController.deleteDirector);

    moviesRouter.route('/:movieId/writers')
        .all(moviesController.findMovieById)
        .post(moviesController.addWriter);

    moviesRouter.route('/:movieId/writers/:personId')
        .all(moviesController.findMovieById)
        .delete(moviesController.deleteWriter);

    moviesRouter.route('/:movieId/cast')
        .all(moviesController.findMovieById)
        .post(moviesController.addCastMember);

    moviesRouter.route('/:movieId/cast/:personId')
        .all(moviesController.findMovieById)
        .delete(moviesController.deleteCastMember);

    return moviesRouter;
};

module.exports = routes;
