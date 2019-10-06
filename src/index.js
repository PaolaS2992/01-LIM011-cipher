/* CAPTURAR LOS ELEMENTOS DE HTML*/

// ELEMENTOS PARA ENCRIPTAR.
let txtNroEncriptar = document.getElementById('txtNroEncriptar');
let txtEncriptar = document.getElementById('txtEncriptar');

// ELEMENTOS PARA DESENCRIPTAR.
let txtNroDesencriptar = document.getElementById('txtNroDesencriptar');
let txtDesencriptar = document.getElementById('txtDesencriptar');
let btnDesencriptar = document.getElementById('btnDesencriptar');

// ELEMENTO PARA MOSTRAR RESPUESTA.
let txtRespuesta = document.getElementById('txtRespuesta');


//Bloques.
//const btnEncriptar = document.getElementById("btnEncriptar");
const btnSgte = document.getElementById("btnSgte");
const inicio = document.getElementById("inicio");
const primeraVista = document.getElementById("primeraVista");


btnSgte.addEventListener("click",() => {
/*
    let cadena = txtEncriptar.value;
    let posicion = parseInt(txtNroEncriptar.value); 

    let txtEncriptado = '';

        for(let i = 0; i < cadena.length; i++){
        //LA VARIABLE QUE CONVIERTE LA LETRA EN CODIGO ASCCI.
        let code = cadena.charCodeAt(i);
        console.log(code);

        //LA VARIABLE QUE GUARDA LA CONVERSION DE CODIGO ASCCI A LETRA.
        let code2 = cadena[i];
        console.log(code2);

            if(code >= 65 && code <= 90){
            //INGRESAR EL NRO DE ESPACIOS Y CONVERTIRLO DE LENGUAJE ASCCI A LETRA.
                code2 = String.fromCharCode((code - 65 + posicion) % 26 + 65);
                console.log("nueva letra: ",code2);
            }

        // IMPRIMIR EN UNA VARIABLE.
        txtEncriptado += code2;
        console.log("encriptado:",txtEncriptado);

        }

        //IMPRIMIR RESPUESTA.
        txtRespuesta.innerHTML = "El texto encriptado es: " + txtEncriptado;

*/
    inicio.classList.add("hide");
    primeraVista.classList.remove("hide");
});