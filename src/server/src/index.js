const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const {PORT} = process.env;
var seed = require("../config/seed");
const app = express();
const birthdayRoutes = require("./controllers/birthdays_controller");

seed.initializeSeed();

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
	extended: true
}));

// routes
app.use('/birthdays', birthdayRoutes);

// default route
app.get("/", (req, res) => {
	res.status(200).send("Simple NodeJs Birthday API");
});

app.listen(5000, () => {
	console.warn("App is running at http://localhost:" + PORT);
});

module.exports = app;