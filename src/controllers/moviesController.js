var moviesController = function() {

    var getMovies = function(req, res) {
        res.json({ controller: "Get Movies (GET)"});
    };

    var getMovie = function(req, res) {
        res.json({ controller: "Get Movie (GET)"});
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
        getMovies: getMovies,
        getMovie: getMovie,
        postMovie: postMovie,
        putMovie: putMovie,
        patchMovie: patchMovie,
        deleteMovie: deleteMovie
    };
};

module.exports = moviesController;
