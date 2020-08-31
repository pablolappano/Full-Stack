class Auto{
    private velocidad:number
    private marcha:number
    private combustible:number
    private encendido:boolean

constructor(combustibleInicial:number) {
    this.velocidad=0;
    this.marcha=0;
    this.combustible=combustibleInicial;
    this.encendido=false
}
acelerar():void{ 
    if (this.combustible > 0 && this.encendido==true){
        this.velocidad=this.velocidad+10;
        this.combustible--
        }
    if (this.combustible <=0){
        this.encendido=false;
        }
}

desacelerar():void{ 
        if (this.velocidad > 10){
            this.velocidad=this.velocidad-10;
        }
}

subirMarcha():void{ 
    if (this.marcha <= 4 && this.encendido==true){
        this.marcha++
        this.combustible--
    }
    if (this.combustible <=0){
        this.encendido=false;
      }
}

bajarMarcha():void{ 
    if (this.marcha >= 0 && this.encendido==true){
        this.marcha--
        this.combustible--
    }
    if (this.combustible <=0){
        this.encendido=false;
        
    }
}

cargarCombustible(litros:number):void{
    this.combustible=this.combustible+litros
}

encender(): void {
    if(this.encendido)
    this.encendido = false
        else
            this.encendido = true
}
}

