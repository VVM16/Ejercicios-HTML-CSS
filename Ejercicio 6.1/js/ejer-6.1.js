function multiplica() {
    document.getElementById("resultado").innerHTML = "";
    let text = "";
    let num_tabla = document.getElementById("num-princ").value;
    let result;
  for (let i = 0; i <= 10; i ++)  {
  result = num_tabla * i;
  document.getElementById("resultado").innerHTML += `${num_tabla} x ${i} = ${num_tabla * i}<br>`

}

}