let numero = [];
let operacao = 0;
let memoria = [];
let visor = document.getElementById("tela");
let temp = 0;


function numeros(valor){
    if((visor.value ==0) || visor.value == memoria[memoria.length-1]) visor.value = "";
    if(numero.length == 8){}
    else{
        numero.push(valor);
        visor.value += valor; 
    }
}

function operador(operador){
    visor.value = "";
    if(operacao==0){
        operacao = operador;
        if(numero.length>0){
            memoria.push(numero.join(""));
            numero = [];
        }
    }
}

function calcula(){
    if(numero.length>0){
        memoria.push(numero.join(""));
        numero = [];
    }

    switch (operacao) {
        case '-':
            temp = parseInt((meoria[(memoria.length -2)]) - parseInt(memoria[(memoria.length -1)])); 
            testaErro(temp);
            break;
        case '+':
           temp = parseInt(memoria[(memoria.length -2)]) + parseInt(memoria[(memoria.length -1)]); 
            testaErro(temp);
            break;
        case '*':
            temp = parseInt(memoria[(memoria.length -2)]) * parseInt(memoria[(memoria.length -1)]);
            testaErro(temp);
            break;
        case '/':
            temp = parseInt(memoria[(memoria.length -2)]) / parseInt(memoria[(memoria.length -1)]); 
            testaErro(temp);
            break;
        default:
            break;
    }
    operacao=0;
}

function limpar(){
    console.log(operacao);
    console.log(numero.length)
    if(memoria.length>0){
        if((operacao!=0) &&(numero.length==0)){
            operacao = 0;
            visor.value = memoria[memoria.length-1];
            numero = memoria[memoria.length-1].toString().split('');
            console.log("numero"+numero);
           
        }
        else{
            console.log("else")    
            numero.pop()
            console.log(numero)
            visor.value = numero.join("");
        }
    }
    else{
        console.log("else")    
        numero.pop()
        console.log(numero)
        visor.value = numero.join("");
    }
}

function limparTudo(){
    memoria = []
    numero = []
    operacao = 0
    visor.value = 0;
}

function testaErro(resultado){
    if(resultado.toString().split('').length >8){
        visor.value = "ERR";
    }
    else{
        visor.value = resultado;
        memoria.push(resultado);
    }
}