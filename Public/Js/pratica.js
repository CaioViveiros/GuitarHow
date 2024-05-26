const listaQuestoes = [
    {
        questao: 'Qual agrupamento de notas compõe corretamente o acorde de Am?',
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
    {
        questao: 'Pergunta 11',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 12',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    },
    {
        questao: 'Pergunta 13',
        respostas: {
            alternativaA: 'A',
            alternativaB: 'B',
            alternativaC: 'C',
            alternativaD: 'D',
            correto: 'A'
        }
    }
]

let acertos = 0
let numeroQuestao = 0
let questaoAtual = ''
let perguntasGeradas = []
let posicaoQuestaoGerada = 0

function iniciarTeste() {
    aparecerTeste()

    // Resetando variaveis
    posicaoQuestaoGerada = 0
    numeroQuestao = 1
    perguntasGeradas = []
    questaoAtual = ''
    acertos = 0

    gerarPerguntas()
    atualizarQuestao()

    div_numero_questao.innerHTML = numeroQuestao   
}

function proximaPergunta(alternativaEscolhida) {
    let posicaoQuestaoAtual = perguntasGeradas[posicaoQuestaoGerada]
    let respostaCorreta = listaQuestoes[posicaoQuestaoAtual].respostas.correto

    if (alternativaEscolhida == respostaCorreta) {
        acertos += 1
    }

    if (numeroQuestao < 10) {
        numeroQuestao += 1
        posicaoQuestaoGerada += 1
        div_numero_questao.innerHTML = numeroQuestao
        atualizarQuestao()
        
    } else {
        div_acertos.innerHTML = `${acertos}/10`
        mostrarResultado()
    }
}

function responderA() {
    proximaPergunta('A')
}

function responderB() {
    proximaPergunta('B')
}

function responderC() {
    proximaPergunta('C')
}

function responderD() {
    proximaPergunta('D')
}

function sortearQuestao() {
    return Math.floor(Math.random() * listaQuestoes.length)
}

function gerarPerguntas() {
    while (perguntasGeradas.length < 10) {
        let numeroSorteado = sortearQuestao()
        if (perguntasGeradas.indexOf(numeroSorteado) === -1) {
            perguntasGeradas.push(numeroSorteado)
        }
    }
}

function atualizarQuestao() {
    let posicaoQuestaoAtual = perguntasGeradas[posicaoQuestaoGerada]
    questaoAtual = listaQuestoes[posicaoQuestaoAtual].questao
    p_questao.innerHTML = questaoAtual

    let respostas = listaQuestoes[posicaoQuestaoAtual].respostas
    alternativa_a.innerHTML = respostas.alternativaA
    alternativa_b.innerHTML = respostas.alternativaB
    alternativa_c.innerHTML = respostas.alternativaC
    alternativa_d.innerHTML = respostas.alternativaD
}

function mostrarResultado() {
    div_box_teste.style.display = 'none'
    div_box_resultado.style.display = 'flex'
}

function aparecerTeste() {
    button_inicio.style.display = 'none'
    div_box_teste.style.display = 'flex'
}