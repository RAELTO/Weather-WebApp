const express = require('express');
const route = express.Router();

const services = require('../services/render');
const history_controller = require('../controller/history_controller');


/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

//API for search-history storage
route.post('/api/history', history_controller.create);
route.get('/api/history', history_controller.find);
route.delete('/api/history/:id', history_controller.delete);


module.exports = route;