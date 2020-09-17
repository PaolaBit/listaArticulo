let listaDeMercado = localStorage.getItem('productos')

//listaDeMercado = listaDeMercado ? JSON.parse(listaDeMercado) : []

if (listaDeMercado) {
    listaDeMercado = JSON.parse(listaDeMercado)
} else {
    listaDeMercado = []
}
pintarProductos()


/**
 * Esta función permite mostrar los elementos que están guardados en el localstorage.
 */
function pintarProductos() {
    let html = ''
    listaDeMercado.forEach((lista, i) => {
        html += `<div class="col-8">${lista.nombre}  </div>`
        html += `<div class="col"> ${lista.valor}  </div>`
        html += `<div class="col"> <a onclick="eliminarProducto(${i})" >X</a> </div>`
    })
    document.getElementById('listaElementos').innerHTML = html
}


/**
 * Esta función permite agregar nuevos elementos al localstorage.
 */
function agregarItem() {
    let nombre = document.getElementById('nombre').value
    let valor = document.getElementById('valor').value
    if (nombre && valor) {
        listaDeMercado.push({ 'nombre': nombre, 'valor': valor })
        localStorage.setItem('productos', JSON.stringify(listaDeMercado))
        pintarProductos()
        vaciarInputs()
    } else {
        alert('Error')
    }
}

function vaciarInputs() {
    document.getElementById('nombre').value = ''
    document.getElementById('valor').value = ''
}

function eliminarProducto(posicionProducto) {
    listaDeMercado.splice(posicionProducto, 1)
    localStorage.setItem('productos', JSON.stringify(listaDeMercado))
    pintarProductos()
}

function vaciarCarrito() {
    localStorage.removeItem('productos')
    document.getElementById('listaElementos').innerHTML = ''
    listaDeMercado = []
}

/*function eliminar(producto) {
    if (typeof producto == 'boolean') {
        localStorage.removeItem('productos')
        listaDeMercado = []
    } else {
        listaDeMercado.splice(producto, 1)
        localStorage.setItem('productos', JSON.stringify(listaDeMercado))
    }

    pintarProductos()
}*/


/*function imprimirHTML(numero, callback) {
    console.log('llego')
    callback()
}

imprimirHTML(1, function() {
    alert('Hola')
})*/