//En vez de una funcion constructora se puede usar una clase

//Las clases son una forma de crear un objeto

function Animal(raza, nombre, edad){
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
}

let gato = new Animal("Gato", "Gatito", 3);


class Persona{
    constructor(nombre, edad, color){
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
    }   
}


let claudio = new Persona("Claudio", 20, "rojo");

for (const propiedad in claudio){
    console.log(claudio[propiedad]);
}


let casa = {
    direccion: "San Martin",
    metros: 200,
    precio: 100000,
    color: "blanca"
}