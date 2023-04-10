const express = require("express");
const app = express();

//ini supaya bisa baca isinya x-www-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post("/register", function(req,res){
    return res.status(200).send(`username: ${req.body.username}, password: ${req.body.password}`);
});

app.get("/", function(req,res){
    return res.status(200).send("Hello World!");
});

app.get("/test", function(req,res){
    return res.status(200).send("<marquee><h1>ini halaman tes :)</h1></marquee>");
});

app.get("/greet/:nama/:umur", function(req,res){
    return res.status(200).send(`Halo ${req.params.nama}, anda berumur ${req.params.umur}`);
});

// http://localhost:3000/search?keyword=wkwkwk&order=harga
app.get("/search", function(req,res){
    return res.status(200).send(`search ${req.query.keyword}, order by ${req.query.order}`);
});

const port = 3000;
app.listen(port, function(){
    console.log(`listening on port ${port}`);
});