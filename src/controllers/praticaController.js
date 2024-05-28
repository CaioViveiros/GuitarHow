var praticaModel = require("../models/praticaModel");

function registrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var acertos = req.body.acertosServer;
    
    if (acertos == undefined) {
        res.status(400).send("Os acertos estão indefinidos!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id esta indefinido!")
    
    } else {
        praticaModel.registrar(acertos, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrar   
}