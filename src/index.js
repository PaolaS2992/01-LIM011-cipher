const btnDirigirEncriptar = document.getElementById('btn-dirigir-encriptar');
const inicio = document.getElementById('inicio');
const vistaEncriptado = document.getElementById('vista-encriptado');

btnDirigirEncriptar.addEventListener('click', () => {
  inicio.classList.add('hide');
  vistaEncriptado.classList.remove('hide');
});

const btnDirigirDesencriptar = document.getElementById('btn-dirigir-desencriptar');
const vistaDesencriptado = document.getElementById('vista-desencriptado');

btnDirigirDesencriptar.addEventListener('click', () => {
  inicio.classList.add('hide');
  vistaDesencriptado.classList.remove('hide');
});

const txtEncriptar = document.getElementById('input-palabra-encriptar');
const txtNroEncriptar = document.getElementById('input-offset-encriptar');
const txtRespuesta1 = document.getElementById('txt-resultado1');
const btnEncriptar = document.getElementById('btn-encriptar');

btnEncriptar.addEventListener('click', () => {
  const cadena = txtEncriptar.value;
  const posicion = txtNroEncriptar.value;
  if (cadena.length > 0 && posicion.length > 0 && parseInt(posicion, 10) > 0) {
    txtRespuesta1.innerHTML = window.cipher.encode(parseInt(txtNroEncriptar.value, 10),
      txtEncriptar.value);
  } else {
    txtRespuesta1.innerHTML = 'Ingresar los datos y offset positivo';
  }
});

const btnSgteEncriptar = document.getElementById('btn-siguiente-encriptar');
const mensajeEncriptado = document.getElementById('vista-mensaje-encriptado');

btnSgteEncriptar.addEventListener('click', () => {
  const cadena = txtEncriptar.value;
  const posicion = txtNroEncriptar.value;
  if (cadena.length > 0 && posicion.length > 0) {
    vistaEncriptado.classList.add('hide');
    mensajeEncriptado.classList.remove('hide');
  } else {
    txtRespuesta1.innerHTML = 'TE FALTA ENCRIPTAR';
  }
});

const txtDesencriptar = document.getElementById('input-palabra-desencriptar');
const txtNroDesencriptar = document.getElementById('input-offset-desencriptar');
const txtRespuesta2 = document.getElementById('txt-resultado2');
const btnDesencriptar = document.getElementById('btn-desencriptar');

btnDesencriptar.addEventListener('click', () => {
  const cadena = txtDesencriptar.value;
  const posicion = txtNroDesencriptar.value;
  if (cadena.length > 0 && posicion.length > 0 && parseInt(posicion, 10) > 0) {
    txtRespuesta2.innerHTML = window.cipher.decode(parseInt(txtNroDesencriptar.value, 10),
      txtDesencriptar.value);
  } else {
    txtRespuesta2.innerHTML = 'Ingresar los datos y offset positivo';
  }
});

const btnSgtDescencriptar = document.getElementById('btn-siguiente-desencriptar');
const mensajeDesencriptado = document.getElementById('vista-mensaje-desencriptado');

btnSgtDescencriptar.addEventListener('click', () => {
  const cadena = txtDesencriptar.value;
  const posicion = txtNroDesencriptar.value;
  if (cadena.length > 0 && posicion.length > 0) {
    vistaDesencriptado.classList.add('hide');
    mensajeDesencriptado.classList.remove('hide');
  } else {
    txtRespuesta2.innerHTML = 'TE FALTA DESENCRIPTAR';
  }
});
