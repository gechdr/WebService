// https://api.thecatapi.com/v1/images/search
//npm install axios
const express = require("express");
const app = express();
const axios = require("axios").default;

app.use(express.urlencoded({ extended: true }));

app.get("/tes", async function (req, res) {
    try {
        // const hasil = (await axios.get("https://api.thecatapi.com/v1/images/search")).data;
        // console.log(hasil);
        const payload = {
            "content": "https://tenor.com/view/hammaya-relaxed-relax-mr-bean-gif-gif-18455676",
            "username": "Bukan Bot",
            "avatar_url": ""
        };
        const hasil = await axios.post("https://discord.com/api/webhooks/1083556872067493969/yjhBAjn1GUzglKksfV7o9ZB_Kka3I-S4cg4xbCZq1khTNh3zn9-L167-utpfgKyOWdek", {
            payload_json: JSON.stringify(payload)
        });
        console.log(hasil);
        return res.status(200).send(hasil.data[0].url)
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
    return res.status(200).send("OK");
});

const port = 3000;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});