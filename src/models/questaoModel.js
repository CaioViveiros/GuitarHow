let database = require("../database/config")

function buscarQuestao(indice, nivelExperiencia) {
    let instrucaoSql = `
        SELECT pergunta FROM questoes WHERE idQuestao = ${indice} AND fkExperiencia = ${nivelExperiencia};
    `;
    return database.executar(instrucaoSql);
}

function buscarRespostas(indice) {
    let instrucaoSql = `
        SELECT alternativaA, alternativaB, alternativaC, alternativaD, correta FROM respostas WHERE fkQuestao = ${indice};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuestao,
    buscarRespostas
};