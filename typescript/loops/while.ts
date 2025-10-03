// While básico
let contador: number = 0;

while (contador < 5) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// Exemplo prático: lendo entrada até condição
let numero: number = 0;
let soma: number = 0;

while (numero !== -1) {
  soma += numero;
  // numero = parseInt(prompt("Digite um número (-1 para parar):") || "0");
  numero++; // Para demonstração
  if (numero > 10) break; // Evita loop infinito no exemplo
}

console.log(`Soma total: ${soma}`);
