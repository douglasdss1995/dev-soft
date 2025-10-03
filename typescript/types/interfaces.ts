// Interface básica
interface User {
  name: string;
  age: number;
  email?: string; // Propriedade opcional
  readonly id: number; // Propriedade somente leitura
}

let user: User = {
  name: "Alice",
  age: 30,
  id: 1,
};

// user.id = 2; // Erro! readonly

// Interface com métodos
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

// Interface com index signature
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];

// Interface com propriedades dinâmicas
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // Qualquer outra propriedade
}
