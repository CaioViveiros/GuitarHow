var experienciaModel = require("../models/experienciaModel");

function evoluirNivel(req, res) {
    var novaExperiencia = req.body.nivelExperienciaServer;
    var idUsuario = req.body.idUsuarioServer;

    experienciaModel.evoluirNivel(novaExperiencia, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
}

module.exports = {
    evoluirNivel
}