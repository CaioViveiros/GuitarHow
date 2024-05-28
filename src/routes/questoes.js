var express = require("express");
var router = express.Router();

var questaoController = require("../controllers/questaoController");

router.post("/buscarQuestao", function (req, res) {
    questaoController.buscarQuestao(req, res);
});

router.post("/buscarRespostas", function (req, res) {
    questaoController.buscarRespostas(req, res);
});

module.exports = router;