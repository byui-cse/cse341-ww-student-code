const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sarah Birch');
});

module.exports = routes;
