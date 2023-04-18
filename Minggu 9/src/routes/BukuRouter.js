const express = require("express");
const BukuController = require("../controller/BukuController");
const router = express.Router();

router.get("/", BukuController.getAllBuku);
router.get("/:id", BukuController.getBukuById);

module.exports = router;