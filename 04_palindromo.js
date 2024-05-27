let palabra, resultado,test,test2, long;
palabra = prompt("Este programa analizará una palabra digitada y deducirá si esta es un palíndromo o no, Por favor digita una palabra:");
palabra = palabra.toLowerCase();
long = palabra.length;
for (var i = 0; i < long-1; i++){
    test = palabra.substring(i, i + 1);
    test2 = palabra.substring(long - i - 1, long - i);
    if (test == test2) {
        resultado = "Es palíndromo";
    } else {resultado = "No es palíndromo";}
}
console.log(resultado);