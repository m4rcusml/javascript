function criarTabuada() {
    const tabuada = document.getElementById('tabuada')
    let num = document.querySelector('#numero')
    let n = parseInt(num.value)

    if(num.value.length != 0) {
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `v${c}`
            tabuada.appendChild(item)
        }
        tabuada.size = '10'
    } else {
        alert('Preencha os campos!')
    }
}