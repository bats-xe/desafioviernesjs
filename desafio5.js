const productos = ["producto1", "producto2", "producto3", "producto4", "producto5"];

console.log("Lista de productos:");
for (let i = 0; i < productos.length; i++) {
console.log("Producto " + (i + 1) + ": " + productos[i]);
}

for (let i = productos.length; i > 0; i--) {
const productoVendido = productos.pop();  
console.log("Producto vendido: " + productoVendido);
alert("Lista actualizada: " + productos);
}