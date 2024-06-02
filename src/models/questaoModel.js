var database = require("../database/config")

function buscarQuestao(indice) {
    var instrucaoSql = `
        SELECT pergunta FROM questoes WHERE idQuestao = ${indice};
    `;
    return database.executar(instrucaoSql);
}

function buscarRespostas(indice) {
    var instrucaoSql = `
        SELECT alternativaA, alternativaB, alternativaC, alternativaD, correta FROM respostas WHERE fkQuestao = ${indice};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuestao,
    buscarRespostas
};