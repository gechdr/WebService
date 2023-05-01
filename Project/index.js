// intall express joi @joi/date sequelize mysql2 axios

const express = require("express");
const app = express();
app.set("port", 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Sequelize = require("sequelize");
const { Model, DataTypes, Op } = require("sequelize");
const conn = new Sequelize("", "root", "", {
	host: "localhost",
	dialect: "mysql",
	logging: false,
});

// const Joi = require("joi").extend(require("@joi/date"));
const axios = require("axios");

// const jwt = require("jsonwebtoken");
// const JWT_KEY = "";

// -------------------------------------------------------

app.get("/api/products", async (req,res) => {

	let Fruits = await axios.get("https://api.predic8.de:443/shop/products/33");

	let result = Fruits.data;

	return res.send(result);
})

// -------------------------------------------------------

app.listen(app.get("port"), () => {
	console.log(`Server started at http://localhost:${app.get("port")}`);
});
