const numeros = [1,2,3,4,5,5,6]
//console.log(numeros[2]);

const nombres = ["pedro","juan","diego"]
//console.log(nombres);

console.log(numeros.length);

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index])
    
}
console.log("--------------");
numeros.push(200);
numeros.unshift(300);
numeros.pop();
console.log(numeros);

for (const iterador of numeros) {
    console.log("XXXXX " + iterador);
        
}

numeros.forEach(function (eL) {
    console.log("YYYY " + eL);
});

const numeroNuevos = numeros.map(function (eL) {
    return eL*2;
});

console.log(numeroNuevos);

const numerosmayores = numeros.filter(eL=> eL>10);
console.log("uso de filter. " + numerosmayores);

const sumaArreglo = numeros.reduce((total,eL)=>total+eL,0);
console.log(numeros);
console.log(sumaArreglo);