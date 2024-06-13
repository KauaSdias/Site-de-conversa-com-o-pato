let mensagem = document.getElementById('mensagem')
let espaco = document.getElementById('campoDeMensagem')
let imgbtn = document.getElementById('img')
let menuobj = document.querySelector('.menu')
let soltarimg = document.querySelector('.ContainerImagem')


let mic = document.querySelector('.mic')
let mutado = true
 mic.onclick = function () {
    if (mutado){
        mic.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m710-362-58-58q14-23 21-48t7-52h80q0 44-13 83.5T710-362ZM480-594Zm112 112-72-72v-206q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v126l-80-80v-46q0-50 35-85t85-35q50 0 85 35t35 85v240q0 11-2.5 20t-5.5 18ZM440-120v-123q-104-14-172-93t-68-184h80q0 83 57.5 141.5T480-320q34 0 64.5-10.5T600-360l57 57q-29 23-63.5 39T520-243v123h-80Zm352 64L56-792l56-56 736 736-56 56Z"/></svg>'
        mutado = false
    } else {
        mic.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>'
        mutado = true
    }
    
 } 

let modal = document.querySelector('dialog')
let btCall = document.getElementById('call')
let endCall = document.querySelector('.end')

btCall.onclick = function () {
    modal.style.display = 'flex'
    conte()
}

endCall.onclick = function () {
    modal.style.display = 'none'
    pareConte()
}



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

let temp = {
    m: 0,
    s: 0,
    ms: 0,
}
let horas;

function conte() {
  pause();
  horas = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(horas);
}

function pareConte() {
  temp.m = 0;
  temp.s = 0;

  document.getElementById('m').innerText = '00';
  document.getElementById('s').innerText = '00';
}

function timer() {
  if ((temp.ms += 10) == 1000) {
    temp.ms = 0;
    temp.s++;
  }
  if (temp.s == 60) {
    temp.s = 0;
    temp.m++;
  }
  if (temp.m == 60) {
    temp.m = 0;
  }
  document.getElementById('m').innerText = returnData(temp.m);
  document.getElementById('s').innerText = returnData(temp.s);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}
