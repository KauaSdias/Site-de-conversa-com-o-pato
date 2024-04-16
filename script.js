let mensagem = document.getElementById('mensagem')
let espaco = document.getElementById("campoDeMensagem")

window.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
        // Verificar se o foco está no campo de pesquisa
        if (document.activeElement === mensagem) {
            enviar();
        }
    }
});

function enviar() {
    let novamsg = document.createElement('div')
    novamsg.setAttribute('class', 'mensagem')
    let texto = document.createElement('p')
    texto.innerText = mensagem.value
    novamsg.appendChild(texto)

    espaco.appendChild(novamsg)
    mensagem.value = ""
}