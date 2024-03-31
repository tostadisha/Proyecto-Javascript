const contenedorProductosCarrito = document.querySelector(
  ".carrito-productos-lista"
);
let botonQuitarCarrito = document.querySelectorAll(".producto-boton-quitar");
let cantidadDeProductos = document.querySelector(".cantidad-productos-final");
let precioTotalProductos = document.querySelector(".precio-productos-final");
let botonComprar = document.querySelector(".producto-boton-comprar");
let listaProductosCarritoFinal = document.querySelector(
  ".carrito-productos-lista"
);
function crearCuadradoProducto(arr) {
  contenedorProductosCarrito.innerHTML = "";
  arr.forEach((el, i) => {
    let html = `<div class="muestra-producto-carrito">
        <div class="producto-carrito-imagen">
          <img src="../${el.ubicacion}" alt="" />
        </div>
        <div class="producto-carrito-nombre">
          <div id="producto-nombre-carrito">${el.modelo}</div>
          <div id="producto-marca-carrito">${el.marca}</div>
        </div>
        <div class="producto-carrito-precio">$${el.precio}</div>
        <button class="producto-boton-quitar" index="${i}">Quitar</button>
      </div>`;
    contenedorProductosCarrito.innerHTML += html;
  });
}

function precioTotalProductosX(arr) {
  let precioTotal = 0;
  arr.forEach((e) => {
    precioTotal += e.precio;
  });
  precioTotalProductos.innerHTML = `<p>Precio total:</p>
  <h1>${precioTotal}</h1>`;
  let cantidadProductos = 0;
  cantidadProductos = carritoProductos.length;
  cantidadDeProductos.innerHTML = `<p>Cantidad de productos:</p>
  <h1>${cantidadProductos}</h1>`;
}

let carritoProductos = [];

let ArrayCarritoJSON = localStorage.getItem("carrito");
let ArrayCarritoRecuperado = JSON.parse(ArrayCarritoJSON);
if (ArrayCarritoRecuperado == null) {
} else {
  carritoProductos = ArrayCarritoRecuperado;
}
crearCuadradoProducto(carritoProductos);
precioTotalProductosX(carritoProductos);
let cantidadDeProductosLength = carritoProductos.length;
console.log(cantidadDeProductosLength);
console.log(botonQuitarCarrito);
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("producto-boton-quitar")) {
    let index = e.target.getAttribute("index");
    carritoProductos.splice(index, 1);
    crearCuadradoProducto(carritoProductos);
    localStorage.clear();
    const ArrayJSON = JSON.stringify(carritoProductos);
    localStorage.setItem("carrito", ArrayJSON);
    cantidadDeProductosLength = carritoProductos.length;
    precioTotalProductosX(carritoProductos);
  }
});
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("producto-boton-comprar")) {
    localStorage.clear();
    carritoProductos = [];
    crearCuadradoProducto(carritoProductos);
    cantidadDeProductosLength = carritoProductos.length;
    precioTotalProductosX(carritoProductos);
    Swal.fire({
      title: "Compra realizada",
      text: "Su producto le llegará en unos días.",
      icon: "success",
    });
    carritoVacio();
  }
});
function carritoVacio() {
  if (carritoProductos.length == 0) {
    let html = `<div class="carrito-vacio">
            <p> ¡No tienes productos en tu carrito! </p>
            <button class="boton-carrito-vacio" > <a href="../index.html"> Prueba comprar algo en la tienda </a></button>
          </div>`;
    contenedorProductosCarrito.innerHTML += html;
  }
}
carritoVacio();
