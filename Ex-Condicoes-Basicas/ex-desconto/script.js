function desconto() {
    let nome = document.getElementById('cliNome')
    let valorTxt = document.getElementById('cliValor')
    let res = document.getElementById('res')
    let fsex = document.getElementsByName('radsex')
    const descontoM = Number(valorTxt.value * 0.05)
    const descontoF = Number(valorTxt.value * 0.15)
    let valorTotal

    if(fsex[0].checked) {
        valorTotal = Number(valorTxt.value - descontoM)
    } else if(fsex[1].checked) {
        valorTotal = Number(valorTxt.value - descontoF)
    }

    res.innerHTML = `<p> Cliente ${nome.value} irá pagar apenas o valor de ${valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} por suas compras`

    nome.value = ``
    valorTxt.value = ``  
} 