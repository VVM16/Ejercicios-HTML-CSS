function nota_literal() {
let n=document.getElementById("nota").value;
if (n>=5) {
    document.getElementById("texto").innerHTML= "Has Aprobado";
}
else {
    document.getElementById("texto").innerHTML= "Has Suspendido"
}

}