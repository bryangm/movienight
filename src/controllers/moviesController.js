var moviesController = function() {

    var get = function(req, res) {
        res.json({ controller: "Movies Controller"});
    };

    return {
        get: get
    };
};

module.exports = moviesController;
