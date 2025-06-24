//como declarar una función

/* function saludar(){
    console.log("Hola mundo");
    console.log("Hola Clase");
};

saludar();

saludar();

saludar();

 */

/* let nombreIngresado = prompt("Ingresa tu nombre");
console.log("Hola " + nombreIngresado); */

/* function pedirNombre(){
    let nombreIngresado = prompt("Ingresa tu nombre");
    console.log("Hola " + nombreIngresado);
}

pedirNombre();

pedirNombre();

pedirNombre(); */


/* function nombreCompleto(nombre, segundoNombre, Apellido){
    console.log("Hola, tu nombre es " + nombre + " " + segundoNombre + " " + Apellido);
}

let parametro1 = prompt("Ingresa tu nombre");
let parametro2= prompt("Ingresa tu segundo nombre");
let parametro3 = prompt("Ingresa tu apellido");

nombreCompleto(parametro1, parametro2, parametro3);
nombreCompleto("Angel", "Jose", "Perez"); */
/* 
let numero = 0;

console.log(numero);

numero = 2;

console.log(numero);
 */

 let resultado = 0;
/* 
function sumar(numero1, numero2){
    resultado = numero1 + numero2;
}

sumar(2, 3);

function mostrar(mensaje){
    console.log(mensaje);
}

mostrar("Hola mundo");

mostrar(resultado)


function calculadora (operacion, numero1, numero2){
    switch(operacion){
        case "+":
            console.log( numero1 + numero2);
            break;
        case "-":
            console.log( numero1 - numero2);
            break;
        case "*":
            console.log( numero1 * numero2);
            break;
        case "/":
            console.log( numero1 / numero2);
            break;
        default:
            console.log("Operación no reconocida");
            break;      
    }
}

calculadora("+", 2, 3);
calculadora("-", 2, 3);
calculadora("*", 2, 3);
calculadora("/", 2, 3); */


// Variable Global
let global = "Hola Mundo";

console.log(global);

const local = "Hola Mundo";
// Variable Local
//Funcion sin parametros
function declaracionLocal(){
    let local = "Hola Code";
    
}

console.log(local);

//Funciones anonimas

const funcionAnonima = function(){
    return "Hola Mundo";
};

console.log(funcionAnonima());


//funciones sin parametros

function primerFuncion(){
    console.log("Hola Mundo");
}

primerFuncion();

//funcion con parametros

function segundaFuncion(nombre){
    console.log("Hola " + nombre);
}

segundaFuncion("Claudio");

//funcion anonima

const terceraFuncion = function(){
    return "Esta es una funcion anonima";
}

console.log(terceraFuncion());


//Funcion Flecha
const suma = (numero1, numero2) => {return numero1 + numero2};

console.log(suma(2, 3));

const resta = (numero1, numero2) => numero1 - numero2;

console.log(resta(4, 3));


function esPar(numero){
    if(numero % 2 === 0){
        return "Es par";
    }else{
        return "No es par";
    }
}

console.log(esPar(3));

// E-commerce nos ingresa 100 pesos, 20 se van en impuestos y 5 se van a ir en transporte.

