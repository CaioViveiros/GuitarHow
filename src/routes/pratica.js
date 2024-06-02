var express = require("express");
var router = express.Router();

var praticaController = require("../controllers/praticaController");

router.post("/registrar", function (req, res) {
    praticaController.registrar(req, res);
});

router.post("/capturarUltimasPraticas", function (req, res) {
    praticaController.capturarUltimasPraticas(req, res);
});

router.post("/totalPraticas", function (req, res) {
    praticaController.totalPraticas(req, res);
});

router.post("/capturarTodasPraticas", function (req, res) {
    praticaController.capturarTodasPraticas(req, res);
});

module.exports = router;