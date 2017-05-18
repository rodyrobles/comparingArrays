// Para almacenar cada arreglo en su variable.
var a = [121, 144, 19, 161, 19, 144, 19, 11];
var	b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

/* Definicion de la funcion con sus argumentos (arreglos a comparar).
Esta funcion checa si los 2 arreglos tienen el mismo numero de elementos; y si los elementos
en el arreglo "a" elevados al cuadrado son iguales a los elementos en el arreglo "b" devuelve
True. */

function comp(a,b) {
	if (a===null || b===null) {//Para comprobar si alguno de los 2 arreglos es nulo
		return false;
	} else if (a.length != b.length) { //Para comprobar que los 2 arreglos tengan el mismo numero de elementos
		return false;
	} else {
//Ordenamiento de arreglos y almacenamiento en otras variables para preservar los arreglos originales.
		var aOrdenado = a.sort(function(a, b) {
		  return a - b;
		});		
		var bOrdenado = b.sort(function(a, b) {
		  return a - b;
		});
//Definicion del ciclo para comparar uno a uno los elementos de los 2 arreglos 
		for (var i=0; i<aOrdenado.length; i++) { 
			if (aOrdenado[i]*aOrdenado[i] !== bOrdenado[i]) { 
				return false;
				}
			}
			return true; //Si no encuentra diferencias en cada comparacion, al final del ciclo devuelve True.
		}
};
console.log(comp(a,b)); //llamado de la funcion y muestra de resultado en la consola.



// Codigo realizado por Rodolfo Gutierrez Robles.
