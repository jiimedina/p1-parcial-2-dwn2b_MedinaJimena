'use strict';


class Carrito {
    contenedor;
    itemsContenedor;
    totalContenedor;
    total;
    cantidad;
    productos;
    constructor() {
        this.contenedor = document.getElementById('carritoCompras');
        this.itemsContenedor = document.getElementById('items');
        this.totalContenedor = document.getElementById('total');
        this.total = 0;
        this.cantidad = 0;
        this.productos = []
    }
    
    agregarProducto(producto) {
        console.log(this);
        this.productos.push(producto);
        this.total += producto.precio;
        this.cantidad = this.cantidad + 1 ;
        this.itemsContenedor.innerHTML = this.cantidad;
        this.totalContenedor.innerHTML = this.total;
      }
    
    
    }

let productos = [
    {
        id: 1,
        nombre: 'Camisa Alegría',
        descripcion: 'Manga corta estampada',
        precio: 10000,
        imagen: 'camisa-1.jpg',
        categoria: 'Camisas',
    },
    {
        id: 2,
        nombre: 'Camisa Margareth',
        descripcion: 'Camisa color rojo oversize',
        precio: 9000,
        imagen: 'camisa-2.jpg',
        categoria: 'Camisas',
    },
    {
        id: 3,
        nombre: 'Vestido Sophia',
        descripcion: 'Manga corta y cuello en V',
        precio: 12000,
        imagen: 'vestido-1.jpg',
        categoria: 'Vestidos',
    },
    {
        id: 4,
        nombre: 'Vestido Aymee',
        descripcion: 'Vestido playero cuello bote',
        precio: 15000,
        imagen: 'vestido-2.jpg',
        categoria: 'Vestidos',
    },
    {
        id: 5,
        nombre: 'Jean Alma',
        descripcion: 'jean chupín color celeste',
        precio: 7000,
        imagen: 'pantalon-1.jpg',
        categoria: 'Pantalones',
    },
    {
        id: 6,
        nombre: 'Pantalón Ruca',
        descripcion: 'Palazzo estampado',
        precio: 5000,
        imagen: 'pantalon-2.jpg',
        categoria: 'Pantalones',
    },
];

document.addEventListener("DOMContentLoaded", () => {






/*
let carrito = {
  contenedor:      document.getElementById('carritoCompras'),
  itemsContenedor: document.getElementById('items'),
  totalContenedor: document.getElementById('total'),
  total:           0,
  cantidad:        0,
  productos:       [],
  agregarProducto: function(producto) {
    console.log(this);
    this.productos.push(producto);
    this.total += producto.precio;
    this.cantidad = this.cantidad + 1 ;
    this.itemsContenedor.innerHTML = this.cantidad;
    this.totalContenedor.innerHTML = this.total;
  }
};
*/

function generarProductoNode(producto) {
    let productContainer = document.createElement("div");
    let productInfo = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let linkDetalle = document.createElement("a");
    let descripcion = document.createElement("p");
    let priceP = document.createElement("p");
    let priceS = document.createElement("span");
    let categoria = document.createElement("p");
    let btn = document.createElement("button");

  title.innerHTML = producto.nombre;
  linkDetalle.href = "javascript:void(0)";
  linkDetalle.appendChild(title)

  descripcion.innerHTML = producto.descripcion;
  categoria.innerHTML = producto.categoria;
  priceS.innerHTML = producto.precio;
  priceP.innerHTML = "Precio: $";
  priceP.appendChild(priceS);
  img.src = "img/" + producto.imagen;
  btn.innerHTML = "Agregar";
  btn.classList.add("btn-primario");

  btn.onclick = function() { carrito.agregarProducto(producto); };
  linkDetalle.onclick = function() { document.body.appendChild(generarDetalleProducto(producto)) }

  productInfo.appendChild(linkDetalle);
  productInfo.appendChild(descripcion);
  productInfo.appendChild(priceP);
  productInfo.appendChild(categoria);
  productInfo.appendChild(btn);
  productContainer.appendChild(img);
  productContainer.appendChild(productInfo);

  return productContainer;
}

function generarDetalleProducto(producto) {
    let modalContainer = document.createElement("div");
    let cerrar = document.createElement("a");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let descripcion = document.createElement("p");
    let priceP = document.createElement("p");
    let priceS = document.createElement("span");
    let categoria = document.createElement("p");
    let btn = document.createElement("button");

  cerrar.innerHTML = "X";
  cerrar.classList.add("cerrar");
  cerrar.href = "javascript:void(0)";
  title.innerHTML = producto.nombre;
  descripcion.innerHTML = producto.descripcion;
  categoria.innerHTML = producto.categoria;
  priceS.innerHTML = producto.precio;
  priceP.innerHTML = "Precio: $";
  priceP.appendChild(priceS);
  img.src = "img/" + producto.imagen;
  btn.innerHTML = "Agregar";
  btn.classList.add("btn-primario");
  modalContainer.classList.add("modal");
  modalContainer.id = "modalProducto"

    cerrar.onclick = function() { 
      
       modalContainer.remove();
}
  btn.onclick = function() { carrito.agregarProducto(producto); };

  modalContainer.appendChild(cerrar);
  modalContainer.appendChild(img);
  modalContainer.appendChild(title);
  modalContainer.appendChild(descripcion);
  modalContainer.appendChild(priceP);
  modalContainer.appendChild(categoria);
  modalContainer.appendChild(btn);
  

  return modalContainer;
}
    let carrito = new Carrito();
    let contenedorProductos = document.getElementById('productos');
    
    for (let i = 0; i < productos.length; i++) {
      contenedorProductos.appendChild(generarProductoNode(productos[i]));
    }

    

});


