function sumar(numero=0, numero2=0) {
    return numero + numero2;    
}

//console.log(sumar(3,5));

const imprimir = function () {
    return "Imprimiendo..."
}

//console.log(imprimir()); 

//función de fecha - arrow function

const imprimir2 = ()=> {
    return "Imprimiendo 2..."   
}

const imprimir3 = (nombre)=> "Imprimiendo 3...";
console.log(imprimir3());


const imprimir4 = (nombre)=> `Saludos ${nombre} `;
console.log(imprimir4("Oscar"));

const imprimir5 = (nombre, edad)=> {
    edad +=10;
    return `Nombre: ${nombre} Edad: ${edad} `;
}
console.log(imprimir5("Oscar",28));