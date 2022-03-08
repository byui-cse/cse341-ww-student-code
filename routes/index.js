const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res
    .status(200)
    .json(
      (response = { reversed: req.query.name.split('').reverse().join('') })
    );
});

router.use('/', require('./swagger'));

module.exports = router;
