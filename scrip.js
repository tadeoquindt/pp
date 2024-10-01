const carrito = document.getElementById('carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const listaProductos = document.getElementById('lista-1');



document.addEventListener('DOMContentLoaded', cargarEventos);

function cargarEventos() {    // Agregar producto al carrito
    listaProductos.addEventListener('click', agregarProducto);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

// Función para agregar productos al carrito
function agregarProducto(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('AGREGAR-CARRITO')) {
        const producto = e.target.parentElement;
        leerDatosProducto(producto);
    }
}


// Leer los datos del producto
function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.parentElement.querySelector('img').src,
        nombre: producto.querySelector('h9').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoProducto);
}

// Mostrar el producto seleccionado en el carrito
function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><img src="${producto.imagen}" width="100"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td><a href="#" class="borrar-producto" data-id="${producto.id}">X</a></td>
    `;
    listaCarrito.appendChild(row);
}


// Vaciar el carrito
function vaciarCarrito() {
    while(listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}