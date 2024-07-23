"use strict";

// Objeto con los datos de los productos
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
    {nombre: "Queso Cremoso", precio: 43.40, stock: 7, oferta: true},
    {nombre: "Yogourt Bebible", precio: 45.70, stock: 1, oferta: true},
    {nombre: "Yogourt Natural", precio: 48.00, stock: 10, oferta: true},
    {nombre: "Queso Rayado", precio: 50.30, stock: 5, oferta: false},
    {nombre: "Leche Larga Vida", precio: 52.60, stock: 2, oferta: true},
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

/* Agrega los productos a la pagina usando templates */
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
    }
}

// Agrega un manejador de eventos para cuando cambien los inputs de cantidad
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('change', (event)=>{
        verificarCamabiosEnCantidades(event.target);
    });
  });

// Cierra el modal con ESC
document.addEventListener('keydown', function(e) { 
    if (e.key === 'Escape') { 
        document.getElementById("modal").style.display = 'none';
    };
});

/* Agrega un nodo nuevo con los datos del producto y cantidad especificados */
function agregarDetalleProducto(id, cantidad){
    //Verifico el soporte de templates
    if ("content" in document.createElement("template")) {
        const detalleCompra = document.querySelector('#detalleCompra');
        const detalleProducto = document.querySelector('#templateDetalleProducto');
    
        //Utilzo el template para generar un nuev nodo
        const nuevoProducto = detalleProducto.content.cloneNode(true);
        //Agrego al div con la clase los datos del producto para usalos luego usando atributos data-*
        nuevoProducto.querySelector('.detalleProducto').setAttribute("data-id", id);
        nuevoProducto.querySelector('.detalleProducto').setAttribute("data-cantidad", cantidad);
        //Altero el contenido de los span
        nuevoProducto.querySelector(".detalleCantProd").textContent = cantidad;        
        nuevoProducto.querySelector(".detalleNombProd").textContent = productos[id].nombre;
        //Calculo el precio y el descuento si así es necesario
        let subTotal = productos[id].precio*cantidad;
        if (productos[id].oferta){
            subTotal*=0.7; // Aplico un descuento del 30%
        }
        nuevoProducto.querySelector(".detalleSubtotal").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(subTotal);
        //Agrego el nodo nuevo
        detalleCompra.appendChild(nuevoProducto);
    };
};

// Muestra el modal al hacer click en el boton de compra
let btnDetalleCompra = document.getElementById("btnDetalleCompra");
btnDetalleCompra.addEventListener("click", (ev)=>{
    document.getElementById("modal").style.display = "block";

    //Elimino los elementos si los hay
    document.querySelectorAll('#detalleCompra .detalleProducto').forEach((element)=>{
        element.remove();
    });
    //Restauro la visibilidad del submit
    document.querySelector('input[type=submit]').classList.remove('elementoOculto');

    //Recorro los input[number], sumar y multiplicar y colocar valores
    let inputs = document.querySelectorAll("input[type=number]");
    let importeTotal = 0;
    let cantidadTotal = 0;
    inputs.forEach((element)=>{
        let id = element.getAttribute("id");
        let cantidad = parseInt(element.value);            
        if (cantidad>0){
            cantidadTotal += cantidad;
            importeTotal += productos[id].precio * cantidad;
            agregarDetalleProducto(id, cantidad); //Llama a la funcion que usa el template
        }
    });
    
    //Modifico los span con las cantidades y suma total
    document.querySelector("#cantidadProductos").textContent = cantidadTotal;
    document.querySelector("#importeTotal").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(importeTotal);      
});

// Cuando el usuario clickea en el <span> (x), cierra el formulario modal
document.getElementById("spanCerrar").addEventListener("click", ()=>{
    document.getElementById("modal").style.display = "none";
})

// Cierra el modal al hacer clic en el fondo del mismo
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").style.display = "none";
    };
}

// Manejador de Evento del submit del formulario de compra
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // no se realiza el submit

    //Recorro el detalle ya generado
    const detalles = document.querySelectorAll('.detalleProducto');
    detalles.forEach((prod)=>{
        let id = prod.getAttribute('data-id');
        let cant = parseInt(prod.getAttribute('data-cantidad'));
        if (cant > productos[id].stock){
            prod.classList.toggle('stockError');
            prod.querySelector('.mensajeError').classList.remove('elementoOculto');
            event.target.querySelector('input[type=submit]').classList.add('elementoOculto');
        }
    })
});