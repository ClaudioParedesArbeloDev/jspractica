/* let nombre = "Claudio";
const edad = 20;

if(nombre == "Jose"){
    console.log("Es verdadero")
}else if(nombre == "Jhony"){
    console.log("Es Jhony")
}else if(nombre == "Claudio"){
    console.log("Tu te llamas Claudio")
}else{
    console.log("Es falso")
}

if(edad < 18){
    console.log("Eres menor de edad")
}else if(edad < 20){
    console.log("Eres menor de 20")
}else if(edad < 40){
    console.log("Eres menor de 40")
}else if(edad < 60){
    console.log("Eres menor de 60")
}else{
    console.log("Eres mayor de edad")
} */

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("Hola Mundo");
});

let txt = document.getElementById("txt");

txt.addEventListener("keyup", function(){
    console.log(txt.value);
});

let pagina = document.getElementById("contenedor");

pagina.innerHTML = "Hola Mundo";

function saludar(){
    console.log("Hola mundo");
}

saludar();


console.log("------------")

let saludo = function(){
    console.log("Hola mundo");
}

saludo();

let saludito = ()=>{console.log("Hola mundo")}

saludito();

let saludo2 = ()=> console.log("Hola mundo")

saludo2();

console.log("------------")

function saludar2(){
    console.log("Hola mundo");
    console.log("Hola Clase");
}

saludo();
saludo();
saludo();
saludo();
saludo();
saludo();
saludo();
saludo();
