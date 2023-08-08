import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtenemos los elementos del DOM Document Object Model

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById('precio');

// Agregamos un evento Click a cada enlace

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    // Removemos el activo
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    // Agregamos activo
    this.classList.add("active");

    // Traemos la informacion del objeto
    let contenido = obtenerContenido(this.textContent);

    // Mostrar el contenido

    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = 'Precio Viaje x $ '+contenido.precio;
  });
});

// Funcion para traer la informacion de ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    Paris: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
