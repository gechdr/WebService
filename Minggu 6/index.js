//npm install express joi
//https://joi.dev/api/?v=17.8.3
const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.urlencoded({ extended: true }));

app.post("/validasi-basic", (req,res) => {
    const validator = Joi.string().alphanum().max(10).min(5);
    const validationResult = validator.validate(req.body.username);

    if (validationResult.error) {
        console.log(validationResult.error);
        return res.status(400).send(validationResult.error.message);
    }
    else {
        return res.status(200).send(validationResult.value);
    }
    
    return res.status(200).send("OK");
});

app.post("/validasi-custom-message", function(req, res){
    const validator = Joi.string().alphanum()
                        .max(10).min(5).required()
                        .label("username")
                        .messages({
                            "any.required":"{{#label}} harus diisi!",
                            "string.empty":"{{#label}} tidak boleh string kosong!",
                            "string.alphanum":"{{#label}} tidak boleh mengandung karakter aneh!",
                            "string.max":"{{#label}} tidak boleh lebih panjang dari 10 char!",
                            "string.min":"{{#label}} tidak boleh lebih pendek dari 5 char!",
                        });
    const validationResult = validator.validate(req.body.username);
    if(validationResult.error){
        console.log(validationResult.error);
        return res.status(400).send(validationResult.error.message);
    }
    else{
        return res.status(200).send(validationResult.value);
    }
});

function validasiNoHp(value,helper){
    if (isNaN(value)) {
        return helper.error("any.invalid");
    }
    if (value[0] !== "0" || value[1] !== "8") {
        throw new Error("No hp harus diawali 08!");
    }

    const newValue = "(+62)" + value.substring(1);

    return newValue;
}

app.post("/validasi-object", function(req, res){
    const validator = Joi.object({
        username: Joi.string().alphanum()
        .max(10).min(5).required().uppercase(),
        usia: Joi.number().min(18).max(100),
        noHp: Joi.string().custom(validasiNoHp, "ini adalah pengecekan noHp")
    });
    const validationResult = validator.validate(req.body);
    if(validationResult.error){
        console.log(validationResult.error);
        return res.status(400).send(validationResult.error.message);
    }
    else{
        return res.status(200).send(validationResult.value);
    }
});

app.post("/validasi-latihan", function (req, res) {
    const userSchema = Joi.object({
        pengguna_username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label("Nama Pengguna")
            .messages({
                "any.required": "{{#label}} harus diisi yaa",
                "string.alphanum":
                    "{{#label}} harus dalam bentuk alphanumeric saja",
                "string.min": "{{#label}} harus lebih dari 3 karakter",
                "string.max": "{{#label}} harus kurang dari 30 karakter",
            }),

        pengguna_email: Joi.string()
            .email({ tlds: { allow: ["edu", "com"] } })
            .required()
            .label("Email Pengguna")
            .messages({
                "string.required": "{{#label}} harus diisi yaa",
                "string.email": "{{#label}} hanya boleh diisi .edu atau .com",
            }),

        pengguna_password: Joi.string()
            .pattern(
                new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                )
            )
            .required()
            .label("Password Pengguna")
            .messages({
                "string.pattern.base":
                    "{{#label}} harus diisi dengan minimal 1 huruf kecil, 1 huruf besar, 1 angka dan 1 simbol, dengan panjang minimal 8 karakter",
            }),

        pengguna_konfirmasi_password: Joi.any()
            .equal(Joi.ref("pengguna_password"))
            .label("Konfirmasi Password")
            .messages({ "any.only": "{{#label}} harus sama dengan password" }),

        pengguna_birthday: Joi.date()
            .greater("1970-01-01")
            .less("now")
            .label("Birthday Pengguna")
            .messages({
                "date.greater": "{{#label}} harus lebih dari 1 Januari 1970",
                "date.less": "{{#label}} harus kurang dari now",
            }),

        pengguna_umur: Joi.number()
            .integer()
            .default(17)
            .min(17)
            .max(100)
            .label("Umur Pengguna")
            .messages({
                "number.min": "{{#label}} harus dalam bentuk angka antara 17-100",
                "number.max": "{{#label}} harus dalam bentuk angka antara 17-100",
            }),

        app_name: Joi.any().label("Application Name"),
        app_token: Joi.any().label("Application Token"),
    })
        .with("app_name", "app_token")
        .messages({
            "object.with":
                "{{#mainWithLabel}} harus dikirim bersama dengan {{#peerWithLabel}}",
        });
    // latihan: coba cari kegunaan masing2 fungsi validasi di dokumentasi
    const validationResult = validator.validate(req.body);
    if (validationResult.error) {
        console.log(validationResult.error);
        return res.status(400).send(validationResult.error);
    }
    else {
        return res.status(200).send(validationResult.value);
    }
});

const port = 3000;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
