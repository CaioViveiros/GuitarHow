const idUsuario = sessionStorage.ID_USUARIO

function capturarUltimasPraticas() {
    fetch("/pratica/capturarUltimasPraticas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                resposta.reverse()
                atualizarGrafico(resposta)

                ultima_pratica.innerHTML = `${resposta[resposta.length - 1].acertos}/10`
            });
        }
    })
}

function totalPraticas() {
    fetch("/pratica/totalPraticas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            resposta.json().then(json => {
                sessionStorage.TOTAL_PRATICAS = json.totalPraticas;

                total_praticas.innerHTML = json.totalPraticas

            })
        }
    })
}

const ctx = document.getElementById('grafico').getContext('2d');

ctx.canvas.width = 3500
ctx.canvas.height = 1100

const grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Ultimas pontuações',
            data: [],
            borderWidth: 4,
            borderColor: '#604299'
        }]
    }
});

function atualizarGrafico(resposta) {
    let somaDados = 0
    for (let posicao = 0; posicao < resposta.length; posicao++) {
        let dadoAtual = resposta[posicao];
        somaDados += dadoAtual.acertos

        grafico.data.labels.push(dadoAtual.hora)
        grafico.data.datasets[0].data.push(dadoAtual.acertos)

        let mediaDados = somaDados / resposta.length
        media_praticas.innerHTML = mediaDados.toFixed(1)
    }

    grafico.update()
}

function limparGrafico() {
    grafico.data.labels = []
    grafico.data.datasets[0].data = []

    grafico.update()
}

function capturarTodasPraticas() {
    fetch("/pratica/capturarTodasPraticas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                evoluirEXP(resposta)
                console.log(resposta)
            });
        }
    })
}

function evoluirEXP(resposta) {
    let EXP = 0
    for (let posicao = 0; posicao < resposta.length; posicao++) {
        let acertoAtual = resposta[posicao].acertos;

        if (acertoAtual == 10) {
            EXP += 1
        }
    }
    console.log(EXP)

    if (EXP > 5 && EXP <= 10) {
        let novaExperiencia = 3
        evoluirNivel(novaExperiencia)
    } else if (EXP == 5) {
        let novaExperiencia = 2
        evoluirNivel(novaExperiencia)
    } 

}

function evoluirNivel(novaExperiencia) {
    fetch(`/experiencia/evoluirNivel`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nivelExperienciaServer: novaExperiencia,
            idUsuarioServer: idUsuario
        })
    })
}
 
