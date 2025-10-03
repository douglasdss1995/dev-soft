// === INTERFACE BÁSICA ===

// Interfaces definem a "forma" de um objeto
interface Person {
  firstName: string; // Propriedade obrigatória
  lastName: string; // Propriedade obrigatória
  age?: number; // Propriedade opcional (devido ao ?)
  readonly id: number; // Propriedade somente leitura
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user: Person = {
  firstName: "Jane",
  lastName: "User",
  id: 1,
};

console.log("Interface example:", greeter(user)); // Hello, Jane User

// === INTERFACES COM FUNÇÕES ===

// Interface que descreve uma função
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

console.log("Function interface:", mySearch("Hello World", "World")); // true

// === INTERFACES COM INDEXABLE TYPES ===

// Interface que permite indexação
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];
console.log("Indexable interface:", myArray[0], myArray[1]); // Bob Fred

// === EXTENDENDO INTERFACES ===

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
console.log("Extended interface:", square); // { color: "blue", sideLength: 10 }

// === INTERFACES COM CLASSES ===

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

let clock = new Clock(12, 0);
console.log("Class implementing interface:", clock.currentTime);

// === INTERFACES COM PROPRIEDADES OPCIONAIS ===

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // Index signature
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "white",
    area: config.width ? config.width * config.width : 100,
  };
}

let mySquare = createSquare({ color: "black" });
console.log("Optional properties:", mySquare); // { color: "black", area: 100 }// Boolean - valores verdadeiro/falso
let isActive: boolean = true;
// Number - todos os números (inteiros e decimais)
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// String - texto
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName}`;
// Null e Undefined
let u: undefined = undefined;
let n: null = null;
console.log(isDone, decimal, color, sentence, u, n);
