Algoritmo Palindromo
	Definir palabra, resultado, test, test2 Como Caracter
	Definir long Como Entero
	Escribir "Este programa analizará una palabra digitada y deducirá si esta es un palíndromo o no"
	Escribir "Por favor digita una palabra:"
	Leer palabra
	palabra = Minusculas(palabra) //por si se digita una mayúscula.
	long = Longitud(palabra)
	Para i=0 Hasta Long-1 Hacer
		test = Subcadena(palabra,i+1,i+1)
		test2 = Subcadena(palabra,long-i,long-i)
		Si test == test2 Entonces
			resultado = "Es palindromo"
		SiNo
			resultado = "No es palíndromo"
		Fin Si
	Fin Para
	Escribir resultado
FinAlgoritmo
