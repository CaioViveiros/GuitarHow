var database = require("../database/config")

function buscarQuestao(indice) {
    console.log("ACESSEI O QUESTAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", indice)
    var instrucaoSql = `
        SELECT pergunta FROM questoes WHERE idQuestao = ${indice};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRespostas(indice) {
    console.log("ACESSEI O QUESTAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", indice)
    var instrucaoSql = `
        SELECT alternativaA, alternativaB, alternativaC, alternativaD FROM respostas WHERE fkQuestao = ${indice};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuestao,
    buscarRespostas
};