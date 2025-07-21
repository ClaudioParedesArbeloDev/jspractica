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

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero)=>{
    console.log(numero**2);
})

const cursos = [
    {nombre: "Curso 1", horas: 10},
    {nombre: "Curso 2", horas: 20},
    {nombre: "Curso 2", horas: 30},
    {nombre: "Curso 3", horas: 30},
]

let resultado = cursos.find((i)=> i.nombre === "Curso 2");

console.log(resultado);

let resultadoFilter = cursos.filter((i)=> i.horas < 30);

console.log(resultadoFilter);
