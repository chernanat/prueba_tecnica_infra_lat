const { Router } = require("express");
const { generarPalabras } = require("../controller/game.controller");

const router = Router();

router.get("/palabras", generarPalabras);

module.exports = router;
