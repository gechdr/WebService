const express = require("express");
const router = express.Router();
const BukuRouter = require("./BukuRouter");
const KategoriBukuRouter = require("./KategoriBukuRouter");

router.use("/buku", BukuRouter);
router.use("/kategori", KategoriBukuRouter);

module.exports = router;