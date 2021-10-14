var animais = [
    "cachorro",
    "gato",
    "cavalo",
    "macaco",
    "papagaio",
    "peixe",
    "elefante",
    "girafa",
    "capivara",
    "zebra",
    "leão",
    "cobra",
    "rato",
    "javali"
]

let resposta = "";
let maxErros = 6;
let erros = 0;
let tentativas = [];
let wordStatus = null;

function palavraAleatoria(){
    resposta = animais[Math.floor(Math.random() * animais.length)];
}

function gerarBotoes() {
    let botoesHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letra =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letra + `'
        onClick="handleGuess('` + letra + `')"
      >
        ` + letra + `
      </button>
    `).join('');
    document.getElementById('teclado').innerHTML = botoesHTML;
}

function palavra(){
    wordStatus = resposta.split('').map(letra=>(tentativas.indexOf(letra) >= 0 ? letra : "_")).join(' ');
  
    document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

document.getElementById("maxErros").innerHTML = maxErros;

palavraAleatoria();
gerarBotoes();
palavra();