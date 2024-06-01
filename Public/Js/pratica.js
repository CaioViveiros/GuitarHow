let perguntasGeradas = []
let posicaoQuestaoGerada = 0
let numeroQuestao = 0
let alternativaEscolhida = ''
let alternativaCorreta = ''

let acertos = 0

const QUANTIDADE_DE_QUESTOES = 10

function sortearQuestao() {
    return Math.floor(Math.random() * QUANTIDADE_DE_QUESTOES) + 1;
}

function gerarPerguntas() {
    for (; perguntasGeradas.length < 10;) {
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
    // WEB DATA VIZ
    let indice = perguntasGeradas[posicaoQuestaoGerada]

    fetch("/questoes/buscarQuestao", {
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
    // WEB DATA VIZ
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
        .then(function (resposta) {
            if (resposta.ok) {
                capturar()
                atualizarGrafico()
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!"
            }
        })
}
