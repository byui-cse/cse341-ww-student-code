const express = require("express");

const userInfoController = require("../controllers/userInfo");
const isAuth = require("../middleware/authToken");

const router = express.Router();

// GET INFO
// router.get("/", userInfoController.getInfo);
router.get("/", isAuth, userInfoController.getInfo);
// localhost:8080/userInfo/
module.exports = router;
