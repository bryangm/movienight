var moviesController = function(Movie) {

    var findById = function(req, res, next) {
        Movie.findById(req.params.movieId, function(err,movie) {
            if (err) {
                res.status(500).send(err);
            } else if (movie) {
                req.movie = movie;
                next();
            } else {
                res.status(404).send('No movie found.');
            }
        });
    }

    var getMovies = function(req, res) {
        Movie.find({}, function(err,movies) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(movies);
            }
        });
    };

    var getMovie = function(req, res) {
        res.json(req.movie);
    };

    var postMovie = function(req, res) {
        res.json({ controller: "Create a Movie (POST)"});
    };

    var putMovie = function(req, res) {
        res.json({ controller: "Update a Movie (PUT)"});
    };

    var patchMovie = function(req, res) {
        res.json({ controller: "Update a Movie (PATCH)"});
    };

    var deleteMovie = function(req, res) {
        res.json({ controller: "Delete a Movie (DELETE)"});
    };

    return {
        findById: findById,
        getMovies: getMovies,
        getMovie: getMovie,
        postMovie: postMovie,
        putMovie: putMovie,
        patchMovie: patchMovie,
        deleteMovie: deleteMovie
    };
};

module.exports = moviesController;
