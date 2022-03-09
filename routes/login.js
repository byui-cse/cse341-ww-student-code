const express = require("express");

const loginController = require("../controllers/login");

const router = express.Router();

// POST LOGIN
router.post("/", loginController.postLogin);
// localhost:8080/login/
module.exports = router;
