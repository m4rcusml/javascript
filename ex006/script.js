function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    const contagem = document.getElementById('contagem')
    contagem.innerText = ''
    
    if(inicio < fim && passo > 0) {
        for(var c = parseInt(inicio); c <= parseInt(fim); c += parseInt(passo)) {
            contagem.innerHTML += `${c} \u{1F449} `
        }
    } else if(inicio > fim && passo > 0) {
        for(var c = parseInt(inicio); c >= parseInt(fim); c -= parseInt(passo)) {
            contagem.innerHTML += `${c} \u{1F449} `
        }
    } else {
        alert('Valores inválidos!')
    }

    contagem.innerHTML += 'Fim \u{1F3C1}'
}