var express = require('express');

var routes = function() {
    var nightsRouter = express.Router();
    var nightsController = require('../controllers/nightsController')();

    nightsRouter.route('/')
        .get(nightsController.getNights)
        .post(nightsController.postNight);

    nightsRouter.route('/:nightId')
        .get(nightsController.getNight)
        .put(nightsController.putNight)
        .patch(nightsController.patchNight)
        .delete(nightsController.deleteNight);

    return nightsRouter;
};

module.exports = routes;
