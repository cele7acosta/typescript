// Typescript playground: https://www.typescriptlang.org/play 
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1 



// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
let nombre: string = "Celeste";
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
let edad: number = 32;
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
let esEstudiante: boolean = true;
// Imprimir en consola el valor de cada variable usando console.log()
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:",esEstudiante);



// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
function sumar(a: number, b: number): number {
    return a+b;
}
// Llamar a la función e imprimir el resultado.
console.log("Suma:", sumar(10,5));

// Realizar otra función que reste dos números.
function restar(a: number, b: number): number {
    return a-b;
}
console.log("Resta:",restar(10,5));

// Realizar otra función que multiplique dos números.
function multiplicar(a: number, b: number): number {
    return a*b;
}
console.log("Multiplicacion:",multiplicar(10,5));


// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
let numeros: number[] = [1,2,3,4,5];
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())
numeros.forEach(num => console.log("Número multiplicado por 2",num*2));



// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}
// Crear tres objetos que sigan la estructura de la interfaz.
let persona1: Persona = {nombre: "Josefina", edad: 28, esEstudiante: false};
let persona2: Persona = {nombre: "Luisa", edad: 25, esEstudiante: true};
let persona3: Persona = {nombre:"Sofia", edad: 21, esEstudiante: true};
// Imprimir en consola.
console.log("Persona 1:",persona1);
console.log("Persona 2:",persona2);
console.log("Persona 3:",persona3);


// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
let variable: string | number;
// Asigna un valor string y luego cambia su valor a number.
variable = "Hola";
// Imprimir en consola ambos casos.
console.log("Valor como string:",variable);
variable = 42;
console.log("Valor como number:",variable);




// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}
// Crear un array de "productos" con seis objetos que sigan la interfaz.
let productos: Producto[] = [
    {nombre: "Laptop", precio:1000, enStock:true},
    {nombre: "Teléfono", precio: 500, enStock: false},
    {nombre: "Teclado", precio: 50, enStock: true},
    {nombre: "Mouse", precio: 25, enStock: false},
    {nombre: "Monitor", precio: 200, enStock: true},
    {nombre: "Impresora", precio: 150, enStock: true},
];
// Crear una función que reciba el array y retorne los nombres de los productos en stock (sólo en stock). 
// Se puede usar método filter() para esto.

function productosEnStock(productos: Producto[]): string[] {
    return productos.filter(producto => producto.enStock).map(producto =>producto.nombre);
}

console.log("Productos en Stock:",productosEnStock(productos));