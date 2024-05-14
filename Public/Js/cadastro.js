function Cadastrar() {
    const usuario = input_usuario.value
    const email = input_email.value
    const senha = input_senha.value
    const confirmacao_senha = input_confirmacao_senha.value

    const erro_campo_vazio = 'Por favor, preencha todos os campos para realizar o cadastro'
    const erro_email_invalido = 'Por favor, insira um E-mail válido para realizar o cadastro'

    if (usuario == '') {
        mensagem_alerta.innerHTML = erro_campo_vazio
        Alertar()

    } else if (email == '') {
        mensagem_alerta.innerHTML = erro_campo_vazio
        Alertar()

    } else if (senha == '') {
        mensagem_alerta.innerHTML = erro_campo_vazio
        Alertar()
        
    } else if (confirmacao_senha == '') {
        mensagem_alerta.innerHTML = erro_campo_vazio
        Alertar()

    } else if (email.indexOf('@') == -1){
        mensagem_alerta.innerHTML = erro_email_invalido
        Alertar()

    } else {

        // Validação de senha
        
    }
}

function Alertar() {
    const alerta = document.getElementById('div_alerta')

    alerta.classList.remove('display-hidden')
    alerta.classList.add('alerta')
}
function FecharAlerta() {
    const alerta = document.getElementById('div_alerta')

    alerta.classList.remove('alerta')
    alerta.classList.add('display-hidden')
}

