let readlineSync=require("readline-sync");
let texto=readlineSync.question("Ingrese un texto:");
let textoMinusculas=texto.toLocaleLowerCase()
let arregloTexto=textoMinusculas.split("");

let devolverVocales=(texto)=> {
    let vocalesEncontradas=[""];
    let vocales=0;
    for(let i=0; i<texto.length; i++) {
        if (texto[i]=="a"||texto[i]=="e"||texto[i]=="i"||texto[i]=="o"||texto[i]=="u") {
            vocalesEncontradas[vocales]=texto[i];
            vocales++;
        }
    }
    return vocalesEncontradas;
}

let devolverConsonantes=(texto)=> {
    let consonantesEncontradas=[""];
    let consonantes=0;
    for(let i=0; i<texto.length; i++) {
        if (texto[i]!="a"&&texto[i]!="e"&&texto[i]!="i"&&texto[i]!="o"&&texto[i]!="u") {
            consonantesEncontradas[consonantes]=texto[i];
            consonantes++;
        }
    }
    return consonantesEncontradas;
}

console.log(`El texto en minusculas es: ${textoMinusculas}`);
console.log (`Las vocales son: ${devolverVocales(arregloTexto)}`);
console.log (`Las consonantes son: ${devolverConsonantes(arregloTexto)}`);
