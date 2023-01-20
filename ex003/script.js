function pegarHora() {
    const hora = new Date().getHours();
    return hora
}

function pegarMinuto() {
    const minuto = new Date().getMinutes();
    return minuto
}

function alterarView() {

    const imagem = document.getElementById("imagem");
    const hora = document.getElementById("horaAtual");
    const horaSistema = pegarHora().toString().padStart(2, '0')
    const minutoSistema = pegarMinuto().toString().padStart(2, '0');
    const body = document.body

    hora.innerText += ` ${horaSistema}:${minutoSistema}`;

    if (horaSistema >= 0 && horaSistema < 6) {
        imagem.src = "imagens/madrugada.jpg"
        body.style.background = "#1B2E35"
    } else if (horaSistema < 12) {
        imagem.src = "imagens/manha.jpg"
        body.style.background = "#53403A"
    } else if (horaSistema < 17) {
        imagem.src = "imagens/tarde.jpg"
        body.style.background = "#A86C38"
    } else {
        imagem.src = "imagens/noite.jpg"
        body.style.background = "#111914"
    }

}
