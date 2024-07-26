"use strict";

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let telefono = document.getElementById("telefono");
let consulta = document.getElementById("cajaConsulta");
let botonEnviar = document.getElementById("botonEnviar");
let formularioContacto = [];

botonEnviar.addEventListener("click", () => {
    formularioContacto[0] = nombre.value;
    formularioContacto[1] = apellido.value;
    formularioContacto[2] = email.value;
    formularioContacto[3] = telefono.value;
    formularioContacto[4] = consulta.value;
    //compruebo si alguno de los campos está vacio
    let datosCompletos = true;
    for(let i=0; i<formularioContacto.length; i++){
        if(formularioContacto[i].length == 0){
            datosCompletos = false;
        }
    }
    if(datosCompletos){
        let blob = new Blob([formularioContacto], {type: "text/plain;charset=utf-8"}); // navegador
        //Libreria FileSaver.min.js
        saveAs(blob, "contact.txt");
        console.log(blob)
    }
})