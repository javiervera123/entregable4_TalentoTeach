// Botón hamburguesa: mostrar/ocultar menú en móviles
// Mostrar/ocultar el menú en móviles
const botonMenu = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  botonMenu.addEventListener("click", () => {
    menu.classList.toggle("open");
  });



// Validar formulario
function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let email = document.getElementById("email").value.trim();

  if (nombre === "" || email === "") {
    alert("Los campos con * son obligatorios...");
    return false;
  }

  alert("Datos enviados satisfactoriamente");
  return true;
}

// Mostrar vista previa de imagen
function mostrarImagen(event) {
  let imagen = document.getElementById('ver-imagen');
  imagen.src = URL.createObjectURL(event.target.files[0]);
}
