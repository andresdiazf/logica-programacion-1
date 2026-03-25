import usuarios from "./usuarios.js";
import producto from "./producto.js";

let u1      = new Usuario("Ana", "ana@email.com");
let p1      = new Producto("Teclado", 250000);

console.log(u1.saludo());
console.log(formatearPrecio(p1.calcularTotal()));