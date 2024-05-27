var num1, num2, iter, limite, fib;
limite = prompt("Este programa te va a generar una cierta cantidad de numeros que pertenecen a la sucesión de fibonacci, Esa cantidad la vas a elegir tu, por favor digita un numero:"); 
console.log("La serie de fibonacci es la siguiente: ");
fib = 0;
num1 = 1;
for (iter = 1; iter <= limite; iter ++){
    console.log(fib);
    num2 = fib + num1;
    fib = num1;
    num1 = num2;
}