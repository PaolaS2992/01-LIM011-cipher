window.cipher = {
  encode: (offset, string) => {
    let resultadoEncriptado = '';
    for (let i = 0; i < string.length; i += 1) {
      const codigoAscci = string.charCodeAt(i);
      if (codigoAscci >= 65 && codigoAscci <= 90) {
        const nuevaPosicion = ((codigoAscci - 65 + offset) % 26) + 65;
        const stringEncriptado = String.fromCharCode(nuevaPosicion);
        resultadoEncriptado += stringEncriptado;
      } else if (codigoAscci >= 97 && codigoAscci <= 122) {
        const nuevaPosicion = ((codigoAscci - 97 + offset) % 26) + 97;
        const stringEncriptado = String.fromCharCode(nuevaPosicion);
        resultadoEncriptado += stringEncriptado;
      } else {
        resultadoEncriptado += string[i];
      }
    }
    return resultadoEncriptado;
  },

  decode: (offset, string) => {
    let resultadoDesencriptado = '';

    for (let i = 0; i < string.length; i += 1) {
      const codigoAscci = string.charCodeAt(i);
      if (codigoAscci >= 65 && codigoAscci <= 90) {
        const nuevaPosicion = ((codigoAscci - 65 - offset + 26 * 2) % 26) + 65;
        const stringEncriptado = String.fromCharCode(nuevaPosicion);
        resultadoDesencriptado += stringEncriptado;
      } else if (codigoAscci >= 97 && codigoAscci <= 122) {
        const nuevaPosicion = ((codigoAscci - 97 - offset + 26 * 2) % 26) + 97;
        const stringEncriptado = String.fromCharCode(nuevaPosicion);
        resultadoDesencriptado += stringEncriptado;
      } else {
        resultadoDesencriptado += string[i];
      }
    }
    return resultadoDesencriptado;
  },
};
