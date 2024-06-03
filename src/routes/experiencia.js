var express = require("express");
var router = express.Router();

var experienciaController = require("../controllers/experienciaController");

router.put("/evoluirNivel", function (req, res) {
    experienciaController.evoluirNivel(req, res);
});

module.exports = router;