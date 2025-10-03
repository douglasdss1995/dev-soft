/**
 * Soma dois números.
 *
 * @param a - O primeiro número.
 * @param b - O segundo número.
 * @returns A soma de a e b.
 *
 * @example
 * // Uso correto:
 * const resultado = somar(2, 3); // resultado = 5
 *
 * // Uso incorreto:
 * // const resultado = somar("2", 3); // Erro: Argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'number'.
 */
function somar(a: number, b: number): number {
  return a + b;
}

// Exemplo de uso correto:
const resultadoCorreto = somar(10, 5);
console.log("Resultado correto:", resultadoCorreto); // Resultado correto: 15

// Exemplo de uso incorreto (irá gerar erro de compilação):
// const resultadoIncorreto = somar("10", 5); //
