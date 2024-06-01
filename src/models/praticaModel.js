var database = require("../database/config");

function registrar(acertos, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, acertos);
    var instrucaoSql = `
        INSERT INTO pratica (fkUsuario, acertos) VALUES (${idUsuario}, ${acertos});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function capturar(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario);
    var instrucaoSql = `
        SELECT idPratica, acertos FROM pratica 
        WHERE idPratica = (
            SELECT MAX(idPratica) 
            FROM pratica 
            WHERE fkUsuario = ${idUsuario}
    );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function totalPraticas(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario);
    var instrucaoSql = `
        SELECT count(idPratica) as 'totalPraticas' FROM pratica
        WHERE fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    capturar,
    totalPraticas
}