//Desafío1: contar cuantas veces existe una palabra en la frase, sin considerar espacios ni otros caracteres.

let frase="  Prueba   45 una.   fRase .  _'";
let fraseLimpia;

//let variosEspacios = /\s+(?=\s)/g;
let soloLetras = /[^a-zA-Z]/g;
let variosEspacios = /\s+/g;
let espacioInicio = /^ /g;
let espacioFin = / $/g;

fraselimpia = frase.replace(soloLetras," ");
fraseLimpia = fraselimpia.replace(variosEspacios, " ");
fraseLimpia = fraseLimpia.replace(espacioInicio,"");
fraseLimpia = fraseLimpia.replace(espacioFin,"");

let fraseDividida = fraseLimpia.split(" ");
let totalPalabras = fraseDividida.length;

console.log(frase);
console.log(fraseLimpia);
console.log(totalPalabras);
console.log(fraseDividida);

//recorrer con for