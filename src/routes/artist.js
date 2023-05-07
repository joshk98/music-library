const express = require("express");
const artistController = require("../controllers/artist");

const router = express.Router();

router.post("/artists", artistController.createArtist);

module.exports = router;