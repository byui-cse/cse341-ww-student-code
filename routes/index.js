const routes = require('express').Router();
const jokes = require('../controllers/');

routes.get('/', jokes.displayJoke);

module.exports = routes;
