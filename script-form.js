function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  var motivo = document.getElementById("motivo").value;

  // Verifica que todos los campos obligatorios estén completos
  if (nombre.trim() == "" || email.trim() == "" || mensaje.trim() == "" || motivo.trim() == "") {
    alert("Por favor, completa todos los campos obligatorios.");
    return false;
  }

  return true; // Si todas las validaciones pasan, el formulario se enviará
}
