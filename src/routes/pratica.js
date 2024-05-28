var express = require("express");
var router = express.Router();

var praticaController = require("../controllers/praticaController");

router.post("/registrar", function (req, res) {
    praticaController.registrar(req, res);
});

module.exports = router;