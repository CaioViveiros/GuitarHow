function entrar() {
    const email = input_email.value
    const senha = input_senha.value

    if (email.indexOf('@') == -1) {
        alert('Erro')
    } else {
        alert('Entrou')
    }
}

function irParaCadastro() {
    window.location.href = '../Cadastro/index.html'
}
function irParaHome() {
    window.location.href = '../Website/index.html'
}