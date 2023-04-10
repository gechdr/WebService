const { timeStamp } = require("console");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

//connect DB
const Sequelize = require("sequelize");
const conn = new Sequelize("wsinf20222m4", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

const { Model, DataTypes, Op } = Sequelize
class Buku extends Model { }
class KategoriBuku extends Model { }
class Pengguna extends Model { }
class Toko extends Model { }
class TokoBuku extends Model { }

//TitleCase
//camelCase
//snake_case

KategoriBuku.init({
    nama: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    sequelize: conn,
    paranoid: true,
    underscored: true,
    tableName: "kategori_buku",
    name: {
        singular: "KategoriBuku",
        plural: "KategoriBuku"
    }
});

Buku.init({
    nama: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    tahunTerbit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize: conn,
    underscored: true,
    paranoid: true,
    tableName: "buku",
    name: {
        singular: "Buku",
        plural: "Buku"
    }
});

Pengguna.init({
    nama: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    gender: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize: conn,
    underscored: true,
    paranoid: true,
    tableName: "pengguna",
    name: {
        singular: "Pengguna",
        plural: "Pengguna"
    }
});

Toko.init({
    nama: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
}, {
    sequelize: conn,
    underscored: true,
    paranoid: true,
    tableName: "toko",
    name: {
        singular: "Toko",
        plural: "Toko"
    }
});

TokoBuku.init({
    stok: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: conn,
    underscored: true,
    paranoid: true,
    tableName: "toko_buku",
    name: {
        singular: "TokoBuku",
        plural: "TokoBuku"
    }
});

// One to One Relationalship
Pengguna.hasOne(Toko);
Toko.belongsTo(Pengguna);
//yang dikasi belongsTo itu tabel yang punya field foreign key

// One to Many Relationalship
KategoriBuku.hasMany(Buku);
Buku.belongsTo(KategoriBuku);

// Many to Many Relationalship
// Cara 1
Toko.belongsToMany(Buku, {through: TokoBuku});
Buku.belongsToMany(Toko, {through: TokoBuku});

// Cara 2
Toko.hasMany(TokoBuku);
TokoBuku.belongsTo(Toko);
Buku.hasMany(TokoBuku);
TokoBuku.belongsTo(Buku);

// Khusus di sequelize ada namanya super many to many.
// Cara bikinnya adalah cara 1 + 2 dipakai bersamaan

const { bukuSeed, kategoriSeed, penggunaSeed, tokoBukuSeed, tokoSeed } = require("./dbseed");
(async () => {
    // await conn.sync({force: true}); // {force: true} => Table di drop dulu trus dicreate ulang

    // let temp = null;

    // // Insert
    // // Cara 1
    // temp = KategoriBuku.build({ nama: "kategori 1" });
    // temp.nama += " wkwkwk";
    // await temp.save();
    // // console.log(temp);
    // // console.log(JSON.stringify(temp,null,2));

    // // Cara 2
    // temp = await KategoriBuku.create({ nama: "kategori 2" });
    // // console.log(JSON.stringify(temp,null,2));

    // // Insert Banyak / Bulk Insert
    // temp = await KategoriBuku.bulkCreate([
    //     { nama: "kategori 3" },
    //     { nama: "kategori 4" }
    // ]);
    // // console.log(JSON.stringify(temp,null,2));

    // await KategoriBuku.bulkCreate(kategoriSeed);

    // // Update
    // // Cara 1
    // temp = await KategoriBuku.findByPk(5);
    // await temp.set({ nama: "ganti nama kategori"});
    // await temp.save();

    // // Cara 2
    // temp = await KategoriBuku.findByPk(6);
    // await temp.update({ nama: "ganti nama kategori lagi"});

    // // Cara 3
    // await KategoriBuku.update(
    //     {
    //         nama: "aaaaaa"
    //     },{
    //         where: {
    //             id: 7
    //         }
    //     }
    // );

    // // Delete
    // // Bikin Dummy
    // let del1 = await KategoriBuku.create({ nama: "del1"});
    // let del2 = await KategoriBuku.create({ nama: "del2"});
    // let del3 = await KategoriBuku.create({ nama: "del3"});

    // // Cara 1
    // await del1.destroy();

    // // Cara 2
    // let idMauDihapus = del2.id;
    // await KategoriBuku.destroy({
    //     where: {
    //         id: idMauDihapus
    //     }
    // })

    // temp = await KategoriBuku.findAll();
    // // console.log(JSON.stringify(temp,null,2));
    // temp = await KategoriBuku.findAll({paranoid: false});
    // // console.log(JSON.stringify(temp,null,2));

    // // Restore Soft Delete
    // await del1.restore();

    // // ByPass Soft Delete
    // await del3.destroy({ force: true });

    // // Utility Function
    // // Max, Min, Sum, Count, Increment
    // await Buku.bulkCreate(bukuSeed);

    // // Min
    // temp = await Buku.min("tahunTerbit");
    // console.log(temp);
    // temp = await Buku.min("tahunTerbit", {
    //     where: {
    //         kategori_buku_id: 2
    //     }
    // });
    // console.log(temp);

    // // Max
    // temp = await Buku.max("tahunTerbit");
    // console.log(temp);

    // // Sum
    // temp = await Buku.sum("tahunTerbit");
    // console.log(temp);

    // // Count
    // temp = await Buku.count();
    // console.log(temp);
    // temp = await Buku.count({
    //     where: {

    //         kategori_buku_id: 2
    //     }
    // });
    // console.log(temp);

    // // Increment
    // temp = await Buku.findByPk(7);
    // await temp.increment({ tahunTerbit: -1000, KategoriBukuId: 2 });
    // await Buku.increment({ tahunTerbit: -100, KategoriBukuId: -1}, {
    //     where: {
    //         id: 7
    //     }
    // });

    // Select
    await conn.sync({ force: true});
    await KategoriBuku.bulkCreate(kategoriSeed);
    await Pengguna.bulkCreate(penggunaSeed);
    await Buku.bulkCreate(bukuSeed);
    await Toko.bulkCreate(tokoSeed);
    await TokoBuku.bulkCreate(tokoBukuSeed);

    // Syntax Select
    // await Pengguna.findAll({ // From user
    //     attributes: [], // Select ...
    //     include: [], // Join
    //     where: {}, // Where
    //     group: [], // Group
    //     having: [], // Having
    //     order: [], // OrderBy
    //     limit: 0, // Limit
    //     offset: 0 // Offset
    // });

    // contoh:
    // 1. select semua data pengguna yang mengandung huruf 'H', namanya dicetak CAPS
    // temp = await Pengguna.findAll({
    //     attributes: [
    //         "id",
    //         [
    //             Sequelize.fn(
    //                 "UPPER",
    //                 Sequelize.col("nama")
    //             ),
    //             "nama_caps"
    //         ],
    //         ["gender", "jenis_kelamin"]
    //     ],
    //     where: {
    //         nama: {
    //             // [Op.like] : '%h%'
    //             [Op.substring] : 'h'
    //         }
    //     }
    // }
    // );
    // console.log(JSON.stringify(temp,null,2));

    // temp = await Pengguna.findAll();
    // const hasil = [];
    // for (let i = 0; i < temp.length; i++) {
    //     const e = temp[i];
    //     if (e.dataValues.nama.includes('h')) {
    //         hasil.push({
    //             "id": e.dataValues.id,
    //             "nama": e.dataValues.nama.toUpperCase(),
    //             "jenis_kelamin": e.dataValues.gender,
    //         })
    //     }
    // }
    // console.log(hasil)

    // 2. Select semua semua data buku diurutkan berdasar nama. Timestampnya tidak perlu ditampilkan
    // Style 1
    // temp = await Buku.findAll({
    //     attributes: {
    //         exclude: [
    //             "createdAt", "updatedAt", "deletedAt"
    //         ]
    //     },
    //     include: [
    //         {
    //             model: KategoriBuku,
    //             attributes: {
    //                 exclude: [
    //                     "createdAt", "updatedAt", "deletedAt"
    //                 ]
    //             }
    //         }
    //     ],
    //     order: [
    //         Sequelize.col("nama"),
    //     ]
    //     // [Sequelize.col("nama"), "DESC"]]
    // });
    // console.log(JSON.stringify(temp,null,2));

    // Style 2
    temp = await Buku.findAll({
        attributes: {
            exclude: [
                "createdAt", "updatedAt", "deletedAt", "KategoriBukuId"
            ],
            include: [
                [Sequelize.col("KategoriBuku.nama"), "kategori"]
            ]
        },
        include: [
            {
                model: KategoriBuku,
                attributes: []
            }
        ],
        order: [
            Sequelize.col("nama"),
        ]
        // [Sequelize.col("nama"), "DESC"]]
    });
    console.log(JSON.stringify(temp,null,2));

    // 3. select semua kategori buku dan list buku semua buku yang kategorinya itu


    // 4. select data semua buku dan jumlah stok semua buku yang ada di semua toko buku



    // 5. select semua buku dan nama kategorinya


    // 6. select semua toko dan list buku yang dijual di toko itu + stok masing2 buku + nama kategori buku
})();