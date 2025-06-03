function init() {
     let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let result= Mitjana(num1, num2)
    document.getElementById("resultado").innerHTML= " La media aritmética es "  + result;
}
function Mitjana(a, b) {
    let x= (Number(a) + Number(b)) / 2;
    return x;
}