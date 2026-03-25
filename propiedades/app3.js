let producto = {
    nombre: "papitas",
    precio: 10.000,
    Marca: "margarita",
    stock: 100,
    // cree un metodo para calcular el iva del producto
    calcularIva: function() {
        return producto.precio * 0.19;
    },
    calculartotal: function() {
        return this.precio + this.calcularIva();
    }   
};

console.log(producto.nombre); // papitas
console.log(producto.precio); // 10.000

producto.stock = producto.stock - 1; // se vende una unidad
console.log(this.stock); // 99

console.log(producto);




