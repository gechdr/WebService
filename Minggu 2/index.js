const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));

// REST
// REpresentational State Transfer

// REST maturity level 0
// 1 endpoint untuk melakukan segalanya
app.get("/webservice", function(req,res){
    const  cmd = req.query.cmd;
    if (cmd == "read") {
        return res.send(mahasiswa);
    } else if (cmd == "insert") {
        mahasiswa.push({
            nrp: req.query.nrp,
            nama: req.query.nama
        });
        return res.send("sukses insert!");
    }
    return res.send("perintah tidak ditemukan!");
});

// REST maturity level 1
// 1 fungsionalitas 1 endpoint
app.post("/getall-mahasiswa",function(req,res){
    res.send(mahasiswa);
});
app.post("/detail-mahasiswa",function(req,res){

});
app.post("/insert-mahasiswa",function(req,res){
    mahasiswa.push({
        nrp: req.body.nrp,
        nama: req.body.nama
    });
    return res.send("sukses insert!");
});
app.post("/update-mahasiswa",function(req,res){

});
app.post("/delete-mahasiswa",function(req,res){

});

const mahasiswaRouter = require("./routes/mahasiswa");
app.use("/api/mahasiswa",mahasiswaRouter);

const port = 3000;
app.listen(port,function() {
    console.log(`listening on port ${port}`);
});