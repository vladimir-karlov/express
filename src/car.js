var V8Engine = /** @class */ (function () {
    function V8Engine() {
    }
    V8Engine.prototype.startEngine = function () {
        console.log("V8 engine started");
    };
    return V8Engine;
}());
var SportsCar = /** @class */ (function () {
    function SportsCar(engine) {
        this.engine = engine;
    }
    SportsCar.prototype.start = function () {
        this.engine.startEngine();
        console.log("Sports car started");
    };
    return SportsCar;
}());
var carEngine = new V8Engine();
var sportsCar = new SportsCar(carEngine);
sportsCar.start();
