var Televisor = /** @class */ (function () {
    function Televisor(decodificador) {
        this.estaPrendido = false;
        this.decodificador = decodificador;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.estaPrendido == true)
            this.decodificador.subirVolumen();
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido == true)
            this.decodificador.bajarVolumen();
    };
    Televisor.prototype.subirCanal = function () {
        if (this.estaPrendido == true)
            this.decodificador.subirCanal();
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido == true)
            this.decodificador.bajarCanal();
    };
    Televisor.prototype.elegirCanal = function (canal) {
        if (this.estaPrendido == true)
            this.decodificador.elegirCanal(canal);
    };
    return Televisor;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador(volumenInicial, canalInicial) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
    }
    Decodificador.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Decodificador.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    return Decodificador;
}());
var miDeco = new Decodificador(10, 5);
var miTv = new Televisor(miDeco);
miTv.prenderApagar();
console.log(miTv);
miTv.bajarCanal();
console.log(miTv);
miTv.elegirCanal(8);
console.log(miTv);
miTv.prenderApagar();
console.log(miTv);
