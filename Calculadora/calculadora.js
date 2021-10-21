let numero = [];
let operacao = 0;
let valores = [];
let visor = document.getElementById("tela");
let expressao = [];

function numeros(valor){
    if(numero.length == 8){}
    else{
        numero.push(valor);
        //alteraVisor(valor);
    }
}

function operador(operador){
    if(operacao==0){
        operacao = operador;
        valores.push(numero.join(""));
        numero = [];
       // alteraVisor(operacao);
    }
}

function calcula(){
    valores.push(numero.join(""));
    numero = [];

    switch (operacao) {
        case '-':
            console.log(valores[(valores.length -2)] - valores[(valores.length -1)]);
            visor.value = (valores[(valores.length -2)] - valores[(valores.length -1)]); 
            //valores.push(visor.value);
            break;
        case '+':
            console.log(parseInt(valores[(valores.length -2)]) + parseInt(valores[(valores.length -1)]));
            visor.value = (parseInt(valores[(valores.length -2)]) + parseInt(valores[(valores.length -1)])); 
            break;
        case '*':
            console.log(valores[(valores.length -2)] * valores[(valores.length -1)]);
            visor.value = (valores[(valores.length -2)] * valores[(valores.length -1)]); 
            break;
        case '/':
            console.log(valores[(valores.length -2)] / valores[(valores.length -1)]);
            visor.value = (valores[(valores.length -2)] / valores[(valores.length -1)]); 
            break;
        default:
            break;
    }
    operacao=0;
}

// function alteraVisor(){
//     expressao.push()
//     visor.value = ;
// }



















/*let operador = 0;
let numero = [];
let resultados = [];

function botao(valor){
    if(typeof valor != "number"){
        if(operador == 0){
            operador = valor;
            resultados.push(numero.join(""));
            numero = [];
        }
    }
    else{
        numero.push(valor);
    }    
}

function calcula(){
    resposta = 0;
    resultados.push(numero.join(""));
    switch (operador) {        
        case '-':
            resposta= resultados[resultados.length-2] - resultados[resultados.length -1];
            console.log(resposta);
            operador = 0;
            break;
        case '+':
            
            break;

        case '*':
            
            break;     
        case '/':

            break;
        case '=':

            break;
        default:
            break;
    }
}*/