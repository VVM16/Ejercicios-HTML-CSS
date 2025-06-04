function init() {
     let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let result= Maxim(num1, num2)
    document.getElementById("resultado").innerHTML= result;
}
function Maxim(a, b) {
    if (a>b) {
      return (a);
    }
    else {
        return (b);
    }
}