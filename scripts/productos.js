"use strict";
let numeroCompra = 1;

/* Agrega los productos a la pagina usando templates */
//Verifico que el navegador soporte <template>
if ("content" in document.createElement("template")) {
    const tablaProductos = document.querySelector('.seccionProductos');
    const templateProducto = document.querySelector("#templateProducto");

    productos.forEach((producto, codigo) => {

        //Clono una nueva fila y la agrego a la tabla
        const nuevoProducto = templateProducto.content.cloneNode(true);
        nuevoProducto.querySelector(".producto").setAttribute("id", "div"+codigo);
        nuevoProducto.querySelector(".nombreProducto").textContent = producto.nombre;
        if(producto.stock == 0){
            nuevoProducto.querySelector(".stockProducto").textContent = "Sin stock";
        } else {
            nuevoProducto.querySelector(".stockProducto").textContent = "Stock: " + producto.stock;
        }
        const imgProducto = nuevoProducto.querySelector(".imagenProducto");
        imgProducto.setAttribute("src", "../imagenes/producto" + codigo + ".webp");
        imgProducto.setAttribute("alt", producto.nombre);
        nuevoProducto.querySelector(".cantidadProducto").setAttribute("id", codigo);
        if(producto.oferta){
            const precioTachado = nuevoProducto.querySelector(".precioTachado");
            precioTachado.style.display = "flex";
            precioTachado.textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio);
            const precioNormal = nuevoProducto.querySelector(".precioNormal");
            precioNormal.textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio * descuentoOferta);
            precioNormal.classList.add("precioConDescuento");
            const imgDescuento = nuevoProducto.querySelector(".imagenDescuento");
            imgDescuento.classList.remove("elementoOculto");
        }
        else {
            nuevoProducto.querySelector(".precioNormal").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio);
        }                               
        tablaProductos.appendChild(nuevoProducto);
    });
}

// Agrego los manejadores de eventos a los botones de sumar y restar
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

    //Verifico si hay productos seleccionados para mostrar/ocultar el botón de compra
    let hayProductosSeleccionados = false;
    document.querySelectorAll('input').forEach((input) => {
        if (parseInt(input.value) > 0){
            hayProductosSeleccionados = true;
        };
    });
    let btnDetalleCompra = document.querySelector('.botonDetalleCompra')
    if (hayProductosSeleccionados){
        btnDetalleCompra.classList.remove('elementoOculto');
        btnDetalleCompra.classList.add('animarBotonDetalleCompra');
    }else{
        btnDetalleCompra.classList.add('elementoOculto');
        btnDetalleCompra.classList.remove('animarBotonDetalleCompra');
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
            subTotal*=descuentoOferta; // Aplico un descuento del 30%
        }
        nuevoProducto.querySelector(".detalleSubtotal").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(subTotal);
        //Agrego el nodo nuevo
        detalleCompra.appendChild(nuevoProducto);
    };
};

// Muestra el modal al hacer click en el boton de compra
document.querySelector(".botonDetalleCompra").addEventListener("click", (ev)=>{    
    //Elimino los elementos si los hay
    document.querySelectorAll('#detalleCompra .detalleProducto').forEach((element)=>{
        element.remove();
    });
    //Restauro la visibilidad del pie del modal
    const modalPie = document.getElementById('modalPie');
    modalPie.classList.remove('elementoOculto');   
    //Recorro los input[number], sumar y multiplicar y colocar valores
    let inputs = document.querySelectorAll("input[type=number]");
    let importeTotal = 0;
    let cantidadTotal = 0;
    inputs.forEach((element)=>{
        let id = element.getAttribute("id");
        let cantidad = parseInt(element.value);            
        if (cantidad>0){
            cantidadTotal += cantidad;
            if (productos[id].oferta){
                importeTotal += productos[id].precio * cantidad * descuentoOferta;
            }else{
                importeTotal += productos[id].precio * cantidad;
            }            
            agregarDetalleProducto(id, cantidad); //Llama a la funcion que usa el template
        }
    });
    //Modifico los span con las cantidades y suma total
    document.querySelector("#cantidadProductos").textContent = cantidadTotal;
    document.querySelector("#importeTotal").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(importeTotal);      
    document.getElementById("modal").style.display = "block";
    if (numeroCompra < 10){
        document.querySelector("#numeroCompra").textContent =" 0"+ numeroCompra;
    } else {
        document.querySelector("#numeroCompra").textContent =" "+ numeroCompra;
    }
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
    //Detengo el envío del formulario
    event.preventDefault();

    //Recorro el detalle ya generado
    const detalles = document.querySelectorAll('.detalleProducto');
    let error = false;
    if (detalles.length>0){
        detalles.forEach((prod)=>{
            let id = prod.getAttribute('data-id');
            let cant = parseInt(prod.getAttribute('data-cantidad'));
            if (cant > productos[id].stock){
                error = true;
                prod.classList.toggle('stockError');
                let msgError = prod.querySelector('.mensajeError');
                msgError.classList.remove('elementoOculto');
                msgError.textContent = "  Cantidad de productos supera el stock (Disponibles:  "+productos[id].stock+")";
                // oculto el pie del modal
                const modalPie = document.getElementById('modalPie');
                modalPie.classList.add('elementoOculto');
            }
        });
        // Si no hay errores procedo a descontar el stock
        if (!error){            
            detalles.forEach((prod)=>{
                let id = prod.getAttribute('data-id');
                let cant = parseInt(prod.getAttribute('data-cantidad'));
                productos[id].stock -= cant;
            });
            //Termino
            alert("Gracias por su Compra");
            simularRecargarPagina();
            document.getElementById("modal").style.display = "none";
        }
    }
});

//accionas a ejecutar cuando selecciono método de pago
const efectivo = document.getElementById('efectivo');
const transferencia = document.getElementById('transferencia');
const tarjeta = document.getElementById('tarjeta');
const spanEfectivo = document.getElementById('spanEfectivo');
const spanTransferencia = document.getElementById('spanTransferencia');
const divTarjeta = document.getElementById('divTarjeta');

efectivo.addEventListener('change', () => {
    spanEfectivo.classList.remove('elementoOculto');
    spanTransferencia.classList.add('elementoOculto');
    divTarjeta.classList.add('elementoOculto');
    divTarjeta.querySelectorAll('input').forEach((input) => {
        input.toggleAttribute("required", false);
    })
});
transferencia.addEventListener('change', () => {
    spanEfectivo.classList.add('elementoOculto');
    spanTransferencia.classList.remove('elementoOculto');
    divTarjeta.classList.add('elementoOculto');
    divTarjeta.querySelectorAll('input').forEach((input) => {
        input.toggleAttribute("required", false);
    })
});
tarjeta.addEventListener('change', () => {
    spanEfectivo.classList.add('elementoOculto');
    spanTransferencia.classList.add('elementoOculto');
    divTarjeta.classList.remove('elementoOculto');
    divTarjeta.querySelectorAll('input').forEach((input) => {
        input.toggleAttribute("required", true);
    })
});

function simularRecargarPagina() {
     //recorro todos los inputs y los vuelvo a 0
    const inputs = document.querySelectorAll('.cantidadProducto');
    inputs.forEach(input => {
        input.value = 0;
        verificarCamabiosEnCantidades(input);
    });
    //llevo la pagina al principio
    window.scrollTo({ top: 0, behavior: 'smooth' }); //voy hacia arriba de forma suave
    numeroCompra++;
    const stock = document.querySelectorAll('.stockProducto');
    stock.forEach((element, indice) => { //recorro todos los stock y los recargo con el stock actual
        if(productos[indice].stock == 0){
            element.textContent = "Sin stock";
        } else {
            element.textContent = productos[indice].stock;
        }
    });
}

