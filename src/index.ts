//Cuantas butacas desocupadas hay?
let dimension: number = Number(prompt("ingrese dimension"));
let cine: boolean[] = new Array(dimension);
let libre: number = 0;
let cargarButacas = (arreglo: boolean[], cantidad: number): boolean[] => {
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = confirm(
      "Si esta Vacia pulse Cancelar, si esta ocupada pulse Aceptar"
    );
  }
  return arreglo;
};
let butacasVacias = (arreglo: any[]): number => {
  let i: number;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === false) {
      libre++;
    }
  }
  return libre;
};
cargarButacas(cine, dimension);
console.log(cine);
console.log("La cantidad de butacas desocupadas es: " + butacasVacias(cine));
