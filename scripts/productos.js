"use strict";

let arrProductos = ["Fideos Codito", "Fideos Moño", "Fideos Tallarines", "Arroz Fino Largo", "Arroz Doble Carolina", "Shampoo", "Crema de Enjuague", "Desodorante", "Jabón de Tocador", "Dentrífico", "Queso Cremoso", "Yogourt Bebible", "Yogourt Natural", "Queso Rayado", "Leche Larga Vida", "Lavandina", "Desodorante de Pisos", "Desengrasante", "Detergente", "Perfume de Ambiente", "Plato", "Vaso", "Cuchillo", "Tenedor", "Rejilla", "Alimento para Gatos", "Alimento para Perros", "Piedras Sanitarias", "Bebedero", "Plato para Alimento", "Camisa Manga Larga", "Chomba", "Pantalón Cargo", "Remera Lisa", "Zapatillas", "Fernet", "Vino", "Vodka", "Ron", "Gin", "Osito de Peluche", "Camión Volcador", "Paleta de Ping Pong", "Pistola de Agua", "Dron a Batería", "Pan", "Bizcochos", "Galletitas Secas", "Galletitas Integrales", "Tostadas"];
let arrPrecios = [20.00, 25.00, 22.00, 28.00, 30.00, 31.90, 34.20, 36.50, 38.80, 41.10, 43.40, 45.70, 48.00, 50.30, 52.60, 54.90, 57.20, 30.00, 31.90, 34.20, 36.50, 38.80, 40.94, 43.16, 45.38, 47.60, 49.82, 52.04, 54.26, 56.48, 58.70, 60.92, 63.14, 54.90, 57.20, 30.00, 31.90, 34.20, 36.50, 38.80, 41.10, 43.40, 45.70, 48.00, 50.30, 52.60, 54.90, 57.20, 59.50, 61.80];
let arrStock = [8, 10, 3, 5, 9, 2, 4, 5, 0, 6, 7, 1, 10, 5, 2, 7, 6, 0, 9, 1, 8, 3, 6, 10, 7, 4, 9, 0, 8, 6, 4, 3, 5, 2, 1, 0, 9, 7, 10, 8, 5, 3, 2, 4, 6];

// Verifico si el navegador soporta templates
if ("content" in document.createElement("template")) {
    const tablaProductos = document.querySelector(".seccionProductos");
    const template = document.querySelector("#producto");

    arrProductos.forEach((producto, indice) => {
        //Clono una nueva fila y la agrego a la tabla
        const clone = template.content.cloneNode(true);
        clone.querySelector(".producto>div:nth-child(2)").textContent = producto;
        clone.querySelector(".producto>div:nth-child(3)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(arrPrecios[indice]);
        const imgProducto = clone.querySelector(".producto>div>div:nth-child(2)>img");
        imgProducto.setAttribute("src", "../imagenes/producto" + indice + ".webp");
        imgProducto.setAttribute("height", "100%"); // VER
        imgProducto.setAttribute("alt", producto);
        clone.querySelector(".producto>div:nth-child(4)>input").setAttribute("id", indice);
        tablaProductos.appendChild(clone);
    });
} else {
    console.log("No soporta templates... que hacemos? xD");
}

// Agrego los manejadores de eventos a los botones de sumar
document.querySelectorAll(".botonSumar, .botonRestar").forEach((value)=>{
    value.addEventListener("click", (event)=>{
        let input = event.target.parentElement.querySelector('input');
        if (event.target.getAttribute("name")==="botonRestar"){
            if (input.value > input.getAttribute("min"))
                input.value--;       
        }else if (event.target.getAttribute("name")==="botonSumar"){
            if (input.value < input.getAttribute("max"))
                input.value++;
        }else{
            console.log("Algo salió mal. Se esperaba botonRestar/botonSumar");
        }
    });
});

//Falta validar la entrada de valores a mano en los inputs
