// === TIPOS DE FUNÇÃO ===

// Função nomeada com tipos
function add(x: number, y: number): number {
  return x + y;
}
console.log("Named function:", add(2, 3)); // 5

// Função anônima
let myAdd = function (x: number, y: number): number {
  return x + y;
};
console.log("Anonymous function:", myAdd(5, 7)); // 12

// === PARÂMETROS OPCIONAIS E DEFAULT ===

function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

console.log("Optional parameter:", buildName("John")); // John
console.log("Optional parameter:", buildName("John", "Doe")); // John Doe

function buildName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

console.log("Default parameter:", buildName2("Jane")); // Jane Smith
console.log("Default parameter:", buildName2("Jane", "Wilson")); // Jane Wilson

// === REST PARAMETERS (PARÂMETROS REST) ===

// Rest Parameters permitem que uma função aceite um número indefinido de argumentos
// Os argumentos são agrupados em um array
function buildName3(firstName: string, ...restOfName: string[]) {
  // ...restOfName é um array contendo todos os argumentos extras
  return firstName + " " + restOfName.join(" ");
}

// Chamando a função com diferentes números de argumentos
console.log("Rest parameters:", buildName3("Joseph"));
// Joseph (restOfName é um array vazio [])

console.log("Rest parameters:", buildName3("Joseph", "Samuel"));
// Joseph Samuel (restOfName = ["Samuel"])

console.log(
  "Rest parameters:",
  buildName3("Joseph", "Samuel", "Lucas", "MacKinzie")
);
// Joseph Samuel Lucas MacKinzie (restOfName = ["Samuel", "Lucas", "MacKinzie"])

// Outro exemplo mais prático
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum with rest:", sum(1, 2, 3, 4, 5)); // 15
console.log("Sum with rest:", sum(10, 20)); // 30

// Exemplo com tipos mistos
function logMessages(prefix: string, ...messages: any[]): void {
  messages.forEach((msg) => {
    console.log(`${prefix}: ${msg}`);
  });
}

logMessages("DEBUG", "User logged in", 42, true);
// DEBUG: User logged in
// DEBUG: 42
// DEBUG: true

// === REST PARAMETERS COM OBJETOS ===

function createPerson(
  name: string,
  ...hobbies: string[]
): { name: string; hobbies: string[] } {
  return {
    name: name,
    hobbies: hobbies,
  };
}

let person = createPerson("Alice", "reading", "swimming", "coding");
console.log("Person with hobbies:", person);
// { name: "Alice", hobbies: ["reading", "swimming", "coding"] }

// === THIS PARAMETERS ===

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    // O parâmetro 'this: Deck' garante que a função seja chamada com o contexto correto
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker(); // Erro se não tiver o this parameter
console.log("This parameter example: Function prepared but not executed");

// === OVERLOADS ===

// Function overloads permitem que uma função tenha múltiplas assinaturas
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x): any {
  // Implementação real da função
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let suits = ["hearts", "spades", "clubs", "diamonds"];
let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("Function overload - pick from deck:", pickedCard1);

let pickedCard2 = pickCard(15);
console.log("Function overload - pick by number:", pickedCard2);
