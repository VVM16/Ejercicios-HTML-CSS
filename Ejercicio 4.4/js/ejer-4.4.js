function suma() {
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let result= Number(num1) + Number(num2);
    document.getElementById("resultado").innerHTML= " La suma de "  + num1 +  " y "  + num2 +  " es "  + result;
    }

function resta() {
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let result= num1 - num2
    document.getElementById("resultado").innerHTML= " La resta de "  + num1 +  " y "  + num2 +  " es "  + result;
    }

function multiplicacion() {
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let result= num1 * num2
    document.getElementById("resultado").innerHTML= " La multiplicacion de "  + num1 +  " por "  + num2 +  " es "  + result;
    }

function division() {
    let num1=document.getElementById("numero1").value;
    let num2=document.getElementById("numero2").value;
    let result= num1 / num2
    document.getElementById("resultado").innerHTML= " La division de "  + num1 +  " entre "  + num2 +  " es "  + result;
    }
