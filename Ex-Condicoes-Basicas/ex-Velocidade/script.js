function verificar() {
    var txtVelocidade = document.getElementById("txtVel")
    var numVel = Number(txtVelocidade.value)
    var resposta = document.getElementById("res")
    var velMaxima = 80
    var velAcima = 0
    var multa
    var valMulta = 5
    
    
    if(numVel > velMaxima) {
        velAcima = numVel - velMaxima
        multa = velAcima * valMulta
        resposta.innerHTML = `<p>A sua velocidade é<strong> ${numVel} Km/h </strong>. 
        Você está dirigindo acima da velocidade máxima permitida de ${velMaxima} Km/h. 
        Será multado no valor<strong> ${multa.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong> </p>`
        document.body.style.backgroundColor = 'red'
    } else {
        resposta.innerHTML = `<p>A sua velocidade é<strong> ${numVel} Km/h </strong>. Você está dentro da velocidade permitida
        Use sempre cindo de segurança.</p>`
        document.body.style.backgroundColor = 'green'
    }
}