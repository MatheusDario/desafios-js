function verificar() {
    var txtVelocidade = document.getElementById("txtVel")
    var numVel = Number(txtVelocidade.value)
    var resposta = document.getElementById("res")
    
    if(numVel > 80) {
        resposta.innerHTML = `<p>A sua velocidade é ${numVel} Km/h. Você está dirigindo acima da velocidade permitida. Será multado no valor`
    }
}