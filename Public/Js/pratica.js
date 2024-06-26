let perguntasGeradas = []
let posicaoQuestaoGerada = 0
let numeroQuestao = 0
let alternativaEscolhida = ''
let alternativaCorreta = ''

let acertos = 0

const TOTAL_QUESTOES = 20
function sortearQuestao() {
    const nivelExperiencia = sessionStorage.NIVEL_EXPERIENCIA

    if (nivelExperiencia == 1){
        return Math.floor(Math.random() * TOTAL_QUESTOES) + 1;
    }

    if (nivelExperiencia == 2){
        return Math.floor(Math.random() * TOTAL_QUESTOES) + 21;
    }

    if (nivelExperiencia == 3){
        return Math.floor(Math.random() * TOTAL_QUESTOES) + 41;
    }
}

function gerarPerguntas() {
    for (; perguntasGeradas.length < 10 ;) {
        let numeroSorteado = sortearQuestao()
        if (perguntasGeradas.indexOf(numeroSorteado) == -1) {
            perguntasGeradas.push(numeroSorteado)
        }
    }
}

function iniciarTeste() {
    aparecerTeste()
    posicaoQuestaoGerada = 0
    numeroQuestao = 1
    perguntasGeradas = []
    acertos = 0

    gerarPerguntas()
    buscarQuestao()
    buscarRespostas()
    div_numero_questao.innerHTML = numeroQuestao
    console.log(perguntasGeradas)
}

function proximaPergunta() {
    if (numeroQuestao < 10) {
        numeroQuestao += 1
        div_numero_questao.innerHTML = numeroQuestao
        posicaoQuestaoGerada += 1

        validarAcerto()
        buscarQuestao()
        buscarRespostas()
        atualizarQuestao()
    } else {
        validarAcerto()
        registrar()
        mostrarResultado()
    }
}

function buscarQuestao() {
    let indice = perguntasGeradas[posicaoQuestaoGerada]
    let nivelExperiencia = sessionStorage.NIVEL_EXPERIENCIA
    fetch("/questoes/buscarQuestao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            indiceServer: indice,
            nivelExperienciaServer: nivelExperiencia
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                const pergunta = json.pergunta
                atualizarQuestao(pergunta)
            });
        }
    })
}

function atualizarQuestao(pergunta) {
    p_questao.innerHTML = pergunta
}

function buscarRespostas() {
    let indice = perguntasGeradas[posicaoQuestaoGerada]

    fetch("/questoes/buscarRespostas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            indiceServer: indice
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                const alternativaA = json.alternativaA
                const alternativaB = json.alternativaB
                const alternativaC = json.alternativaC
                const alternativaD = json.alternativaD
                alternativaCorreta = json.correta
                atualizarAlternativas(alternativaA, alternativaB, alternativaC, alternativaD)
            });
        }
    })
}

function atualizarAlternativas(alternativaA, alternativaB, alternativaC, alternativaD) {
    alternativa_a.innerHTML = alternativaA
    alternativa_b.innerHTML = alternativaB
    alternativa_c.innerHTML = alternativaC
    alternativa_d.innerHTML = alternativaD
}

function mostrarResultado() {
    div_box_teste.style.display = 'none'
    div_box_resultado.style.display = 'flex'
    div_acertos.innerHTML = `${acertos}/10`
}

function aparecerTeste() {
    button_inicio.style.display = 'none'
    div_box_teste.style.display = 'flex'
}

function responderA() {
    alternativaEscolhida = 'A'
    proximaPergunta()
}

function responderB() {
    alternativaEscolhida = 'B'
    proximaPergunta()
}

function responderC() {
    alternativaEscolhida = 'C'
    proximaPergunta()
}

function responderD() {
    alternativaEscolhida = 'D'
    proximaPergunta()
}

function validarAcerto() {
    if (alternativaEscolhida == alternativaCorreta) {
        acertos += 1
    }
}

function registrar() {
    const idUsuario = sessionStorage.ID_USUARIO

    fetch("/pratica/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            acertosServer: acertos,
            idUsuarioServer: idUsuario
        }),
    })
}
