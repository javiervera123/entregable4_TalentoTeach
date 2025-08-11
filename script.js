// Botón hamburguesa: mostrar/ocultar menú principal en móviles
document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
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
