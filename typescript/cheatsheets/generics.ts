// === GENERICS BÁSICOS ===

// Função genérica - trabalha com qualquer tipo, mantendo a segurança de tipos
function identity<T>(arg: T): T {
  return arg;
}

// Usando generics com tipos específicos
let output1 = identity<string>("myString");
let output2 = identity("myString"); // Tipo inferido automaticamente
console.log("Generic function:", output1, output2); // myString myString

// === GENERICS COM ARRAYS ===

// Generic function que trabalha com arrays
function loggingIdentity<T>(arg: T[]): T[] {
  console.log("Array length:", arg.length); // Array tem .length
  return arg;
}

let result = loggingIdentity([1, 2, 3]);
console.log("Generic with arrays:", result); // [1, 2, 3]

// === GENERIC TYPES ===

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity2;
console.log("Generic interface:", myIdentity(42)); // 42

// === GENERIC CLASSES ===

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFunction;
  }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
console.log("Generic class:", myGenericNumber.add(5, 3)); // 8

let stringNumeric = new GenericNumber<string>("", (x, y) => x + y);
console.log(
  "Generic class with strings:",
  stringNumeric.add("hello", " world")
); // hello world

// === GENERIC CONSTRAINTS ===

// Restringindo tipos genéricos para terem certas propriedades
interface Lengthwise {
  length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log("Length constraint:", arg.length); // Agora sabemos que tem .length
  return arg;
}

// Funciona com tipos que têm propriedade length
console.log("Generic constraint - string:", loggingIdentity2("abc")); // abc
console.log("Generic constraint - array:", loggingIdentity2([1, 2, 3])); // [1, 2, 3]

// === USING TYPE PARAMETERS IN GENERIC CONSTRAINTS ===

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log("Keyof constraint:", getProperty(x, "a")); // 1
console.log("Keyof constraint:", getProperty(x, "c")); // 3

// === GENERICS COM MULTIPLOS TIPOS ===

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

let swapped = swap(["hello", 123]);
console.log("Generic with multiple types:", swapped); // [123, "hello"]

// === GENERICS COM DEFAULT TYPES ===

interface Container<T = string> {
  value: T;
}

let stringContainer: Container = { value: "hello" };
let numberContainer: Container<number> = { value: 42 };
console.log("Generic with default:", stringContainer, numberContainer);
