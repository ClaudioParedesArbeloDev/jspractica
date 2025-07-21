/* let contador = 0;

for (let i = 0; i <= 10; i++){

    contador += i;
    console.log(contador);
}

console.log('-----------------');
console.log(contador);

// 0 1 2 3 4 5 6 7 8 9 10
// 1 3 6 10 15 21 28 36 45 55
 */

/* 
function mayorQue(n){
    return (m)=> m > n;
}

let mayorQueDiez = mayorQue(10)

// mayorQueDiez = mayorQue(10)
// return (m)=> m > 10;

console.log(mayorQueDiez(5));

//return (5) => 5 > 10;

console.log(mayorQueDiez(15));
 */


/* function asignarOperacion(op){
    if(op == "+"){
        return (a, b) => a + b;
    }else if(op == "-"){
        return (a, b) => a - b;
    }
}

let operacion = prompt("Ingresa la operación");

let a = parseInt(prompt("Ingresa el primer número"));
let b = parseFloat(prompt("Ingresa el segundo número"));

let resultado = asignarOperacion(operacion)

alert(resultado(a, b)); */

/* function porCadaUno(arr, fn){
    for(const el of arr){
        fn(el)
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nombres = ["Alexis", "Ana", "Jony", "Hipolito", "Martin"]

porCadaUno(nombres, console.log)

console.log('-----------------');

let acumulador = 0;

function acumular(arr){
    acumulador += arr;
}

porCadaUno(numeros, acumular);

console.log(acumulador);

function sumar(a, b){
    return a + b;
}

let sumatoria = function (a, b) { return a + b }; //funcion anonima

let suma = (a, b) =>  a + b;//funcion flecha

const duplicado = [];

porCadaUno(numeros, (el)=>{duplicado.push(el*2)})

console.log(duplicado); */

 /* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const numerosTotal = numeros.reduce((acumulador, numero)=> acumulador + numero, 0);

 console.log(numerosTotal); */

/* numeros.forEach((numero)=>{
    console.log(numero**2);
}) */

/* const cursos = [
    {nombre: "Curso 1", horas: 10},
    {nombre: "Curso 2", horas: 20},
    {nombre: "Curso 2", horas: 30},
    {nombre: "Curso 3", horas: 30},
] */

/* let resultado = cursos.find((i)=> i.nombre === "Curso 2");

console.log(resultado);

let resultadoFilter = cursos.filter((i)=> i.horas < 30);

console.log(resultadoFilter);

console.log(cursos.some((i)=>i.nombre === "Curso 2"));

 */
/* const resultadoMap = cursos.map((i)=> {
    return {
        Nombre: i.nombre + ' ' + 'Pasado por el map',
        Horas: i.horas + 10
    }
});

console.log(resultadoMap); */

/* const products = [
    {name: "Product 1", price: 10},
    {name: "Product 2", price: 20},
    {name: "Product 3", price: 30},
    {name: "Product 4", price: 40},
    {name: "Product 5", price: 50},
]

const resultadoMap = products.map((i)=> {
    return {
        Nombre: i.name,
        Precio: i.price * 1.21
    }
});

console.log(resultadoMap);
 */
/* 
const numerosParaOrdenar = [ 3, 12, 20, 1, 5, 24, 14, 16]

console.log(Math.max(...numerosParaOrdenar));

console.log(Math.ceil(2.56))

console.log(Math.floor(2.56))

console.log(Math.round(2.46))
 */




/* numerosParaOrdenar.sort((a, b) => a - b);

console.log(numerosParaOrdenar);

numerosParaOrdenar.sort((a, b)=> b - a)

console.log(numerosParaOrdenar);

const nombres = ["Alexis", "Ana", "Jony", "Hipolito", "Martin"]

nombres.sort((a, b) => b - a);

console.log(nombres); */

/* console.log(new Date()); */

const hoy = new Date('July 20, 2025');

console.log(hoy.getFullYear());

console.log(hoy.getMonth());

console.log(hoy.getDate());

console.log(hoy.toDateString());

console.log(hoy.toLocaleString());

console.log(hoy.toLocaleDateString());

console.log(hoy.toLocaleTimeString());

console.log(hoy.toTimeString());

console.log(hoy.getDay())