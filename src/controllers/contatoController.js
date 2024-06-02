let contatoModel = require("../models/contatoModel");

function enviarMensagem(req, res) {
    let email = req.body.emailServer;
    let mensagem = req.body.mensagemServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (mensagem == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    } else {

        contatoModel.enviarMensagem(email, mensagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
    }
}

module.exports = {
    enviarMensagem
}