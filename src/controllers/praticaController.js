var praticaModel = require("../models/praticaModel");

function registrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var acertos = req.body.acertosServer;

    if (acertos == undefined) {
        res.status(400).send("Os acertos estão indefinidos!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id esta indefinido!")

    } else {
        praticaModel.registrar(acertos, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
    }
}

function capturar(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("O id esta indefinido!");
    } else {
        praticaModel.capturar(idUsuario)
            .then(
                function (resultado) {
                    if (resultado.length == 1) {
                        res.json({
                            idPratica: resultado[0].idPratica,
                            acertos: resultado[0].acertos,
                        });
                    }
                }
            )
    }
}

function totalPraticas(req, res) {
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("O id esta indefinido!");
    } else {
        praticaModel.totalPraticas(idUsuario)
            .then(
                function (resultado) {
                    res.json({
                        totalPraticas: resultado[0].totalPraticas
                    });

                }
            )
    }
}


module.exports = {
    registrar,
    capturar,
    totalPraticas
}