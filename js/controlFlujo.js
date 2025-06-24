//control de flujo
//if - significa que se ejecuta solo si la condicion es verdadera

let edad = 18;

if (edad >= 18){
    console.log("Eres mayor de edad");
}

let usuario = "Josefina";

if(usuario == "Jose"){
    console.log("Tu te llamas Jose")
}

// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que
// == igual
// != distinto
// !== estricamente distinto
// === estrictamente igual

let numberA = 5;
let numberB = "5";

if(numberA != numberB){
    console.log("A es distinto a B")
}else{
    console.log("A es igual a B")
}

let nombre = "Roberto";

if(nombre === "Claudio"){
    console.log("El nombre es: " + nombre)
}else if(nombre === "Jhony"){
    console.log("El nombre es: " + nombre)
}else if(nombre === "Roberto"){
    console.log("El nombre es: " + nombre)
}else if(nombre === "Jhony"){
    console.log("el nombre es: " + nombre)
}else{
    console.log("A ti no te conozco")
}

let apellido = "Paredes";

if((nombre === "Claudio") || (apellido === "Paredes")){
    console.log("bienvenido")
}else{
    console.log("rechazado")
}

const mail = "claudioparedes@gmail.com";
const password = "123456";

if(mail === "claudio@gmail.com" && password === "123456"){
    console.log("Bienvenido")
}else{
    console.log("Rechazado")
}

