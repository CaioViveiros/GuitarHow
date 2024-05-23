function validar() {
    let usuario = input_usuario.value
    let email = input_email.value
    let senha = input_senha.value
    let confirmacaoSenha = input_confirmacao_senha.value

    const erroCampoVazio = 'Por favor, preencha todos os campos para realizar o cadastro'

    if (usuario == '') {
        mensagem_alerta.innerHTML = erroCampoVazio
        alertar()

    } else if (email == '') {
        mensagem_alerta.innerHTML = erroCampoVazio
        alertar()

    } else if (senha == '') {
        mensagem_alerta.innerHTML = erroCampoVazio
        alertar()

    } else if (confirmacaoSenha == '') {
        mensagem_alerta.innerHTML = erroCampoVazio
        alertar()

    } else if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        mensagem_alerta.innerHTML = 'Por favor, insira um E-mail válido para realizar o cadastro'
        alertar()

    } else {

        const tamanhoSenha = senha.length

        if (tamanhoSenha < 6) {
            mensagem_alerta.innerHTML = 'Sua senha deve ter no minimo 6 caracteres'
            alertar()

        } else {
            let temMaiuscula = false
            let temMinuscula = false
            let temNumero = false
            let temCaractereEspecial = false
            let senhasIguais = false
            const listaCaracteresEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?']

            for (let posicao = 0; posicao < tamanhoSenha; posicao++) {
                let caractere = senha[posicao]

                if (caractere >= 'A' && caractere <= 'Z') {
                    temMaiuscula = true
                }
                if (caractere >= 'a' && caractere <= 'z') {
                    temMinuscula = true
                }
                if (caractere >= '0' && caractere <= '9') {
                    temNumero = true
                }
                if (listaCaracteresEspeciais.indexOf(caractere) != -1) {
                    temCaractereEspecial = true
                }
            }

            if (temMaiuscula == false) {
                mensagem_alerta.innerHTML = 'Sua senha deve ter no minimo uma letra maiuscula'
                alertar()
            }
            if (temMinuscula == false) {
                mensagem_alerta.innerHTML = 'Sua senha deve ter no minimo uma letra minuscula'
                alertar()
            }
            if (temNumero == false) {
                mensagem_alerta.innerHTML = 'Sua senha deve ter no minimo um numero'
                alertar()
            }
            if (temCaractereEspecial == false) {
                mensagem_alerta.innerHTML = 'Sua senha deve ter no minimo um caracter especial'
                alertar()
            }

            if (temMaiuscula && temMinuscula && temNumero && temCaractereEspecial) {
                if (senha != confirmacaoSenha) {
                    mensagem_alerta.innerHTML = 'Suas senhas devem ser iguais'
                    alertar()

                } else {

                    div_screen.style.display = 'none'
                    div_screen2.style.display = 'flex'

                    dadosUsuario.push(usuario, email, senha)

                }
            }
        }
    }
}

const dadosUsuario = []

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

let nivelExperiencia = 0

function cadastrarNivelIniciante() {
    let usuario = dadosUsuario[0]
    let email = dadosUsuario[1]
    let senha = dadosUsuario[2]
    nivelExperiencia = 1
    cadastrar(usuario, email, senha, nivelExperiencia)
}

function cadastrarNivelIntermediario() {
    let usuario = dadosUsuario[0]
    let email = dadosUsuario[1]
    let senha = dadosUsuario[2]
    nivelExperiencia = 2
    cadastrar(usuario, email, senha, nivelExperiencia)
}

function cadastrarNivelAvancado() {
    let usuario = dadosUsuario[0]
    let email = dadosUsuario[1]
    let senha = dadosUsuario[2]
    nivelExperiencia = 3
    cadastrar(usuario, email, senha, nivelExperiencia)
}


function cadastrar(usuario, email, senha, nivelExperiencia) {
    
    // WEB DATA VIZ
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            usuarioServer: usuario,
            emailServer: email,
            senhaServer: senha,
            experienciaServer: nivelExperiencia
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                if (nivelExperiencia > 0) {
                    irParaPlataformaIniciante()
                } else {
                    alert('Nivel de experiencia menor que 0')
                }
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}