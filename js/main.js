let productos = [];
fetch("../json/productos.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    productos = data;
  });
const txtBuscarProducto = document.querySelector(".main-busqueda-texto"),
  contenedorProductosVenta = document.querySelector(".main-caja-productos"),
  btnBuscarProducto = document.querySelector(".boton-busqueda-productos"),
  checkboxIntelProducto = document.querySelector("#cbox-proce-intel"),
  checkboxAmdProducto = document.querySelector("#cbox-proce-amd"),
  checkboxNvidiaProducto = document.querySelector("#cbox-tarjeta-nvidia"),
  checkboxAmdTarjProducto = document.querySelector("#cbox-tarjeta-amd"),
  botonBorrarInfoJson = document.querySelector(".borrarJSON"),
  cantidadProductosMainX = document.querySelector(".main-cantidad-productos");
function crearCuadradoProducto(arr) {
  contenedorProductosVenta.innerHTML = "";
  let html;
  for (const el of arr) {
    html = `<div class="main-producto-compra">
    <div class="producto-datos-top">
        <p class="producto-fecha">${el.añoLanzamiento}</p>
        <div class="producto-marca-img">
          <img src=${el.imagenLogo} alt="" />
        </div>
      </div>
      <div class="producto-imagen-principal">
        <img src=${el.ubicacion} alt="" />
      </div>
      <div class="producto-nombre">
        <p> ${el.modelo}</p>
        </div>
      <div class="producto-precio">
        <p>$${el.precio}</p>
      </div>
      <div class="producto-div-boton-agregar">
        <button id=${el.id} class="boton-agregar">Agregar</button>
      </div>
      </div>`;
    contenedorProductosVenta.innerHTML =
      contenedorProductosVenta.innerHTML + html;
  }

  const botones = document.querySelectorAll(".boton-agregar");
  botones.forEach((b) => {
    b.addEventListener("click", (e) => {
      let idEncontrado = b.id;
      productos.forEach((e) => {
        e.id == idEncontrado && carritoProductos.push(e);
      });
      const ArrayJSON = JSON.stringify(carritoProductos);
      localStorage.setItem("carrito", ArrayJSON);
      cantidadProductosMain(carritoProductos);
      Toastify({
        text: "Usted ha añadido un producto a su carrito",
        duration: 3000,
        destination: "pages/carrito.html",
        newWindow: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #c63d2f, #e25e3e)",
        },
      }).showToast();
    });
  });
}
setTimeout(() => {
  crearCuadradoProducto(productos);
}, 1500);

let productosBuscados = [];
function buscarProducto(arr, filtro) {
  let encontrado = arr.filter((el) => {
    return el.modelo.toLowerCase().includes(filtro.toLowerCase());
  });
  return encontrado;
}

function filtros(arr, tipoProducto, marca) {
  let encontrado = arr.filter((el) => {
    return (
      el.marca.toLowerCase().includes(marca.toLowerCase()) &&
      el.tipoProducto.toLowerCase().includes(tipoProducto.toLowerCase())
    );
  });
  return encontrado;
}

txtBuscarProducto.addEventListener("keyup", () => {
  checkboxIntelProducto.checked = false;
  checkboxAmdProducto.checked = false;
  checkboxNvidiaProducto.checked = false;
  checkboxAmdTarjProducto.checked = false;
  if ((productosBuscados.length = 0)) {
    productosBuscados = buscarProducto(
      productosBuscados,
      txtBuscarProducto.value
    );
    console.log(productosBuscados);
    crearCuadradoProducto(productosBuscados);
  } else {
    productosBuscados = buscarProducto(productos, txtBuscarProducto.value);
    crearCuadradoProducto(productosBuscados);
    console.log(productosBuscados);
  }
});

function valoresCheck(checkbox, tipoProducto, marca) {
  if (checkbox.checked) {
    let array = filtros(productos, tipoProducto, marca);
    array.forEach((e) => {
      productosBuscados.push(e);
    });
    crearCuadradoProducto(productosBuscados);
  } else {
    if (productosBuscados.length > 0) {
      productosBuscados = productosBuscados.filter(
        (e) => !(e.marca === marca && e.tipoProducto === tipoProducto)
      );
      crearCuadradoProducto(productosBuscados);
    }
  }
  if (
    !checkboxIntelProducto.checked &&
    !checkboxAmdProducto.checked &&
    !checkboxNvidiaProducto.checked &&
    !checkboxAmdTarjProducto.checked
  ) {
    crearCuadradoProducto("");
    crearCuadradoProducto(productos);
  }
}

checkboxIntelProducto.onchange = () =>
  valoresCheck(checkboxIntelProducto, "Procesador", "INTEL");
checkboxAmdProducto.onchange = () =>
  valoresCheck(checkboxAmdProducto, "Procesador", "AMD");
checkboxNvidiaProducto.onchange = () =>
  valoresCheck(checkboxNvidiaProducto, "Tarjeta", "NVIDIA");
checkboxAmdTarjProducto.onchange = () =>
  valoresCheck(checkboxAmdTarjProducto, "Tarjeta", "AMD");

let carritoProductos = [];
let ArrayCarritoJSON = localStorage.getItem("carrito");
let ArrayCarritoRecuperado = JSON.parse(ArrayCarritoJSON);
if (ArrayCarritoRecuperado == null) {
} else {
  carritoProductos = ArrayCarritoRecuperado;
}
function cantidadProductosMain(arr) {
  let cantidadProductos = 0;
  cantidadProductos = carritoProductos.length;
  cantidadProductosMainX.innerHTML = `<h2>Tienes en el carrito</h2>
  <h3>${cantidadProductos} productos</h3>`;
}
cantidadProductosMain(carritoProductos);
