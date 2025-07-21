/* let objeto = {nombre: "Claudio", edad: 20, color: "rojo", domicilio: "San Martin"}

let arreglo = []

let number = [
    1,
    2,
    3,
    4
]

let name = "Claudio"

let apellido = "Paredes"

console.log(number[0])

console.log(number[5])

let suma = number[0] + number[2]

console.log (suma); */

/* let nombres = ["Claudio", "Pedro", "Juan", "Carlos", "Alexis", "Martin"];



nombres.push("Juan");

nombres.unshift("Roberto");


for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    
}
console.log("-----------")
nombres.shift();

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    
}
console.log("-----------")
nombres.pop();

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    
}

nombres.splice(2, 3);

console.log("-----------");
for (let i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
}
console.log("----------------------")
console.log(nombres.join(" "));
 */

/* let perros = ["salchicha", "golden", "snauzer"];

let gatos = ["Persa", "Egipcio"];

let animales = perros.concat(gatos);

console.log(animales);

let animales2 = animales.slice(1, 4);

console.log(animales2);

console.log(animales.indexOf("salchicha"));

console.log(animales.includes("salchicha"));

console.log(animales.includes("Alexis"));

console.log(animales.reverse());
 */


//el bucle for va se va a componer de la palabra for ( declara una variable que 
// diga desde donde va a comenzar) despues del punto y coma se va a poner hasta 
// donde va a ir el bucle, despues se va a colocar que va a hacer cada vez que de una vuelta.
/* 
let listaDeNombres = [];

let cantidad = 5;

do {
    let entrada = prompt("Introduce un nombre");
    listaDeNombres.push(entrada.toUpperCase());
    console.log(listaDeNombres.length);
} while (listaDeNombres.length != cantidad);

const nuevaLista = listaDeNombres.concat(["ALEXIS", "MARTIN"]);

console.log(nuevaLista);

alert(nuevaLista.join("\n")); */

/* 
const nombres = ["claudio", "pedro", "juan", "carlos", "alexis", "martin"];

const eliminar = (nombre) => {
    let index = nombres.indexOf(nombre.toLowerCase());
    console.log(index);
    if (index != -1){
        nombres.splice(index, 1);
    }
}

eliminar("ClAuDiO");

eliminar("Jony")

console.log(nombres); */

const productos = [
    {id: 1, nombre: 'pinza', precio: 10},
    {id: 2, nombre: 'manzana', precio: 5},
    {id: 3, nombre: 'pera', precio: 20},
    {id: 4, nombre: 'naranja', precio: 15},
    {id: 5, nombre: 'uva', precio: 30}
]

for (const element of productos) {
    console.log(element.nombre)  
    console.log(element.precio)
}