var database = require("../database/config");

function registrar(acertos, idUsuario) {
    var instrucaoSql = `
        INSERT INTO pratica (hora, fkUsuario, acertos) VALUES (now(), ${idUsuario}, ${acertos});
    `;
    return database.executar(instrucaoSql); 
}

function capturarUltimasPraticas(idUsuario, limiteLinhas) {
    var instrucaoSql = `
        SELECT idPratica, time(hora) as 'hora', acertos FROM pratica
        WHERE fkUsuario = ${idUsuario}
        ORDER BY idPratica DESC LIMIT ${limiteLinhas};
    `;
    return database.executar(instrucaoSql);
}

function totalPraticas(idUsuario) {
    var instrucaoSql = `
        SELECT count(idPratica) as 'totalPraticas' FROM pratica
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function capturarTodasPraticas(idUsuario) {
    var instrucaoSql = `
        SELECT idPratica, acertos FROM pratica
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    capturarUltimasPraticas,
    totalPraticas,
    capturarTodasPraticas
}