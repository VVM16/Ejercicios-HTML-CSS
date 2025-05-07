// CONCATENAR //
function concatenar(){
let cad1=document.getElementById("cadena1").value;
let cad2=document.getElementById("cadena2").value;
let result= (cad1 + cad2)
document.getElementById("result-izq-up").innerHTML= " Así quedaría mezclado: " + result;
}


// LONGITUD //
function longitud(){
let cad3=document.getElementById("cadena3").value;
console.log(cad3.length)
document.getElementById("result-der-up").innerHTML= "La cadena mide: " + cad3.length + " caracteres";
}


// REEMPLAZAR //
function reemplazar(){
let cad4=document.getElementById("cadena4").value;
let cad5=document.getElementById("cadena5").value;
let cad6=document.getElementById("cadena6").value;
document.getElementById("result-izq-down").innerHTML= " La cadena nueva es esta: " + cad4.replace( cad5, cad6 ) ;
}


// DIVISION //
function division (){
let cad7=document.getElementById("cadena7").value;
let cad8=document.getElementById("cadena8").value;
document.getElementById("result-der-down").innerHTML= cad7.split(cad8) ;
}
