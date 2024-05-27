function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Ejemplo: getRandomArbitrary(1, 10) devolverá un número entre 1 (incluido) y 10 (excluido)


var num1, num2;
console.log("Vamos a jugar a las adivinanzas");
console.log("El sistema elegirá un número al azar entre 0 y 9");
console.log("Si aciertas ganarás un premio!!");
console.log("Si fallas... puedes volver a empezar jaja");
do {
    num1 = prompt("Por favor digita un número del 0 al 9");
} while (num1<0 && num1>10);
num2 = getRandomArbitrary(0,10);
if (num1 == num2) {
    console.log("Acertaste!!! Ganaste un viaje a Narnia");
} else {console.log("Lo siento... inténtalo de nuevo");}