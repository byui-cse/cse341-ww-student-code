const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users')

router.get('/', usersController.getUsers)

router.get('/users', usersController.getUsers)

router.post('/users', usersController.postUser)


module.exports = router;