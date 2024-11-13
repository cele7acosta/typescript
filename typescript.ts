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


// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

function productosSinStock(productos: Producto[]): string[]{
    return productos.filter(producto => !producto.enStock).map(producto =>producto.nombre);
}

console.log("Productos sin Stock:",productosSinStock(productos));

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
interface Cliente {
    nombre:string;
    edad: number;
    esVip: boolean; //propiedad de tipo booleano para filtrar en las funciones
    saldo: number;
}
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
let clientes: Cliente[]=[
    {nombre:"Felipe", edad: 28, esVip: true, saldo:1000},
    {nombre:"Luis", edad: 35, esVip: false, saldo:500},
    {nombre:"Carlos", edad: 22, esVip: true, saldo:1500},
    {nombre:"Sofia", edad: 30, esVip: false, saldo:700},
    {nombre:"Jorge", edad: 40, esVip: true, saldo:2000},
    {nombre:"Laura", edad: 25, esVip: false, saldo:300},
];
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
function clientesVip(clientes: Cliente[]): string[]{
    return clientes.filter(cliente => cliente.esVip).map(cliente =>cliente.nombre);
}
console.log("Clientes VIP:",clientesVip(clientes));

// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
function clientesNoVip(clientes: Cliente[]): string[]{
    return clientes.filter(cliente => !cliente.esVip).map(cliente =>cliente.nombre);
}
console.log("Clientes No VIP:",clientesNoVip(clientes));


// Ejercicio 8: Catálogo de Productos - forEach
// Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
let catalogo = [
    {nombre: "Laptop", precio: 1200},
    {nombre: "Teléfono", precio: 800},
    {nombre: "Tablet", precio: 400},
    {nombre: "Auriculares", precio: 100},
    {nombre: "Monitor", precio: 300},
];
// Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
catalogo.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
});

// Ejercicio 9: Catálogo de Productos - filter
// Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
let productosBaratos = catalogo.filter(producto => producto.precio<50);

// Imprimir productosBaratos en la consola.
console.log("Productos baratos:",productosBaratos);

// Ejercicio 10: Actualización de Inventario - map
// Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
let catalogoConDescuento = catalogo.map(producto =>{
    return {
        nombre: producto.nombre,
        precio: producto.precio * 0.9 //aplicar 10% descuento
    };
});
// Imprimir catalogoConDescuento en la consola.
console.log("Catálogo con descuento: ", catalogoConDescuento);

// Ejercicio 11: Búsqueda de Usuario - find
// Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
let usuarios = [
    {id: 1, nombre: "Alicia", activo: true},
    {id: 2, nombre: "Roberto", activo: false},
    {id: 3, nombre: "Carlos", activo: true},
    {id: 4, nombre: "Delfina", activo: false},
    {id: 5, nombre: "Evelin", activo: true},
];
// Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
let usuarioEncontrado = usuarios.find(usuario => usuario.id ===3);

// Imprimir en la consola el objeto del usuario encontrado.
console.log("usuario encontrado: ", usuarioEncontrado);

// Ejercicio 12: Contador de Usuarios Activos - filter y length
// Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
let usuariosActivos = usuarios.filter(usuario => usuario.activo === true);

// Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 
console.log("Cantidad de usuarios activos: ", usuariosActivos.length);

// Ejercicio 13: Actualización de Estado de Usuarios
// Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
usuarios.forEach(usuario => {
    usuario.activo = false;
});

// Imprimir el array usuarios para verificar que todos los usuarios están inactivos.
console.log("Usuarios después de desactivarlos: ", usuarios);

// Ejercicio 14: Formateo de Productos para Mostrar - map
// Usar el array catalogo.
// Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
// Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
let productosFormato = catalogo.map(producto =>`Producto: ${producto.nombre}, Precio: $${producto.precio}`);

// Imprimir el array productosFormato en la consola.
console.log("Productos en formato de texto: ", productosFormato);

// Ejercicio 15:
// Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:
// const users: unknown[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];
// function logPerson(user: unknown) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
// console.log('Users:');
// users.forEach(logPerson);

// Creo la interfaz "User" 
interface User {
    name: string;
    age: number;
    occupation?: string; //la propiedad occupation es opcional
}

// Creo el array "users" 
const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

//Funcion que recibe un usuario de tipo "User"
function logPerson(user: User){
    console.log(` - ${user.name}, ${user.age}`);
}

//Mostrar en consola la lista de usuarios
console.log('Users:');
users.forEach(logPerson);


// Ejercicio 16:
// Vamos a volver a usar la interfaz User del ejercicio anterior.
// Crear una nueva interfaz Admin segun los datos que tenemos.
// Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
// Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 
// type Person = User;
// const persons: User[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
// function logPerson(user: User) {
//     console.log(` - ${user.name}, ${user.age}`);
// }
// persons.forEach(logPerson);


//Creo la interfaz "Admin" que extiende de "User"
interface Admin extends User {
    role: string; //propiedad adicional para los administradores
}

//Corrijo el tipo "Person" para que acepte tanto "User" como "Admin"
type Person = User | Admin;

// Creo un array de "persons" que contenga tanto usuarios como administradores
const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'  // Esta persona es un Admin
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'  // Esta persona también es un Admin
    }
];

//Funcion para mostrar la informacion de la persona
function logPerson2(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);
}

//Recorrer el array de personas y mostrar la informacion 
persons.forEach(logPerson);