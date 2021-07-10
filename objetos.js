const producto = {
    nombre:"Monitor Gamer 20\"",
    precio: 300000,
    informacion: {
        peso:"1Kg",
        medida:"50cm"
    },
    disponibilidad:["Los Angeles","Chillan","Concepcion"]
}

const bodega = {
    nombreBodega: "los Angeles",
    stockBodega: 450
}

const datosObjetos = {...producto, ...bodega};
//console.log(datosObjetos);
console.log(Object.keys(bodega));
console.log(Object.values(bodega));
console.log(Object.entries(bodega));

//Object.freeze(producto);
//Object.seal(producto);
//delete producto.precio;

//let nombre = producto.nombre;
//let precio = producto.precio;
//let medida = producto.informacion.medida;
//` `

//desestructuración 
const {nombre,precio, informacion} = producto;
//console.log(nombre);
//console.log(peso);

function imprimir({nombre, precio,informacion:{peso}}) {
    //console.log(nombre +" " +precio);
    console.log(`Nombre:${nombre} Precio:$${precio} peso:${peso} `);
}
//imprimir(producto);

producto.stock=60;
//console.log(producto.precio);
//console.log(producto.stock);



