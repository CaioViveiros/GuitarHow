var database = require("../database/config")

function enviarMensagem(email, mensagem) {
    var instrucaoSql = `
        INSERT INTO contato (email, mensagem) VALUES 
        ('${email}', '${mensagem}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    enviarMensagem
};