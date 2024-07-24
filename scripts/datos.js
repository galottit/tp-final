"use strict";

// Objeto con los datos de los productos
let productos = [
    {nombre: "Fideos Codito", precio: 20.00, stock: 8, oferta: true},
    {nombre: "Fideos Moño", precio: 25.00, stock: 10, oferta: false},
    {nombre: "Fideos Tallarines", precio: 22.00, stock: 3, oferta: false},
    {nombre: "Arroz Fino Largo", precio: 28.00, stock: 5, oferta: false},
    {nombre: "Arroz Doble Carolina", precio: 30.00, stock: 9, oferta: false},
    {nombre: "Shampoo", precio: 31.90, stock: 2, oferta: false},
    {nombre: "Crema de Enjuague", precio: 34.20, stock: 4, oferta: false},
    {nombre: "Desodorante", precio: 36.50, stock: 5, oferta: false},
    {nombre: "Jabón de Tocador", precio: 38.80, stock: 0, oferta: false},
    {nombre: "Dentrífico", precio: 41.10, stock: 6, oferta: false},
    {nombre: "Queso Cremoso", precio: 43.40, stock: 7, oferta: true},
    {nombre: "Yogourt Bebible", precio: 45.70, stock: 1, oferta: true},
    {nombre: "Yogourt Natural", precio: 48.00, stock: 10, oferta: true},
    {nombre: "Queso Rayado", precio: 50.30, stock: 5, oferta: false},
    {nombre: "Leche Larga Vida", precio: 52.60, stock: 2, oferta: false},
    {nombre: "Lavandina", precio: 54.90, stock: 7, oferta: false},
    {nombre: "Desodorante de Pisos", precio: 57.20, stock: 6, oferta: false},
    {nombre: "Desengrasante", precio: 30.00, stock: 0, oferta: false},
    {nombre: "Detergente", precio: 31.90, stock: 9, oferta: false},
    {nombre: "Perfume de Ambiente", precio: 34.20, stock: 1, oferta: false},
    {nombre: "Plato", precio: 36.50, stock: 8, oferta: false},
    {nombre: "Vaso", precio: 38.80, stock: 3, oferta: false},
    {nombre: "Cuchillo", precio: 40.94, stock: 6, oferta: false},
    {nombre: "Tenedor", precio: 43.16, stock: 10, oferta: false},
    {nombre: "Rejilla", precio: 45.38, stock: 7, oferta: false},
    {nombre: "Alimento para Gatos", precio: 47.60, stock: 4, oferta: false},
    {nombre: "Alimento para Perros", precio: 49.82, stock: 9, oferta: false},
    {nombre: "Piedras Sanitarias", precio: 52.04, stock: 0, oferta: false},
    {nombre: "Bebedero", precio: 54.26, stock: 8, oferta: false},
    {nombre: "Plato para Alimento", precio: 56.48, stock: 6, oferta: false},
    {nombre: "Camisa Manga Larga", precio: 58.70, stock: 4, oferta: false},
    {nombre: "Chomba", precio: 60.92, stock: 3, oferta: false},
    {nombre: "Pantalón Cargo", precio: 63.14, stock: 5, oferta: false},
    {nombre: "Remera Lisa", precio: 54.90, stock: 2, oferta: false},
    {nombre: "Zapatillas", precio: 57.20, stock: 1, oferta: false},
    {nombre: "Fernet", precio: 30.00, stock: 0, oferta: false},
    {nombre: "Vino", precio: 31.90, stock: 9, oferta: false},
    {nombre: "Vodka", precio: 34.20, stock: 7, oferta: false},
    {nombre: "Ron", precio: 36.50, stock: 10, oferta: false},
    {nombre: "Gin", precio: 38.80, stock: 8, oferta: false},
    {nombre: "Osito de Peluche", precio: 41.10, stock: 5, oferta: false},
    {nombre: "Camión Volcador", precio: 43.40, stock: 3, oferta: false},
    {nombre: "Paleta de Ping Pong", precio: 45.70, stock: 2, oferta: false},
    {nombre: "Pistola de Agua", precio: 48.00, stock: 4, oferta: false},
    {nombre: "Dron a Batería", precio: 50.30, stock: 6, oferta: false},
    {nombre: "Pan", precio: 52.60, stock: 10, oferta: false},
    {nombre: "Bizcochos", precio: 54.90, stock: 11, oferta: false},
    {nombre: "Galletitas Secas", precio: 57.20, stock: 8, oferta: false},
    {nombre: "Galletitas Integrales", precio: 59.50, stock: 5, oferta: false},
    {nombre: "Tostadas", precio: 61.80, stock: 3, oferta: false}
]
/*
// Agrega {cantidadProductosEnPromocion} ofertas al azar
const cantidadProductosEnPromocion = 4;
for (let i = 0; i < cantidadProductosEnPromocion; i++) {
    let indice = (Math.floor(Math.random() * (productos.length + 1)));
    productos[indice].oferta = true;
}
*/
