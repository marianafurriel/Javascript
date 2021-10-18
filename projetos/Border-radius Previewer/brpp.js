function borda(){

    let topLeft = document.getElementById("topLeft").value;
    let topRight = document.getElementById("topRight").value;
    let botRight = document.getElementById("botRight").value;
    let botLeft = document.getElementById("botLeft").value;
    let container = document.getElementById("container").style;
    let textTL = document.getElementById("topL");
    let textTR = document.getElementById("topR");
    let textBL = document.getElementById("botL");
    let textBR = document.getElementById("botR");

    if (topLeft!=""){
        container.borderRadius = topLeft+"px";
        textTL.innerHTML = "border-top-left-radius: "+container.borderRadius+"; <br>";
    }

    if (topRight!=""){
        container.borderTopRightRadius = topRight + "px";        
        textTR.innerHTML = "border-top-right-radius: "+container.borderTopRightRadius+"<br>";  
        textTR.style.display = "block";
    }
    
    if (botRight!=""){
        container.borderBottomRightRadius = botRight + "px";
        textBR.innerHTML = "border-bot-right-radius: "+container.borderBottomRightRadius+"<br>"  ;
        textBR.style.display = "block";

    }

    if (botLeft!=""){
       container.borderBottomLeftRadius = botLeft + "px";
       textBL.innerHTML = "border-bot-left-radius: "+container.borderBottomLeftRadius+"<br>"  ;
       textBL.style.display = "block";
    }

    if (((topLeft!="")&&(topRight=="")&&(botLeft=="")&&(botRight=="")) || ((topLeft == topRight)&&(topRight == botRight)&&(botRight==botLeft))){    
        container.borderRadius = topLeft+"px";
        textTL.innerHTML = "border-radius: "+container.borderRadius+"<br>"
        //textTL.style.display = "none;"
        textBL.style.display = "none";
        textTR.style.display = "none";
        textBR.style.display = "none";

    }
}

