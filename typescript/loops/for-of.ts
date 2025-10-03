// Para arrays
const numeros: number[] = [10, 20, 30, 40, 50];

for (const numero of numeros) {
  console.log(`Valor: ${numero}`);
}

// Para strings
const palavra: string = "TypeScript";
for (const char of palavra) {
  console.log(`Caractere: ${char}`);
}
// Output: T y p e S c r i p t

// Com destructuring
const pessoas: [string, number][] = [
  ["João", 25],
  ["Maria", 30],
  ["Pedro", 35],
];

for (const [nome, idade] of pessoas) {
  console.log(`${nome} tem ${idade} anos`);
}
// Output:
// João tem 25 anos
// Maria tem 30 anos
// Pedro tem 35 anos
