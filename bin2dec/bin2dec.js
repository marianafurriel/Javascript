function converter(){
    binario = document.getElementById("binario").value;
    if (binario === ''){
        document.getElementById("mensagem").innerText = "Por favor digite algo";
        document.getElementById("mensagem").style.display = "block";
        return;
    }
    binario.split('').map((char) => {
        if (char !== '0' && char !== '1'){
            document.getElementById("mensagem").style.display = "block";
            document.getElementById("mensagem").innerText = "Por favor, digite somente números binários";
            document.getElementById("decimal").value = "";
        }
        else{
            decimal = parseInt(binario, 2);
            document.getElementById("decimal").value = decimal;
            document.getElementById("mensagem").style.display = "none";
        }
    });
    
}