const routes = require('express').Router();
const userController = require('../controllers/user');

routes.get('/', userController.getUser);
routes.get('/username', userController.getUsername);

module.exports = routes;
