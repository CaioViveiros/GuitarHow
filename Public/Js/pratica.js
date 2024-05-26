const listaQuestoes = [
    {
        questao: 'Pergunta 1',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 2',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 3',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 4',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 5',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 6',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 7',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 8',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 9',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 10',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
   
]

let acertos = 0

let numeroQuestao = 0

let indiceQuestao = 0
let questaoAtual = ''

let perguntasRealizadas = []

function iniciarTeste() {
    button_inicio.style.display = 'none'
    div_box_teste.style.display = 'flex'

    perguntasRealizadas = []
    acertos = 0

    numeroQuestao = 1
    div_numero_questao.innerHTML = numeroQuestao

    sortearQuestao()
    perguntasRealizadas.push(indiceQuestao)
    p_questao.innerHTML = questaoAtual
}

function proximaPergunta() {
    sortearQuestao()
    if (perguntasRealizadas.indexOf(indiceQuestao) == -1) {
        if (numeroQuestao < 10) {
            numeroQuestao += 1
            validarResposta()
            div_numero_questao.innerHTML = numeroQuestao
            perguntasRealizadas.push(indiceQuestao)
            p_questao.innerHTML = questaoAtual
        } else {
            mostrarPratica()
        }
    } else {
        proximaPergunta()
    }
}

function sortearQuestao() {
    let numeroSorteado = Math.floor(Math.random() * (listaQuestoes.length - 0) + 0)
    indiceQuestao = numeroSorteado
    questaoAtual = listaQuestoes[indiceQuestao].questao
}

let alternativaEscolhida = ''

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

function validarResposta() {
    let respostaCorreta = listaQuestoes[indiceQuestao].respostas.correto
    if (alternativaEscolhida == respostaCorreta) {
        acertos += 1
    } 
}







