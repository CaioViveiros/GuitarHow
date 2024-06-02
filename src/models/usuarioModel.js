var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT idUsuario, usuario, email, senha, fkExperiencia FROM usuario WHERE email = '${email}' AND senha = MD5('${senha}');
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(usuario, email, senha, nivelExperiencia) {
    var instrucaoSql = `
        INSERT INTO usuario (usuario, email, senha, fkExperiencia) VALUES 
        ('${usuario}', '${email}', MD5('${senha}'), ${nivelExperiencia});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};