const idUsuario = sessionStorage.ID_USUARIO

window.addEventListener('load', function() {
    totalPraticas()
});

function capturar() {
    fetch("/pratica/capturar", {
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
                sessionStorage.ID_PRATICA = json.idPratica;
                sessionStorage.ACERTOS = json.acertos;

                ultima_pratica.innerHTML = `${json.acertos}/10`

                totalPraticas()
            })
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
            label: 'Ultimas pontuações:',
            data: [],
            borderWidth: 4,
            borderColor: '#604299'
        }]
    }
});

let listaDados = [0]
let listaPraticas = [0]

function atualizarGrafico() {
    const idPratica = sessionStorage.ID_PRATICA
    const acertos = sessionStorage.ACERTOS

    if (listaDados.length >= 5) {
        listaDados = []
        listaPraticas = []
        grafico.data.datasets[0].data = []
        grafico.data.labels = []
    }
        listaDados.push(acertos)
        listaPraticas.push(idPratica)

        let dadoAtual = listaDados[listaDados.length - 1]
        let praticaAtual = listaPraticas[listaPraticas.length - 1]

        grafico.data.datasets[0].data.push(dadoAtual)
        grafico.data.labels.push(`Prática ${praticaAtual}`)

        grafico.update()
}

