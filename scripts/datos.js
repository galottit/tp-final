"use strict";

const descuentoOferta = 0.7; // defino un decuento del 30%

// Objeto con los datos de los productos
let productos = [
    {nombre: "Fideos Codito", precio: 800, stock: 8, oferta: true},
    {nombre: "Fideos Moño", precio: 850, stock: 10, oferta: false},
    {nombre: "Fideos Tallarines", precio: 500, stock: 3, oferta: false},
    {nombre: "Arroz Fino Largo", precio: 450, stock: 5, oferta: false},
    {nombre: "Arroz Doble Carolina", precio: 900, stock: 9, oferta: false},
    {nombre: "Shampoo", precio: 1500, stock: 2, oferta: false},
    {nombre: "Crema de Enjuague", precio: 1500, stock: 4, oferta: false},
    {nombre: "Desodorante", precio: 3100, stock: 5, oferta: false},
    {nombre: "Jabón de Tocador", precio: 150, stock: 0, oferta: false},
    {nombre: "Dentrífico", precio: 1400, stock: 6, oferta: false},
    {nombre: "Queso Cremoso", precio: 9000, stock: 7, oferta: true},
    {nombre: "Yogourt Bebible", precio: 1200, stock: 1, oferta: true},
    {nombre: "Yogourt Natural", precio: 1350, stock: 10, oferta: true},
    {nombre: "Queso Rayado", precio: 700, stock: 5, oferta: false},
    {nombre: "Leche Larga Vida", precio: 900, stock: 2, oferta: false},
    {nombre: "Lavandina", precio: 2400, stock: 7, oferta: false},
    {nombre: "Desodorante de Pisos", precio: 3200, stock: 6, oferta: false},
    {nombre: "Desengrasante", precio: 2500, stock: 0, oferta: false},
    {nombre: "Detergente", precio: 1800, stock: 9, oferta: false},
    {nombre: "Perfume de Ambiente", precio: 3200, stock: 1, oferta: false},
    {nombre: "Plato", precio: 700, stock: 8, oferta: false},
    {nombre: "Vaso", precio: 600, stock: 3, oferta: false},
    {nombre: "Cuchillo", precio: 250, stock: 6, oferta: false},
    {nombre: "Tenedor", precio: 250, stock: 10, oferta: false},
    {nombre: "Rejilla", precio: 400, stock: 7, oferta: false},
    {nombre: "Alimento para Gatos", precio: 12000, stock: 4, oferta: false},
    {nombre: "Alimento para Perros", precio: 15000, stock: 9, oferta: false},
    {nombre: "Piedras Sanitarias", precio: 9500, stock: 0, oferta: false},
    {nombre: "Bebedero", precio: 15000, stock: 8, oferta: false},
    {nombre: "Plato para Alimento", precio: 4500, stock: 6, oferta: false},
    {nombre: "Camisa Manga Larga", precio: 15000, stock: 4, oferta: false},
    {nombre: "Chomba", precio: 17000, stock: 3, oferta: false},
    {nombre: "Pantalón Cargo", precio: 21000, stock: 5, oferta: false},
    {nombre: "Remera Lisa", precio: 12000, stock: 2, oferta: false},
    {nombre: "Zapatillas", precio: 51000, stock: 1, oferta: false},
    {nombre: "Fernet", precio: 9000, stock: 0, oferta: false},
    {nombre: "Vino", precio: 4500, stock: 9, oferta: false},
    {nombre: "Vodka", precio: 5600, stock: 7, oferta: false},
    {nombre: "Ron", precio: 7100, stock: 10, oferta: false},
    {nombre: "Gin", precio: 6300, stock: 8, oferta: false},
    {nombre: "Osito de Peluche", precio: 22000, stock: 5, oferta: false},
    {nombre: "Camión Volcador", precio: 23000, stock: 3, oferta: false},
    {nombre: "Paleta de Ping Pong", precio: 8600, stock: 2, oferta: false},
    {nombre: "Pistola de Agua", precio: 4200, stock: 4, oferta: false},
    {nombre: "Dron a Batería", precio: 125000, stock: 6, oferta: false},
    {nombre: "Pan", precio: 2600, stock: 10, oferta: false},
    {nombre: "Bizcochos", precio: 1200, stock: 11, oferta: false},
    {nombre: "Galletitas Secas", precio: 1800, stock: 8, oferta: false},
    {nombre: "Galletitas Integrales", precio: 2300, stock: 5, oferta: false},
    {nombre: "Tostadas", precio: 2300, stock: 3, oferta: false}
]
/*
// Agrega {cantidadProductosEnPromocion} ofertas al azar
const cantidadProductosEnPromocion = 4;
for (let i = 0; i < cantidadProductosEnPromocion; i++) {
    let indice = (Math.floor(Math.random() * (productos.length + 1)));
    productos[indice].oferta = true;
}
*/
