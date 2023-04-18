const db = require("../models");

module.exports = {
    getAllBuku : async (req,res) => {
        return res.status(200).send(await db.Buku.findAll());
    },

    getBukuById : async (req,res) => {
        const b = await db.Buku.findByPk(parseInt(req.params.id));
        
        if (b) {
            return res.status(200).send(b);
        } else {
            return res.status(404).send({
                msg: "Not Found!"
            })
        }
    }
}