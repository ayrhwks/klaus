const ropa = [
    {nombre: "Pantalon negro", precio: 49, talle: 41},
    {nombre: "Pantalon azul", precio: 47, talle: 41},
    {nombre: "Pantalon negro", precio: 50, talle: 42},
    {nombre: "Pantalon negro", precio: 48, talle: 43},
    {nombre: "Pantalon azul", precio: 50, talle: 42},
    {nombre: "Pantalon verde", precio: 40, talle: 41},
    {nombre: "Remera negra", precio: 30, talle: "40"},
    {nombre: "Camisa negra", precio: 50, talle: 41}
];

const talleCliente = prompt("Ingrese su talle:");

const pantalonesDisponibles = ropa.filter((prenda) => {
    return prenda.nombre.includes("Pantalon") && prenda.talle == talleCliente;
});

if (pantalonesDisponibles.length > 0) {
    console.log("Pantalones disponibles en talle " + talleCliente + ":");
    pantalonesDisponibles.forEach((pantalon) => {
        console.log(`${pantalon.nombre} - Precio: ${pantalon.precio}`);
    });
} else {
    console.log("No hay pantalones disponibles en talle " + talleCliente + ".");
}
