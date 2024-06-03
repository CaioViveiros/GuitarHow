var database = require("../database/config");

function evoluirNivel(novaExperiencia, idUsuario) {
    let instrucaoSql = `
        UPDATE usuario SET fkExperiencia = ${novaExperiencia} WHERE idUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    evoluirNivel
}