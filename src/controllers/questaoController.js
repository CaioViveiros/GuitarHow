let questaoModel = require("../models/questaoModel");

function buscarQuestao(req, res) {
    let indice = req.body.indiceServer;
    let nivelExperiencia = req.body.nivelExperienciaServer;

    if (indice == undefined) {
        res.status(400).send("Seu indice está undefined!");
    } else if (nivelExperiencia == undefined) {
        res.status(400).send("Seu nivel de experiencia está undefined!");
    } else {
        questaoModel.buscarQuestao(indice, nivelExperiencia)
            .then(
                function (resultado) {

                    if (resultado.length == 1) {
                        console.log(resultado);

                        res.json({
                            pergunta: resultado[0].pergunta,
                        });
                    }
                }
            )
    }
}

function buscarRespostas(req, res) {
    let indice = req.body.indiceServer;

    if (indice == undefined) {
        res.status(400).send("Seu indice está undefined!");

    } else {
        questaoModel.buscarRespostas(indice)
            .then(
                function (resultadoRespostas) {

                    if (resultadoRespostas.length == 1) {
                        res.json({
                            alternativaA: resultadoRespostas[0].alternativaA,
                            alternativaB: resultadoRespostas[0].alternativaB,
                            alternativaC: resultadoRespostas[0].alternativaC,
                            alternativaD: resultadoRespostas[0].alternativaD,
                            correta: resultadoRespostas[0].correta
                        });
                    }
                }
            )
    }
}

module.exports = {
    buscarQuestao,
    buscarRespostas
}