const productos = [
  {
    id: 1,
    marca: "NVIDIA",
    modelo: "GeForce GTX 1650 4GB",
    precio: 190000,
    añoLanzamiento: 2019,
    tipoProducto: "Tarjeta",
    ubicacion: "img/GeForce-GTX-1650-4GB.webp",
    imagenLogo: "img/nvidia-logo.webp",
  },
  {
    id: 2,
    marca: "NVIDIA",
    modelo: "GeForce RTX 3050 8GB",
    precio: 250000,
    añoLanzamiento: 2020,
    tipoProducto: "Tarjeta",
    ubicacion: "img/GeForce-RTX-3050-8GB.webp",
    imagenLogo: "img/nvidia-logo.webp",
  },
  {
    id: 3,
    marca: "NVIDIA",
    modelo: "GeForce RTX 4060 Ti 8GB",
    precio: 300000,
    añoLanzamiento: 2023,
    tipoProducto: "Tarjeta",
    ubicacion: "img/GeForce-RTX-4060-Ti-8GB.webp",
    imagenLogo: "img/nvidia-logo.webp",
  },
  {
    id: 4,
    marca: "AMD",
    modelo: "RX 570 8GB",
    precio: 200000,
    añoLanzamiento: 2018,
    tipoProducto: "Tarjeta",
    ubicacion: "img/RX-570-8GB.webp",
    imagenLogo: "img/amd-logo.webp",
  },
  {
    id: 5,
    marca: "AMD",
    modelo: "RX 7600 8GB",
    precio: 250000,
    añoLanzamiento: 2020,
    tipoProducto: "Tarjeta",
    ubicacion: "img/RX-7600-8GB.webp",
    imagenLogo: "img/amd-logo.webp",
  },
  {
    id: 6,
    marca: "AMD",
    modelo: "RX 7800 XT 16GB",
    precio: 250000,
    añoLanzamiento: 2022,
    tipoProducto: "Tarjeta",
    ubicacion: "img/RX-7800-XT-16GB.webp",
    imagenLogo: "img/amd-logo.webp",
  },
  {
    id: 7,
    marca: "INTEL",
    modelo: "Intel Core i5 10400F",
    precio: 250000,
    añoLanzamiento: 2020,
    tipoProducto: "Procesador",
    ubicacion: "img/Intel-Core-i5-10400F.webp",
    imagenLogo: "img/intel-logo.webp",
  },
  {
    id: 8,
    marca: "INTEL",
    modelo: "Intel Core i5 12400",
    precio: 275000,
    añoLanzamiento: 2022,
    tipoProducto: "Procesador",
    ubicacion: "img/Intel-Core-i5-12400.webp",
    imagenLogo: "img/intel-logo.webp",
  },
  {
    id: 9,
    marca: "INTEL",
    modelo: "Intel Core i7 12700F",
    precio: 300000,
    añoLanzamiento: 2021,
    tipoProducto: "Procesador",
    ubicacion: "img/Intel-Core-i7-12700F.webp",
    imagenLogo: "img/intel-logo.webp",
  },
  {
    id: 10,
    marca: "AMD",
    modelo: "Ryzen 3 3200G",
    precio: 320000,
    añoLanzamiento: 2019,
    tipoProducto: "Procesador",
    ubicacion: "img/Ryzen-3-3200G.webp",
    imagenLogo: "img/amd-logo.webp",
  },
  {
    id: 11,
    marca: "AMD",
    modelo: "Ryzen 5 3600",
    precio: 300000,
    añoLanzamiento: 2020,
    tipoProducto: "Procesador",
    ubicacion: "img/Ryzen-5-3600.webp",
    imagenLogo: "img/amd-logo.webp",
  },
  {
    id: 12,
    marca: "AMD",
    modelo: "Ryzen 5 5900X",
    precio: 370000,
    añoLanzamiento: 2023,
    tipoProducto: "Procesador",
    ubicacion: "img/Ryzen-5-5900X.webp",
    imagenLogo: "img/amd-logo.webp",
  },
];
const usuariosSistema = [
  {
    usuario: "xd",
    contrasena: "xd",
    nombre: "prueba",
    saldo: 10000000000,
  },
  {
    usuario: "pepito123",
    contrasena: "95123",
    nombre: "Tutor/a",
    saldo: 500000,
  },
  {
    usuario: "canela23",
    contrasena: "amor5",
    nombre: "Zoe",
    saldo: 50,
  },
  {
    usuario: "elmascapo456",
    contrasena: "7895123",
    nombre: "Jesús de Nazaret",
    saldo: 1000000,
  },
  {
    usuario: "cabraroja",
    contrasena: "holamama123",
    nombre: "Leo Messi",
    saldo: 20000000,
  },
];
class UsuarioNuevo {
  constructor(usuarioR, contrasenaR, nombreR) {
    this.usuario = usuarioR;
    this.contrasena = contrasenaR;
    this.nombre = nombreR;
    this.saldo = 3500000;
  }
}
const txtBuscarProducto = document.querySelector(".main-busqueda-texto"),
  contenedorProductosVenta = document.querySelector(".main-caja-productos"),
  btnBuscarProducto = document.querySelector(".boton-busqueda-productos"),
  checkboxIntelProducto = document.querySelector("#cbox-proce-intel"),
  checkboxAmdProducto = document.querySelector("#cbox-proce-amd"),
  checkboxNvidiaProducto = document.querySelector("#cbox-tarjeta-nvidia"),
  checkboxAmdTarjProducto = document.querySelector("#cbox-tarjeta-amd"),
  botonBorrarInfoJson = document.querySelector(".borrarJSON"),
  cantidadProductosMainX = document.querySelector(".main-cantidad-productos");
// Tienda
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
      console.log(carritoProductos);
      const ArrayJSON = JSON.stringify(carritoProductos);
      localStorage.setItem("carrito", ArrayJSON);
      cantidadProductosMain(carritoProductos);
    });
  });
}
crearCuadradoProducto(productos);

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

btnBuscarProducto.addEventListener("click", () => {
  if (productosBuscados.length > 0) {
    productosBuscados = buscarProducto(
      productosBuscados,
      txtBuscarProducto.value
    );
    crearCuadradoProducto(productosBuscados);
  } else {
    productosBuscados = buscarProducto(productos, txtBuscarProducto.value);
    crearCuadradoProducto(productosBuscados);
  }
});
txtBuscarProducto.addEventListener("keyup", () => {
  if (productosBuscados.length > 0) {
    productosBuscados = buscarProducto(
      productosBuscados,
      txtBuscarProducto.value
    );
    crearCuadradoProducto(productosBuscados);
  } else {
    productosBuscados = buscarProducto(productos, txtBuscarProducto.value);
    crearCuadradoProducto(productosBuscados);
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

// const botones = document.querySelectorAll(".boton-agregar");
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
