import POKEMON from './data/pokemon/pokemon.js';
import {
  traerDataMap2, filtroHuevo, filtroDebilidadTipo, buscarPorNombre, AsDes, evolutions,
} from './data.js';
// MINIDATA.
const dataPokemon = traerDataMap2(POKEMON);
// CREACION DE LA PORCION DE STRING TEMPLATE DE EVOLUCIONES.
const stringEvolution = (arr) => {
  let newString = '';
  arr.forEach((obj) => {
    newString += `
    <ul class = "columna-evo">
      <li>
        <p>${obj.label}</p>
      </li>
      <li>
        <figure>
          <img src="http://www.serebii.net/pokemongo/pokemon/${obj.num}.png" alt="" id="${obj.num}">
        </figure>
      </li>
      <li>
        <h3>${obj.name}</h3>
      </li>
      <li>
        <h4>${obj.num}</h4>
      </li>
    </ul>
    `;
  });
  return newString;
};
// CREACIÓN ELEMENTO DIV CON STRING TEMPLATE.
const card = (obj) => {
  const divElement = document.createElement('div');
  divElement.classList.add('tarjeta-pokemon');
  divElement.innerHTML = `
  <img src="${obj.imagen}" class="imagen-pokemon">
  <p class="nombre-pokemon">${obj.nombre} </p>
  <p class="numero-pokemon">${obj.numero} </p>
  `;
  // INICIO DEL MODAL.
  divElement.addEventListener('click', () => {
    const divElementModal = document.createElement('div');
    divElementModal.classList.add('modal');
    divElementModal.innerHTML = `
    <div class="flex">
      <div class="contenido-modal">
        <span class="cerrar" id="cerrar">&times;</span>
        <div class="modal-body">
          <div class="modal-header">
            <ul>
              <li>
                <figure>
                  <img src="${obj.imagen}" alt="">
                </figure>
              </li>
              <li>
                <h3>${obj.nombre}</h3>
              </li>
              <li>
                <h4>${obj.numero}</h4>
              </li>
            </ul>
          </div>
          <div class="modal-main">
            <ul class = "columna">
                <li>
                  <div class = "atributo-titulo">Tipo</div>
                  <span class = "atributo-valor">${obj.tipo}</span>
                </li>
                <li>
                  <div class = "atributo-titulo">Altura</div>
                  <span class = "atributo-valor">${obj.altura}</span>
                </li>
                <li>
                  <div class = "atributo-titulo">Peso</div>
                  <span class = "atributo-valor">${obj.peso}</span>
                </li>
                <li>
                  <div class = "atributo-titulo">Caramelos</div>
                  <span class = "atributo-valor">${obj.caramelos}</span>
                </li>                
            </ul>
            <ul class = "columna">
                <li>
                  <div class = "atributo-titulo">H.Aparación</div>
                  <span class = "atributo-valor">${obj.horaAparicion}</span>
                </li>
                <li>
                  <div class = "atributo-titulo">Debilidades</div>
                  <span class = "atributo-valor">${obj.debilidades}</span>
                </li>
                <li>
                <div class = "atributo-titulo">Huevitos</div>
                  <span class = "atributo-valor">${obj.huevo}</span>
                </li>
            </ul>
          </div>
          <div class="modal-footer">
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Previo', obj.identificador))}</div>
            <div class="evolucion">${stringEvolution(evolutions(dataPokemon, 'Siguiente', obj.identificador))}</div>
          </div>
        </div>
      </div>
    </div>`;
    document.body.appendChild(divElementModal);
    divElementModal.classList.add('modal-open');
    const cerrar = document.getElementById('cerrar');
    // CERRAR MODAL
    cerrar.addEventListener('click', () => {
      document.body.removeChild(divElementModal);
    });
  });
  // FIN MODAL.
  return divElement;
};
// RECORRER Y AGREGAR LOS NODOS.
const seccionCardsPokemones = document.querySelector('#insertar-pokemones');
const templateCard = (arr) => {
  seccionCardsPokemones.innerHTML = '';
  arr.forEach((obj) => {
    seccionCardsPokemones.appendChild(card(obj));
  });
};

// PINTAR POKEMONES PANTALLA PRINCIPAL.
templateCard(dataPokemon);
// FILTRO POR HUEVO.
document.querySelector('#filtro-distancia').addEventListener('change', () => {
  const seleccionarhuevo = document.querySelector('#filtro-distancia').value;
  templateCard(filtroHuevo(dataPokemon, seleccionarhuevo));
});
// FILTRO POR DEBILIDADES.
document.querySelector('#filtro-debilidades').addEventListener('change', () => {
  const seleccionarDebilidad = document.querySelector('#filtro-debilidades').value;
  templateCard(filtroDebilidadTipo(dataPokemon, 'debilidades', seleccionarDebilidad));
});
// FILTRO POR TIPO
document.querySelector('#guia-tipos').addEventListener('click', (event) => {
  const seleccionarTipo = event.target.alt;
  templateCard(filtroDebilidadTipo(dataPokemon, 'tipo', seleccionarTipo));
});
// FILTRO POR ORDEN ALFABETICO Y NUMERICO.
document.querySelector('#ordenAlfNum').addEventListener('change', () => {
  const seleccionOpcion = document.querySelector('#ordenAlfNum').value;
  templateCard(AsDes(dataPokemon, seleccionOpcion));
});
// TOP 10 DE FRECUENCIA DE APARICIÓN.
const btnTop10 = document.querySelector('#mayor-frecuencia');
btnTop10.addEventListener('click', () => {
  templateCard(AsDes(dataPokemon, btnTop10.value));
});
//  FILTRO BUSCADOR
document.querySelector('#nombre-pokemon').addEventListener('input', (event) => {
  const pokemonBuscado = event.target.value.toLowerCase();
  templateCard(buscarPorNombre(dataPokemon, pokemonBuscado));
});
// MENU
const toglee = document.querySelector('.toglee');
toglee.addEventListener('click', () => {
  document.getElementById('siderbar').classList.toggle('active');
  document.querySelector('#filtros').reset();
});
