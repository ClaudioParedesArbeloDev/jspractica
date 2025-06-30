let objeto = {nombre: "Claudio", edad: 20, color: "rojo", domicilio: "San Martin"}

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

console.log (suma);

let nombres = ["Claudio", "Pedro", "Juan", "Carlos", "Alexis", "Martin"];



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





//el bucle for va se va a componer de la palabra for ( declara una variable que 
// diga desde donde va a comenzar) despues del punto y coma se va a poner hasta 
// donde va a ir el bucle, despues se va a colocar que va a hacer cada vez que de una vuelta.
