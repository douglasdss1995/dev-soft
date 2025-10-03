// === PARTIAL<T> ===
// Torna todas as propriedades opcionais

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
  completed: false,
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log("Partial utility:", todo2);
// { title: "organize desk", description: "throw out trash", completed: false }

// === PICK<T,K> ===
// Seleciona um conjunto de propriedades K do tipo T

interface Todo4 {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Pick<Todo4, "title" | "completed">;

const todoPreview: TodoPreview = {
  title: "Clean room",
  completed: false,
};

console.log("Pick utility:", todoPreview);
// { title: "Clean room", completed: false }

// === OMIT<T,K> ===
// Remove um conjunto de propriedades K do tipo T

type TodoPreview2 = Omit<Todo4, "description">;

const todoPreview2: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

console.log("Omit utility:", todoPreview2);
// { title: "Clean room", completed: false, createdAt: 1615544252770 }

// === RECORD<K,T> ===
// Cria um tipo com um conjunto de propriedades K do tipo T

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

console.log("Record utility:", nav);
// { home: { title: "Home" }, about: { title: "About" }, contact: { title: "Contact" } }

// === READONLY<T> ===
// Torna todas as propriedades readonly

interface Todo2 {
  title: string;
}

const todo3: Readonly<Todo2> = {
  title: "Delete inactive users",
};

console.log("Readonly utility:", todo3);
// todo3.title = "Hello"; // Erro: não pode atribuir a 'title'

// === EXCLUDE<T,U> ===
// Exclui do tipo T todos os tipos que são atribuíveis a U

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

console.log("Exclude utility types:", typeof {} as T0, typeof {} as T1);

// === EXTRACT<T,U> ===
// Extrai do tipo T todos os tipos que são atribuíveis a U

type T3 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T4 = Extract<string | number | (() => void), Function>; // () => void

console.log("Extract utility types:", typeof {} as T3);

// === NONNULLABLE<T> ===
// Exclui null e undefined do tipo T

type T5 = NonNullable<string | number | undefined>; // string | number
type T6 = NonNullable<string[] | null | undefined>; // string[]

console.log("NonNullable utility:", typeof {} as T5);

// === PARAMETERS<T> ===
// Constrói uma tupla de tipos dos parâmetros de uma função

type T7 = Parameters<() => string>; // []
type T8 = Parameters<(s: string) => void>; // [string]
type T9 = Parameters<<T>(arg: T) => T>; // [unknown]

console.log("Parameters utility:", typeof [] as T7, typeof [] as T8);

// === RETURN TYPE<T> ===
// Constrói um tipo consistindo do tipo de retorno da função T

type T10 = ReturnType<() => string>; // string
type T11 = ReturnType<(s: string) => void>; // void

console.log("ReturnType utility:", typeof "" as T10);
