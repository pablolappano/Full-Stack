let readlineSync=require("readline-sync");
let numero= readlineSync.questionInt("Ingrese un numero: "); 

while(numero<=0){ 
    console.log("Usted ingreso un numero menor que cero"); 
    numero=readlineSync.questionInt("Ingrese otro numero mayor que cero: "); 

} 
if(numero%2==0){ 
    console.log("El numero ingresado es par:" + numero); 

}else{ 
    console.log("El numero ingresado es impar"); 
}