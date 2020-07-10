let readlineSync = require('readline-sync');
let edad = readlineSync.questionInt('Edad?: ');
let altura = readlineSync.questionInt('Altura?: ');
if (edad>13 && altura >150) {
   console.log ("PUEDE SUBIR A LA MONTAÑA RUSA")}
else {console.log ("ANDA A LA CALESITA")}