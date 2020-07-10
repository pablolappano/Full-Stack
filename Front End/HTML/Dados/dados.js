"use strict";

let tirarDados=() =>{
    let dado1=[]
    let dado2=[]
    let sietes=0
    for (let index = 0; index <1000; index++) {
        dado1[index]=Math.round(Math.random()*5+1)
        dado2[index]=Math.round(Math.random()*5+1)
        console.log (dado1,dado2)
        let sumaDados=dado1[index]+dado2[index]
    if(sumaDados==7){
        sietes++;
            } 
    }
    let resultado=document.querySelector("span");
    resultado.innerHTML=(0)
    resultado.innerHTML=(sietes);
}
