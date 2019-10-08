// CAPTURAR LOS ELEMENTOS DE HTML PARA LAS FUNCIONES

// ELEMENTOS PARA ENCRIPTAR.
let txtNroEncriptar = document.getElementById('txtNroEncriptar');
let txtEncriptar = document.getElementById('txtEncriptar');
let btnEncriptar = document.getElementById('btnEncriptar');

// ELEMENTOS PARA DESENCRIPTAR.
let txtNroDesencriptar = document.getElementById('txtNroDesencriptar');
let txtDesencriptar = document.getElementById('txtDesencriptar');
let btnDesencriptar = document.getElementById('btnDesencriptar');

// ELEMENTO PARA MOSTRAR RESPUESTA.
let txtRespuesta1 = document.getElementById('txtRespuesta1');
let txtRespuesta2 = document.getElementById('txtRespuesta2');

// BOTON EVENTO CLICK "CIFRA".
btnEncriptar.addEventListener("click", () => {
    txtRespuesta1.innerHTML = window.cipher.encode(parseInt(txtNroEncriptar.value),txtEncriptar.value);
});

// BOTONN EVENTO CLICK "DESCIFRA".
btnDesencriptar.addEventListener("click", () => {
    txtRespuesta2.innerHTML = window.cipher.decode(parseInt(txtNroDesencriptar.value),txtDesencriptar.value);
});

// CAPTURAMOS LOS ID DEL DIV PARA MOSTRAR Y OCULTAR.

const btnSgte = document.getElementById("btnSgte");
const inicio = document.getElementById("inicio");
const primeraVista = document.getElementById("primeraVista");

// BOTON SIGUIENTE.

btnSgte.addEventListener("click",() => {

    cadena = txtEncriptar.value;
    posicion = txtNroEncriptar.value;
   //respuesta = txtRespuesta1.value; NO FUNCIONA :( 

    if(cadena.length > 0 && posicion.length > 0){
        inicio.classList.add("hide");
        primeraVista.classList.remove("hide");
    }else{
        alert("INGRESAR TODOS LOS DATOS");
    }
});

const btnFin = document.getElementById("btnFin");
const segundaVista = document.getElementById("segundaVista");

// BOTON FINALIZAR.
btnFin.addEventListener("click",() => {

    cadena = txtDesencriptar.value;
    posicion = txtNroDesencriptar.value;

    if(cadena.length > 0 && posicion.length > 0){
        primeraVista.classList.add("hide");
        segundaVista.classList.remove("hide");
    }else{
        alert("INGRESAR TODOS LOS DATOS");
    }
    
});


