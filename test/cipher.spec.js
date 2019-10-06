
/*Funcion para Encriptar*/

function cipherEncode(posicion, cadena){
  
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
    console.log(code2);
    }
  
    // IMPRIMIR EN UNA VARIABLE.
    txtEncriptado += code2;
    console.log(txtEncriptado);

  }
}

cipherEncode(33,'ABC')


/*Funcion para Desencriptar*/

function cipherDecode(posicion, cadena){

let txtDescriptado='';

  for(i = 0; i < cadena.length; i++){
    
    //LA VARIABLE QUE CONVIERTE LA LETRA EN CODIGO ASCII
    let code = cadena.charCodeAt(i);
    console.log(code);

    //LA VARIABLE QUE GUARDA LA CONVERSIÓN DE CODIGO ASCCI A LETRA.
    let code2 = cadena[i];
    console.log(code2);

    //ANALIZANDO LAS LETRAS MAYUSCULAS A = 65 y Z = 90
    if(code >= 65 && code <= 90){
      //INGRESAR EL NRO DE ESPACIOS Y CONVERTIRLO DE LENGUAJE ASCCI A LETRA.
      code2 = String.fromCharCode(((code - 65 - posicion + 26 * 2)% 26) + 65);
      console.log(code2);
    }

    //IMPRIMIR EN UNA VARIABLE.
    txtDescriptado += code2; //Acumulador (Forma la palabra).
    console.log("resutado",txtDescriptado);

  }
  //result.innerHTML = "El texto desencriptado es: " + txtDescriptado;
}

cipherDecode(33,'HIJ')



