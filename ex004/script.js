function prepararAmbiente() {
    var data = new Date();
    var anoNasc = document.getElementById('anoNasc')
    anoNasc.setAttribute('min', data.getFullYear() - 180);
    anoNasc.setAttribute('max', data.getFullYear());
    const btnEnviar = document.getElementById('btnEnviar')
    btnEnviar.addEventListener('click', enviar)
}

function verificarGenero() {
    var genero = document.getElementsByName('genero')
    if (genero[0].checked) {
        return "Masculino"
    } else if (genero[1].checked) {
        return "Feminino"
    } else {
        return "Outro"
    }
}

function verificarIdade() {
    return new Date().getFullYear() - anoNasc.value
}

function enviar() {
    if(anoNasc.value != '') {
        const genero = verificarGenero()
        const idade = verificarIdade()
        const divResult = document.getElementById('divResult')
        divResult.innerHTML = `<p>Você tem (ou vai fazer) ${idade} anos.</p`
    } else {
        alert('Preencha os campos')
    }
}