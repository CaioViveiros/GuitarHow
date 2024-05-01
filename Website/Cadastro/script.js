function entrar() {
    const usuario = input_usuario.value
    const email = input_email.value
    const senha = input_senha.value
    const confirmacao = input_confirmacao.value

    if (usuario == '' || email == '' || senha == '' || confirmacao == '') {
        alert('Preencha todos os campos para criar sua conta')
    } else if (email.indexOf('@') == -1) {
        alert('insira um e-mail válido')
    } else if (senha != confirmacao) {
        alert('As senhas estão diferentes')
    } else {
        alert('Usuário cadastrado com sucesso')
    }
}

function irParaLogin() {
    window.location.href = '../Login/index.html'
}
function irParaHome() {
    window.location.href = '../Website/index.html'
}
