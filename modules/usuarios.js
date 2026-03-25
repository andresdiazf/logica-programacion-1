class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email  = email;
  }
  saludo() {
    return "Hola, soy " + this.nombre;
  }
}

export  default Usuario 