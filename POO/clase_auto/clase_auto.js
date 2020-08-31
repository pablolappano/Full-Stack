var Auto = /** @class */ (function () {
    function Auto(combustibleInicial) {
        this.velocidad = 0;
        this.marcha = 0;
        this.combustible = combustibleInicial;
        this.encendido = false;
    }
    Auto.prototype.acelerar = function () {
        if (this.combustible > 0 && this.encendido == true) {
            this.velocidad = this.velocidad + 10;
            this.combustible--;
        }
        if (this.combustible <= 0) {
            this.encendido = false;
        }
    };
    Auto.prototype.desacelerar = function () {
        if (this.velocidad > 10) {
            this.velocidad = this.velocidad - 10;
        }
    };
    Auto.prototype.subirMarcha = function () {
        if (this.marcha <= 4 && this.encendido == true) {
            this.marcha++;
            this.combustible--;
        }
        if (this.combustible <= 0) {
            this.encendido = false;
        }
    };
    Auto.prototype.bajarMarcha = function () {
        if (this.marcha >= 0 && this.encendido == true) {
            this.marcha--;
            this.combustible--;
        }
        if (this.combustible <= 0) {
            this.encendido = false;
        }
    };
    Auto.prototype.cargarCombustible = function (litros) {
        this.combustible = this.combustible + litros;
    };
    Auto.prototype.encender = function () {
        if (this.encendido)
            this.encendido = false;
        else
            this.encendido = true;
    };
    return Auto;
}());
var corsa = new Auto(5);
corsa.encender();
corsa.acelerar();
corsa.subirMarcha();
corsa.acelerar();
corsa.subirMarcha();
corsa.desacelerar();
corsa.bajarMarcha();
console.log(corsa);
