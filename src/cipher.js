window.addEventListener('load', () => {

/* CAPTURAR LOS ELEMENTOS DE HTML*/

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


// ********** FUNCIÓN ENCRIPTAR **********

btnEncriptar.addEventListener('click', () => {

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

        if(posicion >= 0){
            //ANALIZANDO LAS LETRAS MAYUSCULAS A = 65 y Z = 90
            if(code >= 65 && code <= 90){
            //INGRESAR EL NRO DE ESPACIOS Y CONVERTIRLO DE LENGUAJE ASCCI A LETRA.
                code2 = String.fromCharCode((code - 65 + posicion) % 26 + 65);
                console.log("nueva letra: ",code2);
            //ANALIZANDO LAS LETRAS MINUSCULAS a = 97 y z = 122
            }else if(code >= 97 && code <= 122){
                code2= String.fromCharCode((code - 97 + posicion) % 26 + 97);
                console.log("Nueva letra: ", code2);
            }else{
                alert("SOLO INGRESA LETRAS");
                break;                
            }
        }else{
            alert("INGRESA UN NRO POSITIVO !!")
            break;
        }
        
        // IMPRIMIR EN UNA VARIABLE.
        txtEncriptado += code2;
        console.log("encriptado:",txtEncriptado);
        }

        //IMPRIMIR RESPUESTA.
        txtRespuesta1.innerHTML = "El texto encriptado es: " + txtEncriptado;       
});

// ********** FUNCIÓN DESENCRIPTAR **********

btnDesencriptar.addEventListener('click', () =>{

    let cadena = txtDesencriptar.value;
    let posicion = parseInt(txtNroDesencriptar.value);

    let txtDescriptado='';

    for(let i = 0; i < cadena.length; i++){
      
      //LA VARIABLE QUE CONVIERTE LA LETRA EN CODIGO ASCII
      let code = cadena.charCodeAt(i);
      console.log(code);
  
      //LA VARIABLE QUE GUARDA LA CONVERSIÓN DE CODIGO ASCCI A LETRA.
      let code2 = cadena[i];
      console.log(code2);
        
    if(posicion >= 0){
      //ANALIZANDO LAS LETRAS MAYUSCULAS A = 65 y Z = 90
        if(code >= 65 && code <= 90){
            //INGRESAR EL NRO DE ESPACIOS Y CONVERTIRLO DE LENGUAJE ASCCI A LETRA.
            code2 = String.fromCharCode(((code - 65 - posicion + 26 * 2)% 26) + 65);
            console.log(code2);
      //ANALIZANDO LAS LETRAS MINUSCULAS a = 97 y z = 122
        }else if(code >= 97 && code <= 122){
            code2 = String.fromCharCode(((code - 97 - posicion + 26 * 2)% 26) + 97);
            console.log(code2);
        }else{
            alert("SOLO INGRESA LETRAS");
            break;
        }
    }else{
        alert("INGRESA UN NRO POSITIVO !!");
        break;
    }
      //IMPRIMIR EN UNA VARIABLE.
      txtDescriptado += code2; //Acumulador (Forma la palabra).
      console.log("resutado",txtDescriptado);
  
    }
    txtRespuesta2.innerHTML = "El texto desencriptado es: " + txtDescriptado;
});


});