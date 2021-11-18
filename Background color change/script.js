var letters = '0123456789ABCDEF';
var color = '#';

const botao = document.querySelector(".botao")
const textoCor = document.querySelector(".cor")
changeColor();

botao.addEventListener("click",changeColor)

function changeColor(){
    textoCor.textContent = generateColor();  
    document.body.style.backgroundColor = color;
}

function generateColor(){    
    color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


