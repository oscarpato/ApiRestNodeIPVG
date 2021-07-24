let paises = [];
/*const agregarPais = function(pais){
    paises.push(pais);
}*/

const agregarPais = pais => new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (pais=="Canada") {
                reject("El Pais no es Latam");
            }
            paises.push(pais);
            //reject("Error al ingresar pais");
            resolve(`Agregando: ${pais}`);
        }, 3000);
    }
);

agregarPais("Chile")
    .then((result) => {
        console.log(result);
        console.log(paises);
        return agregarPais("Canada");
    })
    .then((result) => {
        console.log(result);
        console.log(paises);
        return agregarPais("Bolivia");
    })
    .then((result) => {
        console.log(result);
        console.log(paises);
    })
    .catch((err) => {
        console.log(err);
    });