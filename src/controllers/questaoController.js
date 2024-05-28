var questaoModel = require("../models/questaoModel");

function buscarQuestao(req, res) {
    var indice = req.body.indiceServer;

    if (indice == undefined) {
        res.status(400).send("Seu indice está undefined!");
    } else {

        questaoModel.buscarQuestao(indice)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            pergunta: resultadoAutenticar[0].pergunta,
                        });
                }
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar a questao! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarRespostas(req, res) {
    var indice = req.body.indiceServer;

    if (indice == undefined) {
        res.status(400).send("Seu indice está undefined!");
    } else {

        questaoModel.buscarRespostas(indice)
            .then(
                function (resultadoRespostas) {
                    console.log(`\nResultados encontrados: ${resultadoRespostas.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoRespostas)}`); // transforma JSON em String

                    if (resultadoRespostas.length == 1) {
                        console.log(resultadoRespostas);

                        res.json({
                            alternativaA: resultadoRespostas[0].alternativaA,
                            alternativaB: resultadoRespostas[0].alternativaB,
                            alternativaC: resultadoRespostas[0].alternativaC,
                            alternativaD: resultadoRespostas[0].alternativaD
                        });
                }
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao buscar as respostas! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscarQuestao,
    buscarRespostas
}