var express = require("express");
var router = express.Router();

var praticaController = require("../controllers/praticaController");

router.post("/registrar", function (req, res) {
    praticaController.registrar(req, res);
});

router.post("/capturar", function (req, res) {
    praticaController.capturar(req, res);
});

router.post("/totalPraticas", function (req, res) {
    praticaController.totalPraticas(req, res);
});


module.exports = router;