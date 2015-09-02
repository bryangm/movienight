var express = require('express');

var routes = function() {
    var nightsRouter = express.Router();
    var nightsController = require('../controllers/nightsController')();

    nightsRouter.route('/')
        .get(nightsController.get);

    return nightsRouter;
};

module.exports = routes;
