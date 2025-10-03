// Função tradicional com tipos
function calcularArea(largura: number, altura: number): number {
  return largura * altura;
}
// Arrow function
const calcularPerimetro = (largura: number, altura: number): number => {
  return 2 * (largura + altura);
};
// Parâmetros opcionais e padrão
function cumprimentar(
  nome: string,
  sobrenome?: string,
  tratamento: string = "Sr."
) {
  if (sobrenome) {
    return `Olá, ${tratamento} ${nome} ${sobrenome}!`;
  }
  return `Olá, ${nome}!`;
}

console.log(cumprimentar("João")); // "Olá, João!"
console.log(cumprimentar("João", "Silva")); // "Olá, Sr. João Silva!"
console.log(cumprimentar("João", "Silva", "Dr.")); // "Olá, Dr. João Silva!"

// Função que retorna void
function logMensagem(mensagem: string): void {
  console.log(mensagem);
}
