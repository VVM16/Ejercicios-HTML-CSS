function contador_letras() {
    let cadena = document.getElementById("frase").value;
    document.getElementById("resultado").innerHTML = "";
    let contador=0;
    for (let i = 0; i < cadena.length; i++){
        if (cadena[i]== 'a' || cadena[i]== 'A'){
            contador++;
        }
    }
    document.getElementById("resultado").innerHTML += `La cadena tiene ${contador} letras`
}