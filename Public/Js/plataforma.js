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

function mostrarHome() {
    div_sessao_home.style.display = 'flex'
    div_sessao_conteudo.style.display = 'none'
    div_sessao_pratica.style.display = 'none'
    div_sessao_progressao.style.display = 'none'
}

function mostrarConteudo() {
    div_sessao_home.style.display = 'none'
    div_sessao_conteudo.style.display = 'flex'
    div_sessao_pratica.style.display = 'none'
    div_sessao_progressao.style.display = 'none'
}

function mostrarPratica() {
    div_sessao_home.style.display = 'none'
    div_sessao_conteudo.style.display = 'none'
    div_sessao_pratica.style.display = 'flex'
    button_inicio.style.display = 'flex'
    div_box_teste.style.display = 'none'
    div_sessao_progressao.style.display = 'none'
}

function iniciarTeste() {
    button_inicio.style.display = 'none'
    div_box_teste.style.display = 'flex'
    numeroQuestao = 1
    div_numero_questao.innerHTML = numeroQuestao
}

let numeroQuestao = 1
function proximaPergunta() {
    
    if (numeroQuestao < 10) {
        numeroQuestao += 1
        div_numero_questao.innerHTML = numeroQuestao
    } else {
        alertar()
        numeroQuestao = 1
        mostrarPratica()
    }
}
