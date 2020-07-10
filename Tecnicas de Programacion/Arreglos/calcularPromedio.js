let obtenerPromedio=(arreglo, longitudArreglo, minimo, maximo) =>{ 
    let suma=0;
    let promedio=0 
for(let i=0; i < longitudArreglo; i++){ 
    let aleatorios=Math.round(Math.random()*10);
    
    if (aleatorios>=minimo && aleatorios<=maximo){
        arreglo[i]=aleatorios
        suma=arreglo[i]+suma;
        promedio=(suma)/longitudArreglo
        }
    else {i=i-1}
}
console.log (`las edades son: ${edades}`);
return promedio
}

let edades=[]
console.log (`El promedio es: ${obtenerPromedio(edades,15,3,7)}`);