let paises =[];


function agregarPais(pais, callback) {
        paises.push(pais);  
        console.log(`Agregando : ${pais}`);
        callback();
}

function mostrarPaises() {
    console.log(paises);    
}

function iniciarIngresoPais() {
    setTimeout(() => {
        agregarPais("Chile", mostrarPaises);
        setTimeout(() => {
            agregarPais("Argentina", mostrarPaises);
            setTimeout(() => {
                agregarPais("Peru", mostrarPaises);
                setTimeout(() => {
                    agregarPais("Bolivia", mostrarPaises);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
    
}


iniciarIngresoPais();