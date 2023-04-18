// npm init -y
// npm install express sequelize mysql2
// npm install sequelize-cli --save-dev
// npx sequelize-cli init
// npx sequelize-cli db:create

const express = require("express");
const app = express();
const Router = require("./src/routes/Router");

app.set("port", 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", Router);

const Sequelize = require("sequelize");
const { Model, DataTypes, Op } = require("sequelize");
const conn = new Sequelize("", "root", "", {
	host: "localhost",
	dialect: "mysql",
	logging: false,
});

// -------------------------------------------------------



// -------------------------------------------------------

app.listen(app.get("port"), () => {
	console.log(`Server started at http://localhost:${app.get("port")}`);
});
