function entrar() {
    const email = input_email.value
    const senha = input_senha.value

    const erroCampoVazio = 'Por favor, preencha todos os campos para realizar o cadastro'

    if (email == '') {
        mensagem_alerta.innerHTML = erroCampoVazio
        alertar()

    } else if (senha == '') {
        mensagem_alerta.innerHTML = erroCampoVazio
        alertar()

    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        mensagem_alerta.innerHTML = 'Por favor, insira um E-mail válido para realizar o cadastro'
        alertar()

    } else {

        // WEB DATA VIZ
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.USUARIO = json.usuario;
                    sessionStorage.EMAIL = json.email;
                    sessionStorage.NIVEL_EXPERIENCIA = json.nivelExperiencia;

                    
                    irParaPlataformaIniciante()
                });

            } else {

                mensagem_alerta.innerHTML = 'Usuario ainda não cadastrado'
            }

        }).catch(function (erro) {
            console.log(erro);
        })
    
    }
}

function alertar() {
    const alerta = document.getElementById('div_alerta')

    alerta.classList.remove('display-hidden')
    alerta.classList.add('alerta')
}
function fecharAlerta() {
    const alerta = document.getElementById('div_alerta')

    alerta.classList.remove('alerta')
    alerta.classList.add('display-hidden')
}

