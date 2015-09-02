var nightsController = function() {

    var get = function(req, res) {
        res.json({ controller: "Nights Controller"});
    };

    return {
        get: get
    };
};

module.exports = nightsController;
