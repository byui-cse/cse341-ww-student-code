const db = require('../models');
const User = db.user;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.password) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.'
      });
    });
};

exports.getAll = (req, res) => {
  User.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

exports.getUser = (req, res) => {
  const username = req.params.username;
  User.find({ username: username })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};
