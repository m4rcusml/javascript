class Item {
    constructor(valor) {
        this.valor = Number(valor)
    }

    isNasRegras() {
        if (this.valor >= 0 && this.valor <= 100) {
            return true
        }
        return false
    }

    alreadyExist(vetor) {
        if(vetor.indexOf(this.valor) != -1) {
            return true
        }
        return false
    }

    criarItem() {
        let option = document.createElement('option')
        option.text = `${this.valor} foi adicionado`
        return option
    }
}

document.addEventListener('keypress', function (evt) {
    if (evt.key == 'Enter') {
        var btnAdicionar = document.querySelector('#btnAdicionar')
        btnAdicionar.click()
    }
})

var itens = []
var select = document.querySelector('#select')

function adicionar() {
    let numero = document.querySelector('#numero')
    let item = new Item(numero.value)

    if (item.isNasRegras() && !item.alreadyExist(itens)) {
        let option = item.criarItem()
        itens.push(item.valor)
        select.appendChild(option)
        select.size = `${itens.length}`
        numero.value = ''
    } else {
        alert('O número inserido não está no intervalo sugerido ou já existe.')
    }
}
