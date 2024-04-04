const listado = [{
        nombre: 'Juan',
        edad: 32
    },
    {
        nombre: 'Lucía',
        edad: 45
    },
    {
        nombre: 'Nicolas',
        edad: 22
    }
];

const nodoUl = document.querySelector('ul');

function mostrarPesonas(lista) {

    lista.forEach(item => {
    nodoUl.innerHTML += `<li><strong>${item.nombre}</stron> (${item.edad} años)</li>`        
    });
}

//mostrarPesonas(listado);
mostrarPesonasConMap(listado);

/* -------------------------------- Consigna -------------------------------- */
// Realizar el mismo proceso de renderizar en pantalla pero utilizando la función .map()
// Detalles:
// . indagar en la documentacion de MDN -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// . comentar la función anterior y ejecutar esta para probar el resultado 👇

function mostrarPesonasConMap(lista) {

    lista.map( function (x) {
        nodoUl.innerHTML += `<li><strong>${x.nombre}</stron> (${x.edad} años)</li>`        
    });


    // let estructura = lista.map( function (x) {
    //     console.log(x);
    //     return `<li><strong>${x.nombre}</stron> (${x.edad} años)</li>`        
    // });

    console.table(estructura);
    // estructura.forEach(item => {
    //     nodoUl.innerHTML += item;
    //     console.log(nodoUl);
    // })
    //mostrarPesonas(estructura);
}

