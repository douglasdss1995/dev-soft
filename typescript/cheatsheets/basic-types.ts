// === TIPOS PRIMITIVOS ===

// Boolean - Representa valores lógicos verdadeiro/falso
let isDone: boolean = false;
console.log("Boolean example:", isDone); // false

// Number - Representa números inteiros e de ponto flutuante
let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binário
let octal: number = 0o744; // Octal
console.log("Number examples:", decimal, hex, binary, octal); // 6 61453 10 484

// String - Representa texto
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName}`;
console.log("String examples:", color, sentence); // blue Hello, my name is Bob Bobbington

// Array - Coleção ordenada de elementos do mesmo tipo
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log("Array examples:", list1, list2); // [1, 2, 3] [1, 2, 3]

// Tuple - Array com tipos específicos em posições específicas
let x: [string, number];
x = ["hello", 10];
console.log("Tuple example:", x); // ["hello", 10]
console.log("Tuple access:", x[0], x[1]); // hello 10

// Enum - Conjunto de valores nomeados (constantes)
enum Color {
  Red,
  Green,
  Blue,
} // 0, 1, 2
let c: Color = Color.Green;
console.log("Enum example:", c); // 1 (valor do enum)

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
} // Começa em 1: 1, 2, 3, 4
console.log("Enum with custom values:", Direction.Up, Direction.Down); // 1 2

// Any - Qualquer tipo (evite usar quando possível)
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log("Any type example:", notSure); // false

// Void - Ausência de tipo (usado em funções sem retorno)
function warnUser(): void {
  console.log("This is my warning message");
}
warnUser(); // This is my warning message

// Null e Undefined - Subtipos de todos os outros tipos
let u: undefined = undefined;
let n: null = null;
console.log("Null and undefined:", u, n); // undefined null

// Never - Tipo para valores que nunca ocorrem
function error(message: string): never {
  throw new Error(message);
  // Esta função nunca retorna (sempre lança erro)
}

try {
  error("Test error");
} catch (e) {
  console.log("Never type function threw error:", (e as Error).message);
}

// Object - Qualquer tipo que não seja primitivo
let obj: object = { name: "Test" };
console.log("Object type:", obj); // { name: "Test" }

// Symbol (ES6) - Valor único e imutável
let sym1: symbol = Symbol();
let sym2: symbol = Symbol("key");
console.log("Symbols:", sym1, sym2); // Symbol() Symbol(key)
console.log("Symbols are equal?", sym1 === sym2); // false

// === ASSERTIONS (Afirmações de Tipo) ===

// "as" syntax
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log("'as' assertion:", strLength); // 16

// "angle-bracket" syntax
let strLength2: number = (<string>someValue).length;
console.log("angle bracket assertion:", strLength2); // 16
