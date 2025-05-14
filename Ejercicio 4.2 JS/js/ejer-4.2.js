function nota_literal() {
    let n=document.getElementById("nota").value;
    if (n<0) {
        document.getElementById("texto").innerHTML= "No has llegado";
    } else if (n<=10) {
        document.getElementById("texto").innerHTML= "Sí es correcto";
    } else {
        document.getElementById("texto").innerHTML= "Te has pasado";       
    }   
    
}