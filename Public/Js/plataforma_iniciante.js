function alertar() {
    let alerta = document.getElementById('div_alerta_conteudo')
    alerta.classList.remove('display-hidden')
    alerta.classList.add('alerta-conteudo')
}

function fecharAlerta() {
    const alerta = document.getElementById('div_alerta_conteudo')

    alerta.classList.remove('alerta-conteudi')
    alerta.classList.add('display-hidden')
}