let praticaModel = require("../models/praticaModel");

function registrar(req, res) {
    let idUsuario = req.body.idUsuarioServer;
    let acertos = req.body.acertosServer;

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

function capturarUltimasPraticas(req, res) {
    let idUsuario = req.body.idUsuarioServer;
    const limiteLinhas = 10

    praticaModel.capturarUltimasPraticas(idUsuario, limiteLinhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })
}

function totalPraticas(req, res) {
    let idUsuario = req.body.idUsuarioServer;

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

function capturarTodasPraticas(req, res) {
    let idUsuario = req.body.idUsuarioServer;

    praticaModel.capturarTodasPraticas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    })
}

module.exports = {
    registrar,
    capturarUltimasPraticas,
    totalPraticas,
    capturarTodasPraticas
}