class Televisor {
    decodificador: Decodificador
    private estaPrendido: boolean
    

constructor(decodificador:Decodificador) {
    this.estaPrendido = false;
    this.decodificador=decodificador;
}


prenderApagar(): void {
    if(this.estaPrendido)
    this.estaPrendido = false
        else
            this.estaPrendido = true
}
subirVolumen(): void {
    if(this.estaPrendido=true)
    this.decodificador.subirVolumen()
}
bajarVolumen(): void {
    if(this.estaPrendido=true)
    this.decodificador.bajarVolumen()
}
subirCanal(): void {
    if(this.estaPrendido=true)
    this.decodificador.subirCanal()
}
bajarCanal(): void {
    if(this.estaPrendido=true)
    this.decodificador.bajarCanal()
}
elegirCanal(canal: number): void {
    if(this.estaPrendido=true)
    this.decodificador.elegirCanal(canal)
}
 }


 class Decodificador {
    private volumenActual: number
    private canalActual: number

constructor(volumenInicial: number, canalInicial: number) {
    this.volumenActual = volumenInicial;
    this.canalActual = canalInicial;
    }


subirVolumen(): void {
    this.volumenActual = this.volumenActual + 1
}
bajarVolumen(): void {
    this.volumenActual = this.volumenActual - 1
}
subirCanal(): void {
    this.canalActual = this.canalActual + 1
}
bajarCanal(): void {
    this.canalActual = this.canalActual - 1
}
elegirCanal(canal: number): void {
    this.canalActual = canal;
}
 }

let miDeco:Decodificador=new Decodificador (10,5);
let miTv:Televisor=new Televisor(miDeco);
miTv.prenderApagar()
console.log(miTv)
miTv.bajarCanal()
console.log(miTv)
miTv.elegirCanal(8)
console.log(miTv)
miTv.prenderApagar()
console.log(miTv)
