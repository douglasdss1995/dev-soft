console.log("=== DECORATORS ===");
console.log("Decorators requerem configuração especial no tsconfig.json");

// Decorators são funções que modificam classes, métodos, propriedades ou parâmetros
// Eles são uma feature experimental do TypeScript

// === DECORATORS BÁSICOS ===

// Decorator de classe - modifica o construtor da classe
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  console.log(`Class ${constructor.name} has been sealed`);
}

@sealed
class Greeter2 {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

// === DECORATORS DE MÉTODO ===

// Factory decorator - retorna uma função decorator
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
    console.log(`Method ${propertyKey} enumerable set to ${value}`);
  };
}

class Greeter3 {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

// === DECORATOR FACTORY ===

function configurable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
    console.log(`Property ${propertyKey} configurable set to ${value}`);
  };
}

class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

let point = new Point(10, 20);
console.log("Decorator example:", point.x, point.y); // 10 20
