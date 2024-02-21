// 1.- Determinar si un número es par/impar
let numberPi;
numberPi = prompt("Ej.1 introducir número");
if (numberPi % 2 == 0) {
  console.log("El número" + numberPi + "es par");
} else {
  console.log("El número" + numberPi + "es impar");
}

/*-------------------------------------------------------------------------------*/
//2.-Determinar que número es mayor o si son iguales
var num1 = prompt("Ej.2 ingresá el primer número");
var num2 = prompt("EJ.2ingresá el segundo número");
if (num1 > num2) {
  console.log(num1 + "Es el mayor");
}
if (num2 > num1) {
  console.log(num2 + " Es el mayor");
}
if (num1 == num2) {
  console.log(num1, num2 + "Son iguales");
}

/*--------------------------------------------------------------------------------*/
/*------------------------------------3.- Determinar múltiplos de 5---------------*/

/*var numA = prompt("Ej.3 Ingresá un número");

if (numA % 5 == 0) {
  console.log(numA + " Es múltiplo de 5");
} else {
  console.log(numA + "No es múltiplo de 5");
}*/
/*------------------------------------------------------------------------------*/
const multiploCin = (numero) => {
  if (numero % 5 == 0) {
    console.log(`El numero  (${numero} )es multiplo de 5`);
  } else {
    console.log(`El numero (${numero})no es multiplo de 5`);
  }
};
multiploCin(27);
/*-------------------------------------Operador Ternario-------------------*/
const multiploCinco = (numero) => {
  numero % 5 == 0
    ? console.log(`El numero es multiplo de 5`)
    : console.log(`El numero no es multiplo`);
};

multiploCinco(25);
multiploCinco(29);
/*----------------------------------------------------------------------------------*/
//4.- Imprimir por consola los números desde 0 hasta el número elegido
let impNum = (numero) => {
  for (let i = 0; i <= 14; i++) {
    console.log(i);
  }
};
impNum();

/*----------------------------------------------------------------------------------*/

//5.- Imprimir una palabra y un número,repetir la palabra tantas veces como el número

const palabraCantidad = (palabra, numero) => {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
};
palabraCantidad(`Hola`, 6);
/*-------------------------------------------------------------------------------------*/
//6.- Crear un array y por consola imprimir todos sus valores

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
imprimirArray([1, 2, 3, 4, 5, 6, 7]);

//7.- Crear un array de 10 numeros e imprimir todos menos el de la 5° posición (1958)

let misMundiales = [
  "1930",
  "1934",
  "1938",
  "1950",
  "1954",
  "1958",
  "1962",
  "1966",
  "1970",
  "1974",
];

console.log(misMundiales);
let pos = 5;
numElementos = 1;
let elementosEliminados = misMundiales.splice(pos, numElementos);
console.log(misMundiales);
/*--------------------------------------------------------------------*/

//............................................................
//8.- Array de números multiplicados por número parámetro

let numeros = [35, 27, 40];
console.log(numeros);

let numerosPorSiete = numeros.map((numero) => {
  return numero * 7;
});
console.log(numerosPorSiete);
console.log(numeros);
//...............................................................
const multiplicarArray = (array, numero) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
};
multiplicarArray([35, 27, 40], 7);
