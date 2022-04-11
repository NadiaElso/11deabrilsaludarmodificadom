let ingresoDeNombre = document.getElementById("nombre");

function saludarUsuario() {
  let nombre: string = ingresoDeNombre.value;
  console.log("Hola"+nombre);
  let parrafoSaludo = (document.getElementById("saludar")?.innerHTML ="hola " + nombre;
}

ingresoDeNombre?.addEventListener("input", saludarUsuario);
