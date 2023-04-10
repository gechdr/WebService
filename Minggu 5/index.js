//npm init -y
//npm install express sequelize mysql2

const express = require("express");
const app = express();

const Sequelize = require("sequelize");
const sequelize = new Sequelize("wsinf20222m5", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const { Model, DataTypes, Op } = Sequelize
class Buku extends Model { }
class KategoriBuku extends Model { }

KategoriBuku.init({
    id:{
        type: DataTypes.STRING(5),
        primaryKey: true
    },
    nama:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    rating:{
        type: DataTypes.DECIMAL(2,1),
        allowNull: false
    }
},{
    sequelize,
    tableName: "kategori_buku",
    timestamps: false,
    underscored: true
});

Buku.init({
    kode:{
        type: DataTypes.STRING(5),
        primaryKey: true
    },
    nama:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    tahunTerbit:{
        type: DataTypes.INTEGER(11),
        allowNull: false
    }
},{
    sequelize,
    tableName: "buku",
    underscored: true,
    timestamps: false,
    name:{
        singular: "Buku",
        plural: "BukuBuku"
    }
});

// Relationalship
KategoriBuku.hasMany(Buku, {foreignKey: "idKategori"});
Buku.belongsTo(KategoriBuku, {foreignKey: "idKategori"});

(async ()=>{
    await KategoriBuku.destroy({
        where: {
            id: {
                [Op.not]: null
            }
        }
    });
    await Buku.destroy({
        where: {
            kode: {
                [Op.not]: null
            }
        }
    });
    await KategoriBuku.create({
        id: "KB001",
        nama: "Horror",
        rating: 3.0
    });
    await Buku.create({
        kode: "B0001",
        nama: "Matematika",
        tahunTerbit: 1900,
        idKategori: "KB001"
    });

    // let hasil = await KategoriBuku.findAll();
    // // console.log(hasil);
    // // console.log(JSON.stringify(hasil));
    // console.log(JSON.stringify(hasil,null,2));

    // hasil = await Buku.findAll();
    // // console.log(hasil);
    // // console.log(JSON.stringify(hasil));
    // console.log(JSON.stringify(hasil,null,2));
    
    // let hasil = await Buku.findByPk("B0001");
    // console.log(JSON.stringify(hasil,null,2));
    
    // let kb = await hasil.getKategoriBuku();
    // console.log(JSON.stringify(kb,null,2));
    
    // kb = await KategoriBuku.create({
    //     id: "KB002",
    //     nama: "Comedy",
    //     rating: 5.0
    // });
    // await hasil.setKategoriBuku(kb);
    // console.log(JSON.stringify(hasil,null,2));
    
    let kb = await KategoriBuku.findByPk("KB001");
    console.log(JSON.stringify(kb,null,2));
    let buku = await kb.getBukuBuku();
    // let buku = await kb.getBukuBuku({
    //     where:{
    //         kode : "B0001"
    //     }
    // });
    console.log(JSON.stringify(buku,null,2));

})();