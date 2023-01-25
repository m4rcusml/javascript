document.addEventListener('keypress', function(e) {
    const teclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Enter', '/', '*', '+', '-', ',', '.', 'c']
    
    if(teclas.indexOf(e.key) != -1) {
        switch(e.key) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '+':
            case '-':
                inserir(e.key)
                break
            case ',':
            case '.':
            case '/':
            case '*':
                inserir(e.key, true)
                break
            case 'c':
                limpar()
                break
            case 'Enter':
                calcular()
                break
            case 'Backspace':
                apagar()
                break
            default:
                break
        }
    }
})

document.addEventListener('keydown', function (e) {
    if(e.key == 'Backspace') {
        apagar()
    }
})

function inserir(text, alert = false) {
    const resultado = document.querySelector('#res')

    if(alert) {
        switch(text) {
            case '.':
                resultado.innerHTML += ','
                break
            case '/':
                resultado.innerHTML += '&divide;'
                break
            case '*':
                let lastChar = resultado.innerText.substring(0, resultado.innerText.length)
                console.log(lastChar)
                if(lastChar[lastChar.length-1] == 'x') {
                    apagar()
                    resultado.innerHTML += '^'
                } else {
                    resultado.innerHTML += 'x'
                }
                break
        }
    } else {
        resultado.innerHTML += text
    }
}

function apagar() {
    let apagado = document.querySelector('#res').innerText.substring(0, document.querySelector('#res').innerText.length -1)
    document.querySelector('#res').innerHTML = apagado
}

function limpar() {
    document.querySelector('#res').innerHTML = ''
}

function calcular() {
    let resultado = document.querySelector('#res').innerText
    resultado = resultado.replaceAll('x', '*')
    resultado = resultado.replaceAll('÷', '/')
    resultado = resultado.replaceAll(',', '.')
    resultado = resultado.replaceAll('^', '**')
    if(resultado) {
        let calculado = eval(resultado)
        calculado = calculado.toString().replace('.', ',')
        historico.push(`${resultado} = ${calculado}`)
        document.querySelector('#res').innerHTML = `${calculado}`
    }
    else {
        console.log('vazio')
    }
    console.log(historico)
}

const historico = []