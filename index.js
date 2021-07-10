//objeto
const persona = {
    nombre:"Oscar",
    apellido:"Salgado",
    edad:32,
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
        

    }
}

//console.log(persona.nombreCompleto());
//console.log(persona.nombre);

let dato = "texto 1";
let dato2 = "texto 2";

console.log(dato.length);
console.log(dato.toUpperCase());
console.log(dato.toLowerCase());
console.log(dato.concat(dato2));
console.log(dato.indexOf("tex"));
console.log(dato.includes("to"));
console.log(dato.trimStart("te"));
console.log(dato.trimEnd());
console.log(dato.replace("text", "audi"));

