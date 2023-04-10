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

const Joi = require("joi").extend(require("@joi/date"));
const axios = require("axios");

const jwt = require("jsonwebtoken");
const JWT_KEY = "";

// let token = jwt.sign({
// 	nrp: nrp,
// 	role: sel[0].role
// }, JWT_KEY, {expiresIn: '3600s'});

// -------------------------------------------------------

// -------------------------------------------------------

app.listen(app.get("port"), () => {
	console.log(`Server started at http://localhost:${app.get("port")}`);
});
