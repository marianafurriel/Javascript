function calculaBorda(){
    var pixel = "px"
    

    if ((document.getElementById("topLeft").value)!="") {
        document.getElementById("container").style.borderRadius = document.getElementById("topLeft").value+pixel
        exibir("topLeft")
    }    

    if ((document.getElementById("topRight").value)!="") {
        document.getElementById("container").style.borderTopRightRadius = document.getElementById("topRight").value+pixel
        exibir("topRight")
    }
    
    
    if ((document.getElementById("botLeft").value)!="") {
        document.getElementById("container").style.borderBottomLeftRadius = document.getElementById("botLeft").value+pixel
        exibir("botLeft")
    } 

    if ((document.getElementById("botRight").value)!="") {
        document.getElementById("container").style.borderBottomRightRadius = document.getElementById("botRight").value+pixel
        exibir("botRight")
    }
    if (((document.getElementById("topLeft").value)!="")&&
    ((document.getElementById("topRight").value)=="0")&&
    ((document.getElementById("botLeft").value)=="0")&&
    (((document.getElementById("botRight").value)=="0"))) {
        exibir("somenteTopLeft")
    }  
}

function limpar(){
    document.getElementById("container").style.borderRadius = "0px"
    document.getElementById("topL").style.display = "none"
    document.getElementById("topR").style.display = "none"
    document.getElementById("botL").style.display = "none"
    document.getElementById("botR").style.display = "none"
}

function exibir(a){
    switch (a){
        case "topLeft":
            document.getElementById("topL").innerHTML = "border-radius:  "+document.getElementById("topLeft").value + "px;"
            document.getElementById("topL").style.display = "block"
            break
        case "topRight":
            document.getElementById("topR").innerHTML = "border-top-right-radius: "+document.getElementById("topRight").value + "px;"
            document.getElementById("topR").style.display = "block"
            break
        case "botLeft":
            document.getElementById("botL").innerHTML = "border-bottom-left-radius: "+document.getElementById("botLeft").value + "px;"
            document.getElementById("botL").style.display = "block"
            break
        case "botRight":
            document.getElementById("botR").innerHTML = "border-bottom-left-radius: "+document.getElementById("botRight").value + "px;"
            document.getElementById("botR").style.display = "block"
            break
        case "somenteTopLeft":
            document.getElementById("topL").innerHTML = "border-top-left-radius: "+document.getElementById("topLeft").value + "px;"
            document.getElementById("topL").style.display = "block"
            document.getElementById("topR").style.display = "none"
            document.getElementById("botL").style.display = "none"
            document.getElementById("botR").style.display = "none"
    }
    

}