const express = require("express");
const app = express();

const account = [
    {"username":"geoc", "password":"123", "api_key":"wkwkwk"}
]

app.use(express.urlencoded({extended: true}));

app.post("/api/register", (req,res) => {
    let {username,password} = req.body;

    const a = {
        "username": username,
        "password": password,
        "api_key": Math.random().toString(36).split(".")[1]
    }
    account.push(a);
    return res.status(200).send({
        "username": a.username,
        "api_key": a.api_key
    })
})

app.get("/api/global", (req,res) => {
    return res.status(200).send("OK");
})

function cekApiKey(req,res,next){
    let user;
    if (!req.headers["x-api-key"]) {
        return res.status(401).send("API key tidak ditemukan!");
    } else {
        user = account.find((a) => {
            return a.api_key == req.headers["x-api-key"];
        })
        if (!user) {
            return res.status(400).send("API key invalid!");
        }
    }
    req.user = user;
    next();
}

app.get("/api/khusus-member", cekApiKey, (req,res) => {
    // const user = account.find((a) => {
    //     return a.api_key == req.headers["x-api-key"];
    // })
    return res.status(200).send(`Hai ${req.user.username}`);
    // return res.status(200).send("OK");
})

app.get("/api/khusus-member2", cekApiKey, (req,res) => {
    return res.status(200).send("OK");
})

app.get("/api/khusus-admin", (req,res) => {
    return res.status(200).send("OK");
})

const port = 3000;
app.listen(port,() => {
    console.log(`listening on port ${port}`);
})