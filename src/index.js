// CAPTURAMOS LOS DIV ATRAVEZ DE ID.

const btnSgte = document.getElementById("btnSgte");
const inicio = document.getElementById("inicio");
const primeraVista = document.getElementById("primeraVista");

let txtEncriptar = document.getElementById("txtEncriptar");
let txtNroEncriptar = document.getElementById("txtNroEncriptar");
//let txtRespuesta1 = document.getElementById("txtRespuesta1");

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

let txtDesencriptar = document.getElementById('txtDesencriptar');
let txtNroDesencriptar = document.getElementById('txtNroDesencriptar');

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


