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

