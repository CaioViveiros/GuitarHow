var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].email,
                            usuario: resultadoAutenticar[0].usuario,
                            senha: resultadoAutenticar[0].senha,
                            nivelExperiencia: resultadoAutenticar[0].fkExperiencia
                        });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            )
    }
}

function cadastrar(req, res) {
    var usuario = req.body.usuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nivelExperiencia = req.body.experienciaServer;

    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nivelExperiencia == undefined) {
        res.status(400).send("Sua experiencia está undefined!");
    } else {

        usuarioModel.cadastrar(usuario, email, senha, nivelExperiencia)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
    }
}

module.exports = {
    autenticar,
    cadastrar
}