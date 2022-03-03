const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Jenny Sanderson');
});

module.exports = routes;
