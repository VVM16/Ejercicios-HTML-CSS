 function nota_literal() {
    let n=document.getElementById("nota").value;
    if (n<0) {
        document.getElementById("texto").innerHTML= "ERROR";
    } 
    else if (n<5) {
        document.getElementById("texto").innerHTML= "Suspendido";
    } else if (n<6) {
        document.getElementById("texto").innerHTML= "Suficiente";
    } 
    else if (n<7) {
        document.getElementById("texto").innerHTML= "Bien";
    }
    else if (n<9) {
        document.getElementById("texto").innerHTML= "Notable";
    }
    else if (n<=10) {
        document.getElementById("texto").innerHTML= "Excelente";       
    }   
    else {
        document.getElementById("texto").innerHTML= "ERROR";       
    }   
 }