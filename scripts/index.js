"use strict";

productos.forEach((producto, codigo) => {
    if (producto.oferta){       
        //Clono una nueva fila y la agrego a la tabla
        const tablaOfertas = document.querySelector('.seccionPromociones');
        const templateOferta = tablaOfertas.querySelectorAll("template")[0];
        const nuevaOferta = templateOferta.content.cloneNode(true);
        
        nuevaOferta.querySelector('div').addEventListener('click', ()=>{
            location.href='/html/productos.html#div'+codigo;
        });

        nuevaOferta.querySelector(".producto>div:nth-child(2)").textContent = producto.nombre;
        nuevaOferta.querySelector(".producto>div:nth-child(3)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(producto.precio);
        const imgProducto = nuevaOferta.querySelector(".producto>div>div:nth-child(2)>img");
        imgProducto.setAttribute("src", "../imagenes/producto" + codigo + ".webp");
        imgProducto.setAttribute("alt", producto.nombre);
        tablaOfertas.appendChild(nuevaOferta);            
    }
});