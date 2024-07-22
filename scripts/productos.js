"use strict";

let arrProductosNombres = ["Fideos Codito", "Fideos Moño", "Fideos Tallarines", "Arroz Fino Largo", "Arroz Doble Carolina", "Shampoo", "Crema de Enjuague", "Desodorante", "Jabón de Tocador", "Dentrífico", "Queso Cremoso", "Yogourt Bebible", "Yogourt Natural", "Queso Rayado", "Leche Larga Vida", "Lavandina", "Desodorante de Pisos", "Desengrasante", "Detergente", "Perfume de Ambiente", "Plato", "Vaso", "Cuchillo", "Tenedor", "Rejilla", "Alimento para Gatos", "Alimento para Perros", "Piedras Sanitarias", "Bebedero", "Plato para Alimento", "Camisa Manga Larga", "Chomba", "Pantalón Cargo", "Remera Lisa", "Zapatillas", "Fernet", "Vino", "Vodka", "Ron", "Gin", "Osito de Peluche", "Camión Volcador", "Paleta de Ping Pong", "Pistola de Agua", "Dron a Batería", "Pan", "Bizcochos", "Galletitas Secas", "Galletitas Integrales", "Tostadas"];
let arrProductosPrecios = [20.00, 25.00, 22.00, 28.00, 30.00, 31.90, 34.20, 36.50, 38.80, 41.10, 43.40, 45.70, 48.00, 50.30, 52.60, 54.90, 57.20, 30.00, 31.90, 34.20, 36.50, 38.80, 40.94, 43.16, 45.38, 47.60, 49.82, 52.04, 54.26, 56.48, 58.70, 60.92, 63.14, 54.90, 57.20, 30.00, 31.90, 34.20, 36.50, 38.80, 41.10, 43.40, 45.70, 48.00, 50.30, 52.60, 54.90, 57.20, 59.50, 61.80];
let arrProductosStock = [8, 10, 3, 5, 9, 2, 4, 5, 0, 6, 7, 1, 10, 5, 2, 7, 6, 0, 9, 1, 8, 3, 6, 10, 7, 4, 9, 0, 8, 6, 4, 3, 5, 2, 1, 0, 9, 7, 10, 8, 5, 3, 2, 4, 6];
let arrProductos = [];

// Unifica los arreglos en uno
for (let i = 0; i < arrProductosNombres.length; i++) {
    arrProductos.push([]); // Agregamos una nueva fila
    arrProductos[i].push(arrProductosNombres[i], arrProductosPrecios[i], arrProductosStock[i]);
}

// Genera un arreglo de {cantidadProductosEnPromocion} elementos al azar
const cantidadProductosEnPromocion = 4;
let arrPromocion = [];
for (let i = 0; i < cantidadProductosEnPromocion; i++) {
    arrPromocion[i]= (Math.floor(Math.random() * (arrProductos.length + 1)));
}

// Genera un arreglo de {cantidadProductosEnPromocion} elementos al azar
let arrTodosLosProductos = [];
for (let i = 0; i < arrProductos.length; i++) {
    arrTodosLosProductos[i]=i;
}

//Carga los códigos de produtos indicados por {arrProdCods} en la sección indicada por el {sectionSelector}
function cargarProductosEnSeccion(arrProdCods, sectionSelector){
    //Verifico que el navegador soporte <template>
    if ("content" in document.createElement("template")) {
        const tablaProductos = document.querySelector(sectionSelector);
        const template = document.querySelectorAll("template")[0];

        arrProdCods.forEach((codigoProducto) => {
            //Clono una nueva fila y la agrego a la tabla
            const clone = template.content.cloneNode(true);
            clone.querySelector(".producto>div:nth-child(2)").textContent = arrProductos[codigoProducto][0];
            clone.querySelector(".producto>div:nth-child(3)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(arrProductos[codigoProducto][1]);
            const imgProducto = clone.querySelector(".producto>div>div:nth-child(2)>img");
            imgProducto.setAttribute("src", "../imagenes/producto" + codigoProducto + ".webp");
            imgProducto.setAttribute("height", "100%"); // VER
            imgProducto.setAttribute("alt", arrProductos[codigoProducto]);
            clone.querySelector(".producto>div:nth-child(4)>input").setAttribute("id", codigoProducto);

            tablaProductos.appendChild(clone);
        });
    }
}

cargarProductosEnSeccion(arrPromocion, '.seccionPromociones');
cargarProductosEnSeccion(arrTodosLosProductos, '.seccionProductos');

// // Verifico si el navegador soporta templates
// if ("content" in document.createElement("template")) {
//     const tablaProductos = document.querySelector(".seccionProductos");
//     const template = document.querySelector("#producto");

//     arrProductos.forEach((producto, indice) => {
//         //Clono una nueva fila y la agrego a la tabla
//         const clone = template.content.cloneNode(true);
//         clone.querySelector(".producto>div:nth-child(2)").textContent = producto;
//         clone.querySelector(".producto>div:nth-child(3)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(arrPrecios[indice]);
//         const imgProducto = clone.querySelector(".producto>div>div:nth-child(2)>img");
//         imgProducto.setAttribute("src", "../imagenes/producto" + indice + ".webp");
//         imgProducto.setAttribute("height", "100%"); // VER
//         imgProducto.setAttribute("alt", producto);
//         clone.querySelector(".producto>div:nth-child(4)>input").setAttribute("id", indice);
//         tablaProductos.appendChild(clone);
//     });
// } else {
//     console.log("No soporta templates... que hacemos? xD");
// }

//  // cargo los productos en oferta, falta realizar el descuento
//  if ("content" in document.createElement("template")) {
//     const tablaProductos = document.querySelector(".seccionPromociones");
//     const template = document.querySelector("#promociones");

//     arrPromocion.forEach((producto, indice) => {
//         //Clono una nueva fila y la agrego a la tabla
//         const clone = template.content.cloneNode(true);
//         clone.querySelector(".producto>div:nth-child(2)").textContent = arrProductos[producto];
//         clone.querySelector(".producto>div:nth-child(3)").textContent = new Intl.NumberFormat('es-AR', { style: "currency", currency: "ARS" }).format(arrPrecios[producto]);
//         const imgProducto = clone.querySelector(".producto>div>div:nth-child(2)>img");
//         imgProducto.setAttribute("src", "../imagenes/producto" + producto + ".webp");
//         imgProducto.setAttribute("height", "100%"); // VER
//         imgProducto.setAttribute("alt", producto);
//         clone.querySelector(".producto>div:nth-child(4)>input").setAttribute("id", producto);
//         tablaProductos.appendChild(clone);
//     });
// }

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
                importeTotal += arrProductos[indice][1] * cantidad;
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

let mensajeError = false;

document.querySelector("form").addEventListener("submit", (event) => {
    let inputs = event.target.querySelectorAll("input[type=number]");
 
    inputs.forEach((element)=>{
        let indice = element.getAttribute("id");
        let cantidad = parseInt(element.value);            
        if (cantidad>0){
            if (cantidad > arrStock[indice]){
                console.log("producto "+indice+" fuera de stock");
                mensajeError = true;
                
            }
        }
    });
    if(mensajeError){
        event.preventDefault(); // no se realiza el subbmit 
        mensajeError=false;
        alert("error, hay productos sin stock"); // cambiar por el mensaje de error
    }
 });

