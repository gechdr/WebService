const express = require("express");
const KategoriBukuController = require("../controller/KategoriBukuController");
const router = express.Router();

router.get("/", KategoriBukuController.getAllKategori);
router.get("/:id", KategoriBukuController.getKategoriById);

module.exports = router;