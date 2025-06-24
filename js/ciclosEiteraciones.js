/* for (let i = 0; i <= 10; i++) {
    console.log(i);   
}

let number = parseInt(prompt("Ingresa un numero"));

console.log(number)

let fraccion = parseFloat(prompt("Ingresa un numero"));

console.log(fraccion)

console.log(typeof number);

for (let index = 0; index < 10; index++) {
    let tabla = index * number;
    console.log("el numero " + index + " x " + "el otro numero " + number + " es igual a " + tabla);  
}


for (let i = 0; i < 10; i++) {
    if(i== 5){
        continue;
    }
    console.log(i);
}

let entrada = prompt("Ingresa un dato");

while(entrada != "alexis"){
    console.log("el dato ingresado es: " + entrada);
    entrada = prompt("Ingresa un dato");
}


 
do {
    numero = prompt("Ingresa un numero");
    console.log(numero);
} while (parseInt(numero));


let fruta = prompt("Ingresa una fruta");

switch (fruta) {
    case "manzana":
        console.log("El kg de manzana cuesta $3500")
        break;

    case "naranja":
        console.log("El kg de naranja cuesta $2500")
        break;

    case "pera":
        console.log("El kg de pera cuesta $1500")
        break;

    case "kiwi":
        console.log("El kg de kiwi cuesta $2000")
        break;

    default:
        console.log("No existe esa fruta")
        break;
} */

let entrada = prompt("Ingresa un nombre");

while (entrada != "x") {
    switch (entrada) {
        case "Alexis":
            console.log("Hola Alexis");
            break;
        case "Claudio":
            console.log("Hola Claudio");
            break;
        case "Jhony":
            console.log("Hola Jhony");
            break;
        case "Roberto":
            console.log("Hola Roberto");
            break;
        case "Josefina":
            console.log("Hola Josefina");
            break;
        default:
            console.log("Quien sos?");
            break;
    }

    entrada = prompt("Ingresa un nombre");
}