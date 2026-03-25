function formatearPrecio(precio) {
  return "$" + precio.toLocaleString("es-CO");
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}