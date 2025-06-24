//variables
//una variable es un espacio de memoria que se puede usar para guardar datos

var nombre = "Claudio"; //Esta era la forma de declarar una variable con ES5

let edad = 20; //Es una variable que puede cambiar

const color = "rojo"; //Es una variable que no puede cambiar

//Tipos de variables

//Cadena de texto o string y esta se va a representar con comillas

//Number y esta se representa con numeros pero sin comillas

//Dentro de las number estan las int y las float

//Boolean y esta se representa con true o false

// undefined y esta es una variable que no tiene valor por defecto

// null y esta es una variable que no tiene valor por defecto

//Control de flujo

if (edad > 18) {
    console.log("Eres mayor de edad");
}

//la declaracion de el control de flujo que puede ser if, else if, else, switch, dentro de los parentesis
// se va a colocar la condicion que puede ser verdadera o falsa
// dentro de las llaves se va a colocar el codigo que se ejecutara si la condicion es verdadera

//Ciclos e iteraciones

//los ciclos e iteraciones son una forma de repetir un bloque de codigo
//y son el buble for, while, do while, for in, for of
// vamos a declarar el ciclo, entre parentesis se va a colocar la condicion
// dentro de las llaves se va a colocar el codigo que se ejecutara

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//funciones son una forma de crear un bloque de codigo que se puede usar
// dentro de la funcion se va a colocar el codigo que se ejecutara
//dentro de los parentesis se va a colocar los parametros que se van a pasar

//funciones sin parametros
function saludar() {
    console.log("Hola mundo");
}

// funciones con parametros
function pedirNombre(nombre) {
    console.log("Hola " + nombre);
}

pedirNombre("Claudio");

// funciones anonimas
const funcionAnonima = function () {
    return "Hola Mundo";
};

console.log(funcionAnonima());  

//funciones flecha
const suma = (numero1, numero2) => {
    return numero1 + numero2;
};

console.log(suma(2, 3));

//a esta funcion flecha se saca la palabra return y se coloca el codigo que se va a devolver
const resta = (numero1, numero2) => numero1 - numero2;

console.log(resta(4, 3));

//objetos

let persona = {
    nombre: "Claudio",
    edad: 20,
    color: "rojo"
};

console.log(persona.edad + " años");

console.log(persona["color"]);

function Herramienta(precio, cantidad, stock, nombre, descripcion) {
    this.price = precio;
    this.quantity = cantidad;
    this.stock = stock;
    this.name = nombre;
    this.description = descripcion;
    this.precioFinal = function (precio) {
        return precio + (precio * 0.21);
    }
};

let herramienta1 = new Herramienta(1200, 9, 15, "Pinza", "Herramienta para agarrar cositas");

for (const propiedad in herramienta1) {
    console.log(herramienta1[propiedad]);
}




console.log(herramienta1.precioFinal(1000))

//Un metodo es una funcion que se puede llamar dentro de un objeto

let street = "San Martin";

console.log(street.length);

console.log(street.toUpperCase());

console.log(street.toLowerCase());

console.log("nombre" in herramienta1)

console.log("name" in herramienta1)
