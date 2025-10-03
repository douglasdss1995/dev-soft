// Enum numérico básico
enum DirectionNum {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let dir: DirectionNum = DirectionNum.Up;
console.log(dir); // 0

// Enum com valores personalizados
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

// Enum string
enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Enums com métodos (usando const enum para melhor performance)
const enum Sizes {
  Small,
  Medium,
  Large,
}

let mySize = Sizes.Medium;
console.log(mySize); // 1

// Enum calculado
enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
}
