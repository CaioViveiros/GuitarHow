let nivelExperiencia = 0;

function cadastrarNivelIniciante() {
    nivelExperiencia = 1
    cadastrarExperiencia()
}
function cadastrarNivelIntermediario() {
    nivelExperiencia = 2
    cadastrarExperiencia()
}
function cadastrarNivelAvancado() {
    nivelExperiencia = 3
    cadastrarExperiencia()
}

function cadastrarExperiencia() {

    fetch("/usuarios/cadastrarExperiencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nivelExperienciaServer: nivelExperiencia
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            
            if (resposta.ok) {
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EXPERIENCIA_USUARIO = json.nivelExperiencia;
                

                    if(EXPERIENCIA_USUARIO == 1) {
                        irParaPlataformaIniciante()
                    } else if (EXPERIENCIA_USUARIO == 2) {
                        alert('Intermediario')
                    } else {
                        alert('Avançado')
                    }
                });
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}






