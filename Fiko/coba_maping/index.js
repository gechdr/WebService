const express = require("express");
const app = express();
app.set("port", 3000);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Sequelize = require("sequelize");
const conn = new Sequelize("belajar_maping", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: true
});

const { Model, DataTypes, Op } = Sequelize
class Mahasiswa extends Model{ }
class Pelajaran extends Model{ }
class Lulus extends Model{ }

Mahasiswa.init({
    id_mhs:{
        type: DataTypes.STRING(64),
        primaryKey: true
    },
    nama_mhs:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    email:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    sequelize: conn,
    tableName: "mahasiswa",
    name:{
        singular: "Mahasiswa",
        plural: "Mahasiswa"
    },
    timestamps: false
});

Pelajaran.init({
    id_pel:{
        type: DataTypes.STRING(64),
        primaryKey: true
    },
    nama_pel:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    sequelize: conn,
    underscored: true,
    tableName: "pelajaran",
    name:{
        singular: "Pelajaran",
        plural: "Pelajaran"
    },
    timestamps: false
});

Lulus.init({
    id_lulus:{
        type: DataTypes.STRING(64),
        primaryKey: true
    },
    id_mhs:{
        type: DataTypes.STRING(64),
        allowNull: false
    },
    id_pel:{
        type: DataTypes.STRING(64),
        allowNull: false
    }
},{
    sequelize: conn,
    underscored: true,
    tableName: "lulus",
    name:{
        singular: "Lulus",
        plural: "Lulus"
    },
    timestamps: false
});

// foreign key id_mhs dan id_pel di Table Lulus dari table Mahasiswa dan table Pelajaran
Mahasiswa.hasMany(Lulus, {foreignKey: "id_mhs"});
Lulus.belongsTo(Mahasiswa, {foreignKey:"id_mhs"});

Pelajaran.hasMany(Lulus, {foreignKey:"id_pel"});
Lulus.belongsTo(Pelajaran, {foreignKey:"id_pel"});

(async () => {
    // await conn.sync({force: true});
    app.post("/api/insert_mhs", async function(req, res){
        let {id_mhs, nama_mhs, email} = req.body;
        try {
            mhs = await Mahasiswa.create({
                id_mhs:id_mhs,
                nama_mhs: nama_mhs,
                email: email
            });
        } catch (error) {
            return res.status(400).send({
              message: "Insert Failed",
              error,
            });
        }

        return res.status(201).send({
            message: "Insert Success",
            mhs,
        });
    })

    app.post("/api/insert_pel", async function(req, res){
        let {id_pel, nama_pel} = req.body;
        try {
            pel = await Pelajaran.create({
                id_pel:id_pel,
                nama_pel: nama_pel,
            });
        } catch (error) {
            return res.status(400).send({
              message: "Insert Failed",
              error,
            });
        }

        return res.status(201).send({
            message: "Insert Success",
            pel,
        });
    })

    app.post("/api/insert_lulus", async function(req, res){
        let {id_lulus, id_mhs, id_pel} = req.body;
        try {
            lulus = await Lulus.create({
                id_lulus: id_lulus,
                id_mhs: id_mhs,
                id_pel:id_pel,
            });
        } catch (error) {
            return res.status(400).send({
              message: "Insert Failed",
              error,
            });
        }

        return res.status(201).send({
            message: "Insert Success",
            lulus,
        });
    })

    app.put("/api/update_mhs", async function(req, res){
        let {id_mhs, nama_mhs, email} = req.body;

        try{
            const cekUser = await Mahasiswa.findOne({
                where:{
                    id_mhs: id_mhs
                }
            })
    
            // return res.status(201).send({
            //     cekUser,
            // });
    
            if(!cekUser){
                throw "User tidak ditemukan";
            }
    
            await Mahasiswa.update(
                {
                    nama_mhs: nama_mhs,
                    email: email
                },
                {where:{
                    id_mhs: id_mhs
                }
            })
        }catch(error){
            return res.status(400).send({
                message: "Insert Failed",
                error,
            });
        }
        return res.status(200).send({
            message: "Update Success",
        });
    })

    app.delete("/api/delete_lulus", async function(req, res){
        let {id_lulus} = req.body;
        try{
            await Lulus.destroy(
                {
                    where: {
                        id_lulus : id_lulus
                    }
                }
            )
        }catch(error){
            return res.status(400).send({
                message: "delete Failed",
                error,
            });
        }

        return res.status(200).send({
            message: "Delete Success"
        });
    })

    app.delete("/api/delete_mhs", async function(req, res){
        let {id_mhs} = req.body;
        try{
            // await Lulus.destroy(
            //     {
            //         where: {
            //             id_lulus : id_lulus
            //         }
            //     }
            // )
            await Mahasiswa.destroy(
                {
                    where: {
                        id_mhs : id_mhs
                    }
                }
            )
        }catch(error){
            return res.status(400).send({
                message: "delete Failed",
                error,
            });
        }

        return res.status(200).send({
            message: "Delete Success"
        });
    })

    app.get("/api/mhs", async function(req, res){
        mhs = await Mahasiswa.findAll({
            attributes:["id_mhs", "nama_mhs", "email"]
        })

        return res.status(200).send({
            mhs
        });
    });
    
    app.get("/api/lulus/:tempId?", async function(req, res){
        let {tempId} = req.params;

        if(!tempId){
            lulus = await Lulus.findAll({
                attributes:{
                    exclude:["id_mhs"],
                    // include:[
                    //     [Sequelize.col("Mahasiswa.nama_mhs"), "mahasiswa"]
                    // ],
                    // include:[
                    //     [Sequelize.col("Pelajaran.nama_pel"), "pelajaran"]
                    // ],
                },
                // untuk menghubungkan dengan table lain
                include:{
                    model: Mahasiswa,
                    attributes:{
                        // exclude:["id_pel, nama_pel"]
                    }
                },
                // include:{
                //     model: Pelajaran,
                //     attributes:{
                //         exclude:["id_pel, nama_pel"]
                //     }
                // },
                // group:[Sequelize.col("id")]
            })
        }else{
            lulus = await Lulus.findByPk(tempId)
        }
        

        return res.status(200).send({
            lulus
        });
    });
})();

// // utility function
    // // max, min, sum, count, increment
    // await Buku.bulkCreate(bukuSeed);

    // temp = await Buku.min("tahunTerbit");
    // console.log(temp);
    
    // temp = await Buku.min("tahunTerbit", {
    //     where:{
    //         kategori_buku_id: 2
    //     }
    // });
    // console.log(temp);
    
    // temp = await Buku.max("tahunTerbit");
    // console.log(temp);
    
    // temp = await Buku.sum("tahunTerbit");
    // console.log(temp);

    // temp = await Buku.count();
    // console.log(temp);

    // temp = await Buku.count({
    //     where:{
    //         kategori_buku_id: 2
    //     }
    // });
    // console.log(temp);

    // temp = await Buku.findByPk(7);
    // await temp.increment({tahunTerbit:-1000, KategoriBukuId:2});
    // await Buku.increment({tahunTerbit:-100, KategoriBukuId:-1}, {
    //     where: {
    //         id:7
    //     }
    // });



    // contoh include di dalam include
    //     include: [{
    //         model: Buku,
    //         attributes: [
    //             "id",
    //             "nama",
    //             "tahunTerbit",
    //         ],
    //         include: [{
    //             model: KategoriBuku
    //         }]
    //     }]


    // Contoh pake looping
    // temp = await Pengguna.findAll();
    // const hasil = [];
    // for (let i = 0; i < temp.length; i++) {
    //     const e = temp[i];
    //     if(e.dataValues.nama.includes('h')){
    //         hasil.push({
    //             "id": e.dataValues.id,
    //             "nama": e.dataValues.nama.toUpperCase(),
    //             "jenis_kelamin": e.dataValues.gender,
    //         })
    //     }
    // }
    // console.log(JSON.stringify(hasil,null,2));

app.listen(app.get("port"), () => {
    console.log(`Server started at http://localhost:${app.get("port")}`);
});

module.exports = app;