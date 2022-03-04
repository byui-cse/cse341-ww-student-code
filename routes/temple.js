const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get('/', temples.findAll);

// Create a new Temple
routes.post('/', temples.create);

// Retrieve all published Temples

// Retrieve a single Temple with id
routes.get('/:temple_id', temples.findOne);

// Update a Temple with id
// routes.put('/:id', temples.update);

// Delete a Temple with id
// routes.delete('/:id', temples.delete);

// Create a new Temple
// routes.delete('/', temples.deleteAll);

module.exports = routes;
