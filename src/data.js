// FUNCION MINIDATA.
export const traerDataMap2 = (arr) => arr.map((ele) => {
  const obj = {
    identificador: ele.id,
    debilidades: ele.weaknesses,
    nombre: ele.name,
    imagen: ele.img,
    numero: ele.num,
    tipo: ele.type,
    altura: ele.height,
    peso: ele.weight,
    caramelos: ele.candy_count,
    horaAparicion: ele.spawn_time,    
    huevo: ele.egg,
    frecuencia: ele.avg_spawns,
    Previo: ele.prev_evolution,
    Siguiente: ele.next_evolution,    
  };
  return obj;
});
// FUNCION HUEVITOS.
export const filtroHuevo = (array, distancia) => {
  const nuevoArray = array.filter((objeto) => objeto.huevo === distancia);
  return nuevoArray;
};
// FUNCION PARA DEBILIDADES Y TIPO.
export const filtroDebilidadTipo = (array, propiedad, valor) => {
  const newArray = []
  array.forEach((objeto) => {
    objeto[propiedad].forEach((string) => {
      if(string === valor) { 
        newArray.push(objeto);
      }
    });
  });
  return newArray;
};
// FILTRO AVANZADO: SE CONSIDERA EL TIPO Y DEBILIDAD.
export const filtroFusionado = (arr, tipo, debilidad) => {
  const newArray = [];
  const newArray1 = [];
  arr.forEach((objeto) => {
    objeto.tipo.forEach((string) => {
      if(string === tipo){
        newArray.push(objeto);   
      }   
    });  
  });
  newArray.forEach((objeto) => {
    objeto.debilidades.forEach((string) => {
      if(string === debilidad){
        newArray1.push(objeto);
      }
    });
  });
  return newArray1;
}
// FUNCION PARA ORDENAR DEL MENOS Y MÁS DEBIL.
export const filtroGeneralDebilidad = (arr, str) => {
  let newArray = [];
  if(str === 'MENOSDEBI'){
    newArray = arr.sort((a, b) => {
      if(a.debilidades.length > b.debilidades.length) return 1;
      if(a.debilidades.length < b.debilidades.length) return -1;
      return 0;
    });
  }
  if(str === 'MASDEBI'){
    newArray = arr.sort((a, b) => {
      if(b.debilidades.length > a.debilidades.length) return 1;
      if(b.debilidades.length < a.debilidades.length) return -1;
      return 0;
    });
  }
  return newArray;
}
// FUNCION PARA BUSCAR NOMBRES.
export const buscarPorNombre = (array, nombre) => {
  const nuevoArraysss = array.filter((objeto) => objeto.nombre.toLowerCase().startsWith(nombre));
  return nuevoArraysss;
};
// FUNCION PARA ORDENAR POR NOMBRE, NUMERO Y TOP 10
export const ordenAlfNum = (arr, propiedad) => {
  return arr.sort((a, b) => {
    if (a[propiedad] < b[propiedad]){return -1;}
  });
};
// SELECCIONANDO STRING.(PARTE DE LA FUNCIÓ ORDENAR).
export const AsDes = (data, string) => {
  switch (string) {
    case 'A-Z':
      return ordenAlfNum(data, 'nombre');
    case 'Z-A':
      return ordenAlfNum(data, 'nombre').reverse();
    case 'ASC':
      return ordenAlfNum(data, 'numero');
    case 'DESC':
      return ordenAlfNum(data, 'numero').reverse();
    case 'MENORF':
      return ordenAlfNum(data, 'frecuencia').slice(0,10);
    case 'MAYORF':
      return ordenAlfNum(data, 'frecuencia').reverse().slice(0,10);
    default:
      break;
  }
}
// FUNCION PARA EVOLUCIONES.
export const evolutions = (arr, propiedad, num) => {
  let newArray = [];
  arr.forEach((objeto) => {
    if(objeto.identificador === num){
      if(objeto[propiedad] === undefined){
        newArray = [];
      }else{
        objeto[propiedad].forEach((obj) => {
          obj.label = propiedad;
          newArray.push(obj);
        });
      }
    }
  });
  return newArray;
}
// FUNCION PARA INF.EVOLUCIONES Y CARAMELOS.
export const filterInfEvoAndCandy = (arr, propiedad, string) => {
  const newArray = arr.filter(obj => obj[propiedad] === string);
  return newArray;
}
