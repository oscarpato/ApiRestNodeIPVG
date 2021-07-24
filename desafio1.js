//Desafío1: contar cuantas veces existe una palabra en la frase, sin considerar espacios ni otros caracteres.

let frase="  Prueba   45 de. uNa  fRase frase. de _'";
let fraseLimpia;

let soloLetras = /[^a-zA-Z]/g;
let variosEspacios = /\s+/g;
let espacioInicio = /^ /g;
let espacioFin = / $/g;

fraselimpia = frase.replace(soloLetras," ");
fraseLimpia = fraselimpia.replace(variosEspacios, " ");
fraseLimpia = fraseLimpia.replace(espacioInicio,"");
fraseLimpia = fraseLimpia.replace(espacioFin,"");
let Palabraminus = fraseLimpia.toLowerCase();
let fraseDividida = Palabraminus.split(" ");

//console.log(frase);
//console.log(fraseLimpia);
//console.log(fraseDividida);


const repete = fraseDividida.reduce((acumula, palabra) => (
   acumula[palabra] ? acumula[palabra]++ : acumula[palabra]=1 , acumula
), {});

console.log(repete);