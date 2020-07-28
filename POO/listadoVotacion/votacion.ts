import * as fs from 'fs';
import * as readlineSync from 'readline-sync';
let nombresDesordenados: string = fs.readFileSync('nombres.txt', 'utf-8');
let escuelasDesordenadas: string = fs.readFileSync('escuelas.txt', 'utf-8');
let nombresOrdenados: string[] = nombresDesordenados.split(",");
let escuelasOrdenadas: string[] = escuelasDesordenadas.split(";");
let nombreABuscar: string
nombresOrdenados.sort();
console.log(nombresOrdenados);

let buscarNombre = (nombreABuscar: string) => {
  if (nombreABuscar != "") {
    let indiceEncontrado: number = nombresOrdenados.indexOf((nombreABuscar))
    if (indiceEncontrado != -1) {
      console.log("--------------------------------------------");
      console.log(nombreABuscar + " votara en " + elegirEscuela(indiceEncontrado));
      console.log("--------------------------------------------");
      console.log("");
    } else {
      console.log("---------------------------");
      console.log("el nombre no fue encontrado");
      console.log("---------------------------");
      console.log("");
    }
  }
};

let elegirEscuela = (posicionNombre: number): string => {
  let escuelaAsignada: number = (((posicionNombre + 1) * escuelasOrdenadas.length) / nombresOrdenados.length)
  let escuelaAsignadaEntero = Math.floor(escuelaAsignada)
  if (escuelaAsignadaEntero == escuelasOrdenadas.length) {
    escuelaAsignadaEntero--
  }
  return escuelasOrdenadas[escuelaAsignadaEntero]
}

while (nombreABuscar != "") {
  nombreABuscar = readlineSync.question("Ingrese apellido y nombre (todo mayuscula y sin coma) o enter para salir: ");
  buscarNombre(nombreABuscar);
}