/*
Arrays - coleção ordenada de elementos do mesmo tipo

Um array pode ser declarado de duas formas:
1. Tipo[] - sintaxe mais comum
2. Array<Tipo> - sintaxe genérica

Possuem tamanho dinâmico e podem conter tipos mistos usando union types
*/
let numList: number[] = [1, 2, 3];
let numList2: Array<number> = [1, 2, 3]; // Sintaxe genérica

// Arrays com tipos mistos (usando union types)
let mixed: (string | number)[] = ["hello", 42, "world"];

/*
Tuples - coleção ordenada de elementos de tipos diferentes
*/
// Tuple - array com tipos específicos em posições específicas
let tupleX: [string, number];
tupleX = ["hello", 10]; // OK

// Acessando elementos da tuple
console.log(tupleX[0].substring(1)); // OK - tupleX[0] é string

// Tuple com elementos opcionais (TypeScript 3.0+)
let y: [number, string, boolean?];
y = [1, "test"]; // OK
y = [1, "test", true]; // OK
