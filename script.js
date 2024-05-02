let mensagem = document.getElementById('mensagem')
let espaco = document.getElementById('campoDeMensagem')
let imgbtn = document.getElementById('img')
let menuobj = document.querySelector('.menu')
let soltarimg = document.querySelector('.ContainerImagem')

let falasPato = [
    'Opa', 'Sim', 'Não', 'Talvez', 'Isso é meio paia', 'Que papinho em?', 'Tá', 'Isso ai', 'Acho que você está certo', 'blz', 'dboa', 'É'
]

window.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
        // Verificar se o foco está no campo de pesquisa
        if (document.activeElement === mensagem) {
            enviar();
        }
    }
});

function enviar() {
    if (mensagem.value.trim() !== "") {
            let novamsg = document.createElement('div');
            novamsg.setAttribute('class', 'mensagem');
            let texto = document.createElement('p');
            texto.innerText = mensagem.value;
            novamsg.appendChild(texto);
    
            espaco.appendChild(novamsg);
            mensagem.value = '';
            novamsg.scrollIntoView()

            pato()
    }
}


function menu(estado){
    if (estado) {
        menuobj.style.display = 'flex'
    } else {
        menuobj.style.display = 'none'
    }
}


function enviarFoto(estado) {
    if (estado == 0){
        soltarimg.style.display = 'flex'
    } else {
        soltarimg.style.display = 'none'
        // pega o elemento input de arquivo
        const inputImagem = document.getElementById('image').querySelector('input[type="file"]');
        
        // Verifica se inputImagem.files contém arquivos
        if (inputImagem.files.length > 0) {
            const arquivo = inputImagem.files[0];
            // Cria um FileReader
            const reader = new FileReader();
            // Define o que acontecerá quando o arquivo for lido
            reader.onload = function(e) {
                // Cria um elemento de imagem e define seu src
                let novaImagem = document.createElement('img');
                novaImagem.src = e.target.result;

                // Adiciona a nova imagem ao campo de mensagem
                espaco.appendChild(novaImagem);
            };



            // Lê o arquivo como um URL de dados
            reader.readAsDataURL(arquivo);
        } else {
            alert("Nenhum arquivo selecionado.");
        }       
    }
}


function pato(){
    let number = Math.floor(Math.random() * 12)
    let fala = falasPato[number]

    let novamsg = document.createElement('div');
        novamsg.setAttribute('class', 'mensagemPato');
        let texto = document.createElement('p');
        texto.innerText = fala;
        novamsg.appendChild(texto);

        espaco.appendChild(novamsg);
        novamsg.scrollIntoView()
}
