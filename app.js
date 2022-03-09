require("dotenv").config();
const express = require("express");
const PORT = 8080;
const app = express();

// Routes
const loginRoutes = require("./routes/login");
const userInfoRoutes = require("./routes/userInfo");

app.use(express.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "DELETE, PUT");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	if ("OPTIONS" == req.method) {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.use("/login", loginRoutes);
app.use("/userInfo", userInfoRoutes);

app.listen(PORT);
console.log(`Connected to port ${PORT}`);
