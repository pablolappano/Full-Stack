class Auto {
    private velocidad: number;
    private marcha: number;
    private combustible: number;
    private encendido: boolean;

    public constructor(combustibleInicial: number) {
        this.velocidad = 0;
        this.marcha = 0;
        this.combustible = combustibleInicial;
        this.encendido = false;
    }
    public acelerar(): void {
        if (this.combustible > 0 && this.encendido == true) {
            this.velocidad = this.velocidad + 10;
            this.combustible--;
        }
        if (this.combustible <= 0) {
            this.encendido = false;
        }
    }

    public desacelerar(): void {
        if (this.velocidad > 10) {
            this.velocidad = this.velocidad - 10;
        }
    }

    public subirMarcha(): void {
        if (this.marcha <= 4 && this.encendido == true) {
            this.marcha++;
            this.combustible--;
        }
        if (this.combustible <= 0) {
            this.encendido = false;
        }
    }

    public bajarMarcha(): void {
        if (this.marcha >= 0 && this.encendido == true) {
            this.marcha--;
            this.combustible--;
        }
        if (this.combustible <= 0) {
            this.encendido = false;

        }
    }

    public cargarCombustible(litros: number): void {
        this.combustible = this.combustible + litros;
    }

    public encender(): void {
        if (this.encendido)
            this.encendido = false;
        else
            this.encendido = true;
    }
}

