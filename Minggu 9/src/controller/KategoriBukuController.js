const kategoriBuku = [
    {
        "id": 1,
        "nama": "Comedy"
    }
];

module.exports = {
    getAllKategori : (req,res) => {
        return res.status(200).send(kategoriBuku);
    },

    getKategoriById : (req,res) => {
        const k = kategoriBuku.find((e) => {
            return e.id == req.params.id
        });
    
        if (k) {
            return res.status(200).send(k);
        } else {
            return res.status(404).send({
                msg: "Not Found!"
            })
        }
    }
}