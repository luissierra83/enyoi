Algoritmo Fibonacci
	Definir num1, num2, iter, limite, fib Como Entero
	Escribir "Este programa te va a generar una cierta cantidad de numeros que pertenecen a la sucesión de fibonacci"
	Escribir "Esa cantidad la vas a elegir tu, por favor digita un numero:"
	Leer limite
	Escribir "La serie de fibonacci es la siguiente:"
	fib = 0
	num1 = 1
	Para iter = 1 Hasta limite Con Paso 1 Hacer
		Escribir fib,", " Sin Saltar
		num2 = fib + num1 //guardamos la suma
		fib = num1 // iniciamos la variable en el siguiente número
		num1 = num2 //pasamos esa variable a num2 para reiniciar la operación
	Fin Para
	
FinAlgoritmo
