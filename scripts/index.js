"use strict";

// Cargo el banner animado con las ofertas
productos.forEach((producto, codigo) => {
    if (producto.oferta){       
        //Clono una nueva fila y la agrego a la tabla
        const tablaOfertas = document.querySelector('.seccionPromociones');
        const templateOferta = document.querySelector("#templateProductoOferta");
        const nuevaOferta = templateOferta.content.cloneNode(true);
        //Agrego manejador de eventos en click del div para saltar a la página/producto indicado
        nuevaOferta.querySelector('div').addEventListener('click', ()=>{location.href='./html/productos.html#div'+codigo;});
        nuevaOferta.querySelector(".producto").setAttribute("id", "div"+codigo);
        nuevaOferta.querySelector(".nombreProducto").textContent = producto.nombre;
        const imgProducto = nuevaOferta.querySelector(".imagenProducto");
        imgProducto.setAttribute("src", "./imagenes/producto" + codigo + ".webp");
        imgProducto.setAttribute("alt", producto.nombre);
        const precioTachado = nuevaOferta.querySelector(".precioTachado");
        precioTachado.style.display = "flex";
        precioTachado.textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio);
        const precioNormal = nuevaOferta.querySelector(".precioNormal");
        precioNormal.textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio * descuentoOferta);
        precioNormal.classList.add("precioConDescuento");
        tablaOfertas.appendChild(nuevaOferta);          
    }
});

