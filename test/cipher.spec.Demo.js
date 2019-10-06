/* ++++++++++++++++++++ ENCRIPTAR UNA LETRA ++++++++++++++++++++++ */

// INGRESAR TEXTO.
let x = "A"

// INGRESAR NRO DE POSICIONES.
let n = 33

// FORMULA.
let nCodigo = (x.charCodeAt(0) - 65 + n) % 26 + 65

// NUEVA LETRA.
document.write(String.fromCharCode(nCodigo))

/* ++++++++++++++++++++ ENCRIPTAR UNA PALABRA ++++++++++++++++++++++ */

//INGRESAMOS LA PALABRA
let palabra = "ABC";
let nCodAscci = 0;

// RECORRER LA PALABRA.
for (i = 0; i < palabra.length; i++){
    //document.write(palabra[i],"\n");
    //document.write(codAsccii= palabra[i].charCodeAt(palabra[i]),"aa <br>");

    //Nueva Posicion.
    nCodAscci = (palabra[i].charCodeAt(palabra[i]) - 65 + n) % 26 + 65;
    document.write("Numero: ",nCodAscci, "<br>");

    //Codigo Cifrado.
    document.write("Letra: ", String.fromCharCode(nCodAscci),"<br>");
}



/*

ANTERIOR DESENCRIPTADO.
libre = 0;
//Nuevo Codigo ASCII
cAscci = (cadena[i].charCodeAt(cadena[i]) - 65 + y) % 26 + 65;
//La posición
posicion = (cadena[i].charCodeAt(cadena[i]) - 65 + y) % 26;        
//El des-encriptado.
console.log(cAscci-posicion);
libre = cAscci - posicion; // NO FUNCIONA :(
document.write("numero posición: ",posicion, "<br>");
document.write("numero Ascci: ",cAscci, "<br>");
document.write("numero Letra: ",libre, "<br>");// NO FUNCIONA :(
document.write("letra: ",String.fromCharCode(cAscci-posicion),"<br>")// NO FUNCIONA :(

*/