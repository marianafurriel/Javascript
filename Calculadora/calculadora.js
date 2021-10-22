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
        if(numero.length>0){
            valores.push(parseInt(numero.join("")));
            numero = [];
        }
       // alteraVisor(operacao);
    }
}

function calcula(){
    if(numero.length>0){
        valores.push(parseInt(numero.join("")));
        numero = [];
    }

    switch (operacao) {
        case '-':
            console.log((valores[(valores.length -2)] - valores[(valores.length -1)]));
            visor.value = (valores[(valores.length -2)] - valores[(valores.length -1)]); 
            valores.push(parseInt(visor.value));
            break;
        case '+':
            console.log((valores[(valores.length -2)]) + (valores[(valores.length -1)]));
            visor.value = (parseInt((valores[(valores.length -2)])) + (parseInt(valores[(valores.length -1)]))); 
            valores.push(parseInt(visor.value));
            break;
        case '*':
            console.log(valores[(valores.length -2)] * valores[(valores.length -1)]);
            visor.value = (valores[(valores.length -2)] * valores[(valores.length -1)]);
            valores.push(parseInt(visor.value));
            break;
        case '/':
            console.log(valores[(valores.length -2)] / valores[(valores.length -1)]);
            visor.value = (valores[(valores.length -2)] / valores[(valores.length -1)]); 
            valores.push(parseInt(visor.value));
            break;
        default:
            break;
    }
    operacao=0;
}

// function alteraVisor(){
//     expressao.push()
//     visor.value = ;
// 
//}