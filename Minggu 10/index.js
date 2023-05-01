//code nya copy aja langsung dari drive I
//jalanin npm install
//ini code CRUD mahasiswa, datanya disimpan di array, cuma saya belom cek jalan bener atau enggak
//mintol bantu cek dong, kalau misal ada yg salah bisa kasi tau...

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const mahasiswa = [
  {
    "nrp": "123",
    "nama": "aaa"
  },
  {
    "nrp": "456",
    "nama": "hapus"
  }
];

app.get("/api/mahasiswa", function (req, res) {
  const q = req.query.q || "";
  const ret = mahasiswa.filter(function (m) {
    return m.nama.includes(q);
  });
  return res.status(200).send(ret);
});

app.get("/api/mahasiswa/:nrp", function (req, res) {
  const nrp = req.params.nrp;
  const ret = mahasiswa.findIndex(function (m) {
    return m.nrp == nrp;
  });
  if (ret == -1) {
    return res.status(404).send({ msg: "not found" });
  } else {
    return res.status(200).send(mahasiswa[ret]);
  }
});

app.post("/api/mahasiswa/", function (req, res) {
  const m = {
    nrp: req.body.nrp,
    nama: req.body.nama,
  };
  mahasiswa.push(m);
  return res.status(201).send(m);
});

app.delete("/api/mahasiswa/:nrp", function (req, res) {
  const nrp = req.params.nrp;
  let ret = mahasiswa.findIndex(function (m) {
    return m.nrp == nrp;
  });
  if (ret == -1) {
    return res.status(404).send({ msg: "not found" });
  } else {
    ret = mahasiswa.splice(ret, 1)[0];
    return res.status(200).send(ret);
  }
});


const port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
