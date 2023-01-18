interface Engine {
    startnpm install -g mocha(): void;
  }
  
  interface Car {
    engine: Engine;
    start(): void;
  }
  
  class V8Engine implements Engine {
    start() {
      console.log("V8 engine started");
    }
  }
  
  class SportsCar implements Car {
    engine: Engine;
  
    constructor(engine: Engine) {
      this.engine = engine;
    }
  
    start() {
      this.engine.start();
      console.log("Sports car started");
    }
  }
  
  const carEngine = new V8Engine();
  const sportsCar = new SportsCar(carEngine);
  sportsCar.start();