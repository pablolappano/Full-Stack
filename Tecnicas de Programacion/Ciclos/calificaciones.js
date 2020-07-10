let readLineSync= require("readline-sync"); 
let nombre=readLineSync.question("Ingrese nombre del alumno: ");
let promedio

while(nombre!=""){
    let notaPractica=readLineSync.questionFloat("ingrese nota de la parte practica: ");
    let notaProblemas=readLineSync.questionFloat("ingrese nota de la parte problemas: ");
    let notaTeorica=readLineSync.questionFloat("ingrese nota de la parte teorica: ");
    promedio=notaPractica*0.1+notaProblemas*0.5+notaTeorica*0.4
    if (notaPractica<0 || notaPractica>10 || notaProblemas<0 || notaProblemas>10 ||  notaTeorica<0 || notaTeorica>10){
        console.log("ERROR: numero no valido (debe ingresar un numero entre 0 y 10)")
        nombre=readLineSync.question("Ingrese nombre del alumno: ");
    }
    else {   
        console.log ("El promedio de ",nombre," es:",promedio);
        nombre=readLineSync.question("Ingrese nombre del alumno: ");
    }
}

