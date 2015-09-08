var _ = require('lodash');

var moviesController = function(Movie) {

    var findMovieById = function(req, res, next) {
        Movie.findById(req.params.movieId, function(err,movie) {
            if (err) {
                res.status(500).send(err);
            } else if (movie) {
                req.movie = movie;
                next();
            } else {
                res.status(404).send('No movie found');
            }
        });
    }

    var listMovies = function(req, res) {
        Movie.find({}, function(err,movies) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(movies);
            }
        });
    };

    var findMovie = function(req, res) {
        res.json(req.movie);
    };

    var addMovie = function(req, res) {
        var createMovie = new Movie(req.body);

        if(!req.body.title) {
            res.status(400);
            res.send('Title is required');
        } else {
            createMovie.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).json(createMovie);
                }
            });
        }
    };

    var updateMovie = function(req, res) {
        req.movie.title = req.body.title;
        req.movie.year = req.body.year;
        req.movie.rating = req.body.rating;
        req.movie.length = req.body.length;
        req.movie.genre = req.body.genre;
        req.movie.releaseDate = req.body.releaseDate;

        req.movie.save(function(err) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(req.movie);
            }
        });
    };

    var deleteMovie = function(req, res) {
        req.movie.remove(function(err) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(204).send('Movie removed');
            }
        });
    };

    var addDirector = function(req, res) {
        if(!req.body.firstName || !req.body.lastName) {
            res.status(400);
            res.send('First Name and Last Name are required');
        } else {
            req.movie.directors.push(req.body);
            req.movie.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.movie);
                }
            });
        }
    };

    var deleteDirector = function(req, res) {
        if (!_.find(req.movie.directors, { id: req.params.personId })) {
            res.status(404);
            res.send('Director not found');
        } else {
            _.remove(req.movie.directors, function(director) {
                return director.id === req.params.personId;
            });
            req.movie.markModified('directors');
            req.movie.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.movie);
                }
            });
        }
    };

    var addWriter = function(req, res) {
        if(!req.body.firstName || !req.body.lastName) {
            res.status(400);
            res.send('First Name and Last Name are required');
        } else {
            req.movie.writers.push(req.body);
            req.movie.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.movie);
                }
            });
        }
    };

    var deleteWriter = function(req, res) {
        if (!_.find(req.movie.writers, { id: req.params.personId })) {
            res.status(404);
            res.send('Writer not found');
        } else {
            _.remove(req.movie.writers, function(writer) {
                return writer.id === req.params.personId;
            });
            req.movie.markModified('writers');
            req.movie.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.movie);
                }
            });
        }
    };

    var addCastMember = function(req, res) {
        if(!req.body.firstName || !req.body.lastName) {
            res.status(400);
            res.send('First Name and Last Name are required');
        } else {
            req.movie.cast.push(req.body);
            req.movie.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.movie);
                }
            });
        }
    };

    var deleteCastMember = function(req, res) {
        if (!_.find(req.movie.cast, { id: req.params.personId })) {
            res.status(404);
            res.send('Cast member not found');
        } else {
            _.remove(req.movie.cast, function(castMember) {
                return castMember.id === req.params.personId;
            });
            req.movie.markModified('cast');
            req.movie.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                } else {
                    res.json(req.movie);
                }
            });
        }
    };

    return {
        findMovieById: findMovieById,
        listMovies: listMovies,
        findMovie: findMovie,
        addMovie: addMovie,
        updateMovie: updateMovie,
        deleteMovie: deleteMovie,
        addDirector: addDirector,
        deleteDirector: deleteDirector,
        addWriter: addWriter,
        deleteWriter: deleteWriter,
        addCastMember: addCastMember,
        deleteCastMember: deleteCastMember
    };
};

module.exports = moviesController;
