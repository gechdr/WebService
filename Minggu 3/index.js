const express = require("express");
const { get } = require("http");
const sequelize = require("sequelize");
const app = express();

app.use(express.urlencoded({extended: true}));

// npm init -y
// npm install express sequelize mysql2

// Connect DB
const Sequelize = require("sequelize");
const conn = new Sequelize("wsinf20222m3", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false //debugging -true
});
// nama db, username, password, host
// let query = "";
// conn.query(query).then(function(result){});

//Select
// query = "SELECT * FROM toko";
// conn.query(query).then(function(hasil){
//     console.log("SELECT");
//     console.log(hasil);
// }).catch(function(err){
//     console.log("ERROR!");
//     console.log(err);
// });

//Insert
// query = "INSERT INTO kategori_buku (nama, created_at, updated_at) values('mbo', now(), now())";
// conn.query(query).then(function(hasil){
//     console.log("INSERT");
//     // console.log(hasil);

//     // console.log("Result query:")
//     // console.log(hasil[0]);
//     // console.log("Metadata query:")
//     // console.log(hasil[1]);

//     // fitur javascript
//     const [result,metadata] = hasil;
//     // index ke0 masuk result, index ke1 masuk metadata
//     console.log("Result query:")
//     console.log(hasil[0]);
//     console.log("Metadata query:")
//     console.log(hasil[1]);
// });

// console.log("1");
// conn.query("select * from toko").then(function (hasil) {
//     console.log("2");
//     conn.query("select * from toko").then(function (hasil) {
//         console.log("3");
//         conn.query("select * from toko").then(function (hasil) {
//             console.log("4");
//         });
//         console.log("5");
//     });
//     console.log("6");
// });
// console.log("7");

// Await ASync
// async function wkwkwk(){
//     query = "SELECT * FROM toko";
//     try {
//         let [result,metadata] = await conn.query(query);
//         [result,metadata] = await conn.query(query);
//         [result,metadata] = await conn.query(query);
//         console.log(result);
//     } catch (err) {
//         console.log("ERROR!");
//         console.log(err);
//     }
// }

// wkwkwk();

// app.post("/api/pengguna", async function(req, res){
//     try {
//         const nama = req.body.nama;
//         const gender = parseInt(req.body.gender);
//         // let [result, metadata] = await conn.query(`insert into pengguna (nama, gender, created_at, updated_at) values ('${nama}', ${gender}, now(), now())`);
    
//         // replacement 
//         // style 1
//         let [result, metadata] = await conn.query(`insert into pengguna (nama, gender, created_at, updated_at) values (?, ?, now(), now())`, {replacements: [nama, gender]});
        
//         // style 2
//         // let [result, metadata] = await conn.query(`insert into pengguna (nama, gender, created_at, updated_at) values (:nama, :gender, now(), now())`, {replacements: {
//         //     nama: nama,
//         //     gender: gender
//         // }});
        
//         const id = result;
//         [result, metadata] = await conn.query(`select * from pengguna where id = ${id}`);
//         return res.status(201).send(result[0]);
//     } catch (err) {
//         console.log(err);
//         console.log("ERROR!");
//     }
// });

// const Model = Sequelize.Model;
// const DataTypes = Sequelize.DataTypes;
const {Model, DataTypes} = Sequelize; // syntax sakti
class Pengguna extends Model {}
Pengguna.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nama:{
        type:DataTypes.STRING(255),
        allowNull: false
    },
    gender:{
        type:DataTypes.BOOLEAN,
        allowNull: false
    },
},{
    sequelize:conn,
    // Setting untuk table bisa ditaruk sini
    tableName: "Pengguna",
    paranoid: true, // istilah antar programmer -> Soft Delete
    underscored: true, // untuk penggunaan underscore untuk penamaan
    // timestamps: false
});

app.get("/init", async function(req,res){
    // await Pengguna.sync({ force: true});
    await conn.sync({ force: true});
    return res.status(200).send("OK");
});

app.post("/api/pengguna", async function(req,res){
    try {
        const nama = req.body.nama;
        const gender = parseInt(req.body.gender);
        
        const penggunaBaru = await Pengguna.create({ nama: nama, gender: gender});
        
        return res.status(201).send(penggunaBaru);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


app.get("/api/pengguna/:id", async function(req,res){
    const id = parseInt(req.params.id);
    const p = await Pengguna.findByPk(id);
    if (p) {
        return res.status(200).send(p);
    } else {
        return res.status(404).send({"msg" : "Pengguna Not Found!"})
    }
});

const port = 3000;
app.listen(port,function() {
    console.log(`listening on port ${port}`);
});