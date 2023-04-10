const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const axios = require("axios");

//https://rapidapi.com/SAdrian/api/moviesdatabase

// BUAT DATABASE
// const { QueryTypes } = require('sequelize')
// const Sequelize = require("sequelize");
// const conn = new Sequelize("t2_6947", "root", "", {
//     host: "localhost",
//     dialect: "mysql",
//     logging: false
//     // logging: true
// });
// =========================================================
// SELECT
// let temp = await conn.query(
//     `select * from mahasiswa where nrp = ?`,
//     {
//         type: QueryTypes.SELECT,
//         replacements: [nrp]
//     }
// )
// =========================================================
// INSERT CARA 1
// let [result, metadata] = await conn.query(
//     `insert into proposal (id_ta, judul_ta, id_mhs, id_pembimbing, id_co_pembimbing, periode, status, comment, del) values(:id_ta, :judul_ta, :id_mhs, :id_pembimbing, :id_co_pembimbing, :periode, :status, :comment, :del)`,
//     {
//         replacements: {
//             id_ta: id_ta,
//             judul_ta: judul_ta,
//             id_mhs: id_mhs, 
//             id_pembimbing: id_pembimbing,
//             id_co_pembimbing: id_co_pembimbing,
//             status: "PENDING", 
//             periode: periode,
//             comment: "",
//             del: 0
//         }
//     }
// )
// =========================================================
// INSERT CARA 2
// let [result, metadata] = await conn.query(`insert into pengguna (nama, gender, created_at, updated_at) values ('${nama}', ${gender}, now(), now())`);

// UPDATE
// let [result, metadata] = await conn.query(
//     `update proposal set status = :status, comment = :comment where id_ta = :id_proposal`,
//     {
//         replacements:{
//             status: status,
//             comment: komentar,
//             id_proposal: id_proposal
//         }
//     }
// )
// =========================================================
// DELETE
// await conn.query(
//     `delete from customer where id_customer = ?`,
//     {
//         replacements: [id_customer]
//     }
// )
// =========================================================

app.get("/api/title", async function (req, res) {
    // CARA 1
    // const hasil = await axios.get('https://moviesdatabase.p.rapidapi.com/titles', {
    //     headers: {
    //         'X-RapidAPI-Key': '38d0db4a95msh7e3c722a8f05d9bp1ffaa4jsn8d25fdc7988f',
    //         'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //     }
    // });
    // res.send(hasil.data.results)

    // CARA 2
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids',
        params: {idsList: 'tt0001702,tt0001856,tt0001856'},
        headers: {
            'X-RapidAPI-Key': '021a0b52c5mshba19cdd208f92aap1f9bf8jsn3be4d39a16da',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };  

    axios.request(options).then(function (response) {
        return res.status(201).send({
            "title": response.data
        })
    }).catch(function (error) {
        console.error(error);
    });
});

app.get("/api/upcomingTitle", async function (req, res) {
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
        headers: {
          'X-RapidAPI-Key': '021a0b52c5mshba19cdd208f92aap1f9bf8jsn3be4d39a16da',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
      
    let temp = [];

    axios.request(options).then(function (response) {
        
        for (let i = 0; i < response.data.results.length; i++) {
            const data = response.data.results[i];
            let simpanIdJudul = [{
                id: data.id,
                judul: data.titleText.text
            }]
            temp.push(simpanIdJudul);
        }
        return res.status(201).send({
            "upcoming title": page
        })
        
        // return res.status(201).send({
        //     "upcoming title": response.data
        // })
    }).catch(function (error) {
        console.error(error);
    });
});

app.get("/api/searchTitle/:title", async function(req,res){
    let {title} = req.params;
    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`,
        params: {exact: 'true'},
        headers: {
          'X-RapidAPI-Key': '2802622d9bmshb3002e85d485161p111378jsn9a549e029d60',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        let temp = response.data
        return res.status(201).send({
            "hasil search": temp
        })
    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(3000, () => console.log('Listening on port 3000'));

// BUAT ID
// let id_dosen = "DOS" + (parseInt(jml.length) + 1).toString().padStart(3, "0");

// function cekTanggal_lahir(tanggal_lahir)
// {
//   if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(tanggal_lahir))
//     return false;

//   var temp_tanggal_lahir = tanggal_lahir.split("/");
//   if (temp_tanggal_lahir.length == 0) {
//     return false;
//   }

//   var hari = parseInt(temp_tanggal_lahir[0], 10);
//   var bulan = parseInt(temp_tanggal_lahir[1], 10);
//   var tahun = parseInt(temp_tanggal_lahir[2], 10);

//   if(tahun < 1000 || tahun > 3000 || bulan <= 0 || bulan > 12)
//       return false;

//   var bulann = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

//   if(tahun % 400 == 0 || (tahun % 100 != 0 && tahun % 4 == 0))
//   bulann[1] = 29;

//   return hari > 0 && hari <= bulann[bulan - 1];
// };