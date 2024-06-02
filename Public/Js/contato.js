function enviarMensagem() {
    const email = input_email.value
    const mensagem = input_mensagem.value

    if (email == '' || mensagem == '') {
        alert('Preencha todos os campos')
    } else {
        fetch("/contato/enviarMensagem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailServer: email,
                mensagemServer: mensagem
            }),
        })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            
            if (resposta.ok) {
                alert('Mensagem enviada')
            } else {
                console.log("ERRO: falha ao enviar contato") 
            }
        })
    }

}