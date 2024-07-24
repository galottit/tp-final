"use strict";

productos.forEach((producto, codigo) => {
    if (producto.oferta){       
        //Clono una nueva fila y la agrego a la tabla
        const tablaOfertas = document.querySelector('.seccionPromociones');
        const templateOferta = tablaOfertas.querySelector("#templateProducto");
        const nuevaOferta = templateOferta.content.cloneNode(true);
        
        nuevaOferta.querySelector('div').addEventListener('click', ()=>{
            location.href='/html/productos.html#div'+codigo;
        });

        nuevaOferta.querySelector(".producto").setAttribute("id", "div"+codigo);
        nuevaOferta.querySelector(".nombreProducto").textContent = producto.nombre;
        const imgProducto = nuevaOferta.querySelector(".imagenProducto");
        imgProducto.setAttribute("src", "../imagenes/producto" + codigo + ".webp");
        imgProducto.setAttribute("alt", producto.nombre);
        nuevaOferta.querySelector(".cantidadProducto").setAttribute("id", codigo);    
        
        nuevaOferta.querySelector(".precioTachado").style.display = "flex";
        nuevaOferta.querySelector(".precioTachado").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio);
        nuevaOferta.querySelector(".precioNormal").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio * descuentoOferta);
        nuevaOferta.querySelector(".precioNormal").classList.add("precioConDescuento");
        
        tablaOfertas.appendChild(nuevaOferta);          
    }
});

