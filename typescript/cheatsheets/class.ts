// === CLASSE BÁSICA ===

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter1 = new Greeter("world");
console.log("Basic class:", greeter1.greet()); // Hello, world

// === MODIFICADORES DE ACESSO ===

class Animal {
  private name: string; // Apenas dentro da classe
  protected species: string; // Classe e subclasses
  public age: number; // Qualquer lugar (padrão)

  constructor(theName: string, theSpecies: string, theAge: number) {
    this.name = theName;
    this.species = theSpecies;
    this.age = theAge;
  }

  public getName(): string {
    return this.name; // Acesso dentro da própria classe
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, age: number, breed: string) {
    super(name, species, age);
    this.breed = breed;
    // this.name = "Fido"; // Erro! name é private
    this.species = "Canine"; // OK! species é protected
  }

  public getSpecies(): string {
    return this.species; // Acesso em subclasses
  }
}

let dog = new Dog("Rex", "Mammal", 3, "Labrador");
console.log(
  "Class with access modifiers:",
  dog.getName(),
  dog.getSpecies(),
  dog.age
);
// Rex Canine 3

// === READONLY MODIFIER ===

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
console.log("Readonly properties:", dad.name, dad.numberOfLegs); // Man with the 8 strong legs 8
// dad.name = "New name"; // Erro! readonly

// === PARAMETER PROPERTIES ===

class Animal2 {
  // Combina declaração e inicialização em um só lugar
  constructor(
    private name: string,
    protected species: string,
    public age: number
  ) {}

  public getInfo(): string {
    return `${this.name} is a ${this.species}, age ${this.age}`;
  }
}

let animal = new Animal2("Tiger", "Feline", 5);
console.log("Parameter properties:", animal.getInfo()); // Tiger is a Feline, age 5
// console.log(animal.name); // Erro! private
// console.log(animal.species); // Erro! protected
console.log("Public property:", animal.age); // 5

// === ACCESSORS (GETTERS/SETTERS) ===

class Employee {
  private _fullName: string = "";

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > 0) {
      this._fullName = newName;
    } else {
      console.log("Error: fullName must not be empty");
    }
  }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
console.log("Getters/Setters:", employee.fullName); // Bob Smith

// === STATIC PROPERTIES ===

class Grid {
  static origin = { x: 0, y: 0 };

  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

Grid.origin.x = 10; // Modificando propriedade estática
console.log("Static properties:", Grid.origin); // {x: 10, y: 0}

// === ABSTRACT CLASSES ===

abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // Deve ser implementado nas subclasses
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing");
  }

  printMeeting(): void {
    console.log("The Accounting Department meets at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department = new AccountingDepartment();
department.printName(); // Department name: Accounting and Auditing
department.printMeeting(); // The Accounting Department meets at 10am.
