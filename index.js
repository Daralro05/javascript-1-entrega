// 1.- Determinar si un número es par/impar
/*  let numberPi;
numberPi = prompt("Ej.1 introducir número");
if (numberPi % 2 == 0) {
  console.log("El número" + numberPi + "es par");
} else {
  console.log("El número" + numberPi + "es impar");
}*/ const parImpar = (numero) => {
  if (numero % 2 == 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
};
parImpar(5); //LLamar a la funcion

/*-------------------------------------------------------------------------------*/
// 2.-Determinar que número es mayor o si son iguales
//var num1 = prompt("Ej.2 ingresá el primer número");
//var num2 = prompt("EJ.2ingresá el segundo número");
//if (num1 > num2) {
//  console.log(num1 + "Es el mayor");
//}
//if (num2 > num1) {
//  console.log(num2 + " Es el mayor");
//}
//if (num1 == num2) {
//  console.log(num1, num2 + "Son iguales");
//}
const mayorMenor = (a, b) => {
  if (a > b) {
    console.log(" El número ${a} es mayor que ${b}");
  } else if (a < b) {
    console.log(`El numero ${b} es mayor que ${a}`);
  } else {
    console.log("Los numeros son iguales");
  }
};
mayorMenor(6, 5);
mayorMenor(6, 7);
mayorMenor(8, 8);

/*--------------------------------------------------------------------------------*/
/*------------------------------------3.- Determinar múltiplos de 5---------------*/

/*var numA = prompt("Ej.3 Ingresá un número");

if (numA % 5 == 0) {
  console.log(numA + " Es múltiplo de 5");
} else {
  console.log(numA + "No es múltiplo de 5");
}*/
/*------------------------------------------------------------------------------*/
/*const multiploCinco = (numero) => {
  if (numero % 5 == 0) {
    console.log(`El numero  (${numero} )es multiplo de 5`);
  } else {
    console.log(`El numero (${numero})no es multiplo de 5`);
  }
};*/
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

/*for (let i = 0; i <= 14; i++) {
  console.log(i);
}*/
const imprimirNumeros = (numero) => {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
};
imprimirNumeros(5);

/*----------------------------------------------------------------------------------*/

//5.- Imprimir una palabra y un número,repetir la palabra tantas veces como el número

/*function repeat(string, n) {
  let repeatedString = "";
  while (n > 0) {
    repeatedString += string;
    n--;
  }
  return repeatedString;
}
let response = repeat("hola,", 6);
console.log("===response====");
console.log(response);*/

const imprimirPalabra = (palabra, numero) => {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
};
imprimirPalabra(`Hola`, 6);
/*-------------------------------------------------------------------------------------*/
//6.- Crear un array y por consola imprimir todos sus valores

/*const miMenu = ["ravioles,$15", "fibe de chorizo,$35", "tira de asado,$ 40"];
/*console.log(miMenu);
console.log("comparacion:miMenu is array: ${Array.isArray(miMenu)}");*/

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
imprimirArray([1, 2, 3, 4]);

//7.- Crear un array de 10 numeros e imprimir todos menos el de la 5° posición (1958)

/*let misMundiales = [
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
console.log(misMundiales);*/
const imprimirArrayMenosCinco = (array) => {
  for (let i = 0; i < array.length; i++) {}
};

//-----------------------------------------------
//8.- Array de números multiplicados por número parámetro
/*let numeros = [35, 27, 40];
console.log(numeros);

let numerosPorSiete = numeros.map((numero) => {
  return numero * 7;
});
console.log(numerosPorSiete);*/
//console.log(numeros);
