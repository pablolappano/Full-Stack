let readlineSync = require("readline-sync"); 
let clave = readlineSync.question("Ingrese la clave: "); 
let contador=0; 
let acierto; 

if(clave== "eureka"){ 
    acierto=true; 
} 
while(contador<2 && !acierto){ 
    let claveCorrecta= readlineSync.question("Introduzca la clave correcta: "); 
    if(claveCorrecta=="eureka"){ 
        acierto=true; 
    } 
    contador++; 

} 
if(acierto){ 
    console.log("Clave correcta"); 
    
}else{ 
    console.log("Ya no tiene mas intentos"); 
}