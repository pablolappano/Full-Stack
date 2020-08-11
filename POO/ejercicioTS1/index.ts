import * as readlineSync from "readline-sync";
let palabras: string[] = ["patricia", "pablo", "leila", "chiqui", "carlos", "rosa", "susana", "ramon"];
console.log(palabras);
let opcion: number;

let insertarPalabra = (opcion: number) => {
    if (opcion == 1) {
        let nuevaPalabra: string = readlineSync.question("Ingrese palabra a insertar: ");
        palabras.push(nuevaPalabra);
        console.log(palabras);
    }
};
let eliminarPalabra = (opcion: number) => {
    if (opcion == 2) {
        let palabraAEliminar: string = readlineSync.question("Ingrese palabra a eliminar: ");
        let indiceEncontrado: number = palabras.indexOf((palabraAEliminar))
        if (indiceEncontrado != -1) {
            palabras.splice(indiceEncontrado, 1)
            console.log(palabras)
        } else {
            console.log("----------------------------");
            console.log("la palabra no fue encontrada");
            console.log("----------------------------");
            console.log("");
        }
    }
};
let buscarPalabra = (opcion: number) => {
    if (opcion == 3) {
        let palabraABuscar: string = readlineSync.question("Ingrese palabra a buscar: ");
        let indiceEncontrado: number = palabras.indexOf((palabraABuscar))
        if (indiceEncontrado != -1) {
            console.log("--------------------------------------------");
            console.log("La Palabra " + palabraABuscar + " se encuentra en la " + (indiceEncontrado + 1) + " posicion");
            console.log("--------------------------------------------");
            console.log("");
        } else {
            console.log("----------------------------");
            console.log("la palabra no fue encontrada");
            console.log("----------------------------");
            console.log("");
        }
    }
};
let reemplazarPalabra = (opcion: number) => {
    if (opcion == 4) {
        let palabraAReemplazar: string = readlineSync.question("Ingrese palabra a reemplazar: ");
        let indiceEncontrado: number = palabras.indexOf((palabraAReemplazar))
        if (indiceEncontrado != -1) {
            let nuevaPalabra: string = readlineSync.question("Por que palabra la desea reemplazar?: ");
            palabras.splice(indiceEncontrado, 1, nuevaPalabra)
            console.log(palabras)
        } else {
            console.log("----------------------------");
            console.log("la palabra no fue encontrada");
            console.log("----------------------------");
            console.log("");
        }
    }
};

while (opcion != 0) {
    console.log("Para insertar una palabra opcion  (1)");
    console.log("Para eliminar una palabra opcion  (2)");
    console.log("Para buscar una palabra opcion    (3)");
    console.log("Para modificar una palabra opcion (4)");
    console.log("Para salir presione               (0)");
    opcion = readlineSync.questionInt("Ingrese opcion:");
    insertarPalabra(opcion); eliminarPalabra(opcion); buscarPalabra(opcion); reemplazarPalabra(opcion)
}


