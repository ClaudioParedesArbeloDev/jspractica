const persona = {
    nombre: "Claudio",
    apellido: "Hernandez",
    edad: 25,
    sexo: "Masculino",
    domicilio: "Santiago 515",
};

console.log(persona.domicilio);

console.log(persona["domicilio"]);

let nombre = "Susana";

console.log(nombre);

nombre = "Claudio";

console.log(nombre);

console.log(persona.apellido);

persona.apellido = "Arbelo";

console.log(persona);

function People(name, surname, age, sex, city){
    this.nombre = name;
    this.apellido = surname;
    this.edad = age;
    this.sexo = sex;
    this.domicilio = city;
}

function Herramienta(description, price, stock){
    this.descripcion = description;
    this.precio = price;
    this.stock = stock;
}

const people1 = new People("Jorge", "Gomez", 30, "Masculino", "Santiago 515");

console.log(people1);



console.log(nombre);

console.log(nombre.length);

if(nombre.length === 0){
    console.log("Complete este campo");
}else{
    console.log("El nombre ingresado es: " + nombre);
}

console.log(nombre.toUpperCase());

console.log(nombre.toLocaleLowerCase());

let email = "ClAuDiO@gmail.com";

console.log(email);

console.log(email.toLowerCase());

let producto = "televisor";

let productoBuscado = "Televisor";

if(producto === productoBuscado.toLowerCase()){
    console.log("Producto encontrado");
}else{
    console.log("Producto no encontrado");
}
//Metodo personalizado
function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.iva = function(precio){
        return precio + (precio * 0.21);
    }
    this.descuento = function(precio){
        return precio - (precio * 0.10);    
    }
}

const producto1 = new Producto("Televisor", 1000, 10);

console.log(producto1.iva(1000));