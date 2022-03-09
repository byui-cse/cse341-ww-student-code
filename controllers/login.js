const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.postLogin = (req, res, next) => {
	const email = req.body.email;
	console.log(email);
	const loginInfo = { email: email };

	const accessToken = jwt.sign(loginInfo, process.env.ACCESS_TOKEN_SECRET);
	res.status(201).json({ accessToken: accessToken });
};
