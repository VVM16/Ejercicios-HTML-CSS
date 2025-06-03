function calcular(opcion) {
  let num1 = document.getElementById("numero1").value;
  let num2 = document.getElementById("numero2").value;
  let result;

  switch (opcion) {
    case 1:
      result = Number(num1) + Number(num2);
      break;
    
    case 2:
      result = num1 - num2;
      break;
    
    case 3:
      result = num1 * num2;
      break;
    case 4:
      result = num1 / num2;
      break;
  }

  document.getElementById("resultado").innerHTML = result;
}
