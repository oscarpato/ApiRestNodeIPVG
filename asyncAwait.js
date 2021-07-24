let paises = [];

const agregarPais = pais => new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (pais=="Canada") {
            reject("El Pais no es Latam");
        }
        paises.push(pais);
        resolve(`Agregando: ${pais}`);
    }, 3000);
}
);

//función asincrona
async function iniciarProceso() {
    try {
        let resultado = await agregarPais("Chile");
        console.log(resultado);
        resultado = await agregarPais("Canada");
        console.log(resultado);
        resultado = await agregarPais("Argentina");
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
    
}


iniciarProceso();