var nightsController = function() {

    var getNights = function(req, res) {
        res.json({ controller: "Get Nights (GET)"});
    };

    var getNight = function(req, res) {
        res.json({ controller: "Get Night (GET)"});
    };

    var postNight = function(req, res) {
        res.json({ controller: "Create a Night (POST)"});
    };

    var putNight = function(req, res) {
        res.json({ controller: "Update a Night (PUT)"});
    };

    var patchNight = function(req, res) {
        res.json({ controller: "Update a Night (PATCH)"});
    };

    var deleteNight = function(req, res) {
        res.json({ controller: "Delete a Night (DELETE)"});
    };

    return {
        getNights: getNights,
        getNight: getNight,
        postNight: postNight,
        putNight: putNight,
        patchNight: patchNight,
        deleteNight: deleteNight
    };
};

module.exports = nightsController;
