"use strict";
let productos = [
    {nombre: "Fideos Codito", precio: 20.00, stock: 8, oferta: false},
    {nombre: "Fideos Moño", precio: 25.00, stock: 10, oferta: false},
    {nombre: "Fideos Tallarines", precio: 22.00, stock: 3, oferta: false},
    {nombre: "Arroz Fino Largo", precio: 28.00, stock: 5, oferta: false},
    {nombre: "Arroz Doble Carolina", precio: 30.00, stock: 9, oferta: false},
    {nombre: "Shampoo", precio: 31.90, stock: 2, oferta: false},
    {nombre: "Crema de Enjuague", precio: 34.20, stock: 4, oferta: false},
    {nombre: "Desodorante", precio: 36.50, stock: 5, oferta: false},
    {nombre: "Jabón de Tocador", precio: 38.80, stock: 0, oferta: false},
    {nombre: "Dentrífico", precio: 41.10, stock: 6, oferta: false},
    {nombre: "Queso Cremoso", precio: 43.40, stock: 7, oferta: false},
    {nombre: "Yogourt Bebible", precio: 45.70, stock: 1, oferta: false},
    {nombre: "Yogourt Natural", precio: 48.00, stock: 10, oferta: false},
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

// Agrega {cantidadProductosEnPromocion} ofertas al azar
const cantidadProductosEnPromocion = 4;
for (let i = 0; i < cantidadProductosEnPromocion; i++) {
    let indice = (Math.floor(Math.random() * (productos.length + 1)));
    productos[indice].oferta = true;
}

//Verifico que el navegador soporte <template>
if ("content" in document.createElement("template")) {
    const tablaProductos = document.querySelector('.seccionProductos');
    const templateProducto = tablaProductos.querySelectorAll("template")[0];

    productos.forEach((producto, codigo) => {
        //Clono una nueva fila y la agrego a la tabla
        const nuevoProducto = templateProducto.content.cloneNode(true);
        nuevoProducto.querySelector(".producto>div:nth-child(2)").textContent = producto.nombre;
        nuevoProducto.querySelector(".producto>div:nth-child(3)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio);
        const imgProducto = nuevoProducto.querySelector(".producto>div>div:nth-child(2)>img");
        imgProducto.setAttribute("src", "../imagenes/producto" + codigo + ".webp");
        imgProducto.setAttribute("alt", producto.nombre);
        nuevoProducto.querySelector(".producto>div:nth-child(4)>input").setAttribute("id", codigo);
        tablaProductos.appendChild(nuevoProducto)

        //Si el producto está en oferta lo agrego a la sección indicada
        if (producto.oferta){       
            //Clono una nueva fila y la agrego a la tabla
            const tablaOfertas = document.querySelector('.seccionPromociones');
            const templateOferta = tablaOfertas.querySelectorAll("template")[0];
            const nuevaOferta = templateOferta.content.cloneNode(true);
            
            nuevaOferta.querySelector('div').addEventListener('click', ()=>{
                location.href='#'+codigo;
            });

            nuevaOferta.querySelector(".producto>div:nth-child(2)").textContent = producto.nombre;
            nuevaOferta.querySelector(".producto>div:nth-child(3)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio);
            const imgProducto = nuevaOferta.querySelector(".producto>div>div:nth-child(2)>img");
            imgProducto.setAttribute("src", "../imagenes/producto" + codigo + ".webp");
            imgProducto.setAttribute("alt", producto.nombre);
            tablaOfertas.appendChild(nuevaOferta);            
        }
    });
}

// Agrego los manejadores de eventos a los botones de sumar
document.querySelectorAll(".botonSumar, .botonRestar").forEach((value)=>{
    value.addEventListener("click", (event)=>{
        let input = event.target.parentElement.querySelector('input');
        if (event.target.getAttribute("name")==="botonRestar"){
            if (parseInt(input.value) > parseInt(input.getAttribute("min"))){
                input.value--;
                verificarCamabiosEnCantidades(input);
            }   
        }else if (event.target.getAttribute("name")==="botonSumar"){
            if (parseInt(input.value) < parseInt(input.getAttribute("max"))){
                input.value++;
                verificarCamabiosEnCantidades(input);
            }
        }else{
            console.log("Algo salió mal. Se esperaba botonRestar/botonSumar");
        }
    });
});

// Valida la entrada manual y lanza una alerta en caso de que esté mal
function verificarCamabiosEnCantidades(inputElement){
    if(parseInt(inputElement.value) > parseInt(inputElement.getAttribute("max")) | parseInt(inputElement.value) < parseInt(inputElement.getAttribute("min"))){
        inputElement.value = inputElement.defaultValue;
        alert("poner un valor valido");      
    } else {
        inputElement.defaultValue = inputElement.value ;

        //Recorrer form>inputs, sumar y multiplicar y colocar valores
        let inputs = inputElement.form.querySelectorAll("input[type=number]");
        let importeTotal = 0;
        let cantidadTotal = 0;
        inputs.forEach((element)=>{
            let indice = element.getAttribute("id");
            let cantidad = parseInt(element.value);            
            if (cantidad>0){
                cantidadTotal += cantidad;
                importeTotal += productos[indice].precio * cantidad;
            }
        });
        //Modifico los span con las cantidades y suma total
        document.querySelector("#cantidadProductos").textContent = cantidadTotal;
        document.querySelector(".comprarTotal>span:nth-child(2)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(importeTotal);      
    }
}

// Agrega un manejador de eventos para cuando cambien los inputs de cantidad
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('change', (event)=>{
        verificarCamabiosEnCantidades(event.target);
    });
  });

// Manejador de Evento del submit del formulario de compra
let mensajeError = false;

document.querySelector("form").addEventListener("submit", (event) => {
    const divAviso = document.getElementById("mensajeAlerta");
    divAviso.style.display= "flex";
    event.preventDefault(); // no se realiza el submit

    inputs.forEach((element)=>{
        let indice = element.getAttribute("id");
        let cantidad = parseInt(element.value);            
        if (cantidad>0){
            if (cantidad > productos[indice].stock){
                console.log("producto "+indice+" fuera de stock");
                mensajeError = true;            
            }
        }
    });
    //document.querySelectorAll(".mensajeAlerta>span:nth-child(2)").textContent = cantidadTotal;
    // hay que corregir esto!!!!
});


//si hago click fuera del mensaje se oculta de nuevo
document.getElementById("mensajeAlerta").addEventListener('click', function(e) {
document.addEventListener('click', function(event) {
        var clickedItem = event.target;
        if (clickedItem != document.getElementById('mensajeAlerta')) {
            document.getElementById('mensajeAlerta').style.display = 'none';
        }
    });
  });

  // si apreto escape o enter se oculta de nuevo
  document.addEventListener('keydown', function(e) { //cuando presiono cualquier tecla
    if (e.key === 'Enter' || e.key === 'Escape') { // Si presiono letra esc o enter
        document.getElementById('mensajeAlerta').style.display = 'none';
    }
});