const express = require("express");
const router = express.Router();

// REST maturity level 2
// memanfaatkan http verb, query + url param, status code

// HTTP VERB:   
// GET      -> get / meminta data
// POST     -> insert / menambah data
// PUT      -> edit / mengubah data
// DELETE   -> delete / menghapus data

// Param:
// query param -> pake simbol "?", biasanya digunakan untuk search / filter
// url param - > pakai simbol "/", biasanya untuk menggambarkan hierarki

// Status Code: 
// 200 OK -> sukses
// 201 CREATED -> sukses dan berhasil memuat resource baru
// 204 NO CONTENT -> sukses tp tidak mengembalikan apa2. Kadang2 dipakai kalau sukses delete (karena kan tidak menghasilkan apa2)
// 400 BAD REQUEST -> ada kesalahan dari client, misalnya format data yang dikirim salah, data yang dikirim kurang
// 401 UNAUTHORIZED -> client melakukan sesuatu yang perlu login tp client nya belum login
// 403 FORBIDDEN -> hak akses kurang. Misal member biasa mau mengakses fungsionalitas untuk admin
// 404 NOT FOUND -> resource yang dicari tidak ditemukan
// 500 INTERNAL SERVER ERROR -> kalau error dari server, misalnya DB mati lalu server berusaha connect DB kemudian script crash.

const mahasiswa = [{
    nrp: 123,
    nama: "wkwkwk"
},{
    nrp: 132,
    nama: "kekw"
},{
    nrp: 213,
    nama: "lul"
},{
    nrp: 231,
    nama: "lol"
},{
    nrp: 312,
    nama: ":D"
},{
    nrp: 321,
    nama: "XD"
}];

// endpoint untuk list data mahasiswa, bisa disearch
router.get("/", function(req,res){
    if (req.query.keyword) {
        const keyword = req.query.keyword;
        const hasilPencarian = [];
        for (let i = 0; i < mahasiswa.length; i++) {
            if (mahasiswa[i].nama.includes(keyword)) {
                hasilPencarian.push(mahasiswa[i]);
            }
        }
        return res.status(200).send(hasilPencarian);
    } else {
        return res.status(200).send(mahasiswa);
    }
});

// endpoint untuk melihat/meminta data 1 mahasiswa
// menerima parameter berupa nrp mahasiswa yang dicari
router.get("/:nrp", function(req,res){
    const nrp = req.params.nrp;
    for (let i = 0; i < mahasiswa.length; i++) {
        if (mahasiswa[i].nrp == nrp) {
            // ketemu
            return res.status(200).send(mahasiswa[i]);
        }
    }
    // nggak ketemu
    return res.status(404).send({"msg":"mahasiswa tidak ditemukan!"});
});

// endpoint untuk menambah data mahasiswa baru
router.post("/", function(req,res){
    if (!req.body.nrp) {
        return res.status(400).send({"msg" : "NRP harus ada!"});
    }
    if (!req.body.nama) {
        return res.status(400).send({"msg" : "Nama harus ada!"});
    }
    const m = {
        nrp: parseInt(req.body.nrp),
        nama: req.body.nama
    }
    mahasiswa.push(m);
    return res.status(201).send(m);
});

// endpoint untuk mengupdate data mahasiswa
router.put("/:nrp", function(req,res){
    if (!req.body.nama) {
        return res.status(400).send({"msg" : "Nama harus ada!"});
    }
    const nrp = req.params.nrp;
    for (let i = 0; i < mahasiswa.length; i++) {
        if (mahasiswa[i].nrp == nrp) {
            // ketemu
            mahasiswa[i].nama = req.body.nama;
            return res.status(200).send(mahasiswa[i]);
        }
    }
    // nggak ketemu
    return res.status(404).send({"msg":"mahasiswa tidak ditemukan!"});
});

// endpoint untuk menghapus data mahasiswa
router.delete("/:nrp", function(req,res){
    const nrp = req.params.nrp;
    for (let i = 0; i < mahasiswa.length; i++) {
        if (mahasiswa[i].nrp == nrp) {
            // ketemu
            const m = mahasiswa.splice(i,1)[0];
            return res.status(200).send(m);
        }
    }
    // nggak ketemu
    return res.status(404).send({"msg":"mahasiswa tidak ditemukan!"});
});

// REST maturiry level 3\
// + HATEOAS

module.exports = router;

