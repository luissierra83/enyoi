let largoPalabra,contador,recorredor,suma, palabra, control, mayu;

palabra = prompt("Por favor escribe una palabra y el programa te dirá cuantas vocales tiene:");
mayu = palabra.toUpperCase();
largoPalabra = palabra.length;
recorredor = 0;
control = 0;
while (recorredor < largoPalabra){
    control = mayu.substring (recorredor+1,recorredor+1); 
    if (control == "A" || control == "E" || control == "I" || control == "O" || control == "U") {
        suma++;
    }
    recorredor = recorredor + 1;
} 

console.log ("La palabra " + palabra + " tiene " + suma + " vocales");