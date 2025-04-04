function Calcula(){

 let tot = document.getElementById("total").value;
 let comen = document.getElementById("comensales").value;
 let division = (tot / comen).toFixed(2);
 document. getElementById("texto").innerHTML = "Cada uno ha de pagar " + division + "€"
}


