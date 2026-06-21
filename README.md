# TypeScript

## Boolean

```ts
let isDone: boolean = false;
```

### Number

```ts
let decimal: number = 6;
```

### String

```ts
let color: string = "blue";
```

### Array

```ts
let list: number[] = [1, 2, 3];
let genericList: Array<string> = ["safe", "types"];
```

### Object and Interface

```ts
interface User {
  id: number;
}
let inlineObj: { id: number } = { id: 1 };
```

### Record;

```ts
let userAges: Record<string, number> = {
  alice: 25,
};
```

### RegExp

```ts
let pattern: RegExp = /ab+c/i;
```

</br>

## TS Function Return Types

### 1. The Primitives (Basic Data)

These are your everyday values.

- `string`: Returns text.

- `number`: Returns a number.

- `boolean`: Returns true or false.

```TypeScript
function getGreeting(name: string): string {
    return `Hello, ${name}!`;
}


function isEven(num: number): boolean {
    return num % 2 === 0;
}
```

### 2. The "Absence of Value" Types

What if your function doesn't return anything, or specifically shouldn't return anything?

- `void`: The function completes its task but doesn't return a value. Think of it like a command (e.g., logging something to the console or updating the DOM).

- `never`: The function never finishes running. This is usually because it throws an error and stops the program, or it contains an infinite loop.

```TypeScript
// Void: It does something, but returns nothing
function logMessage(msg: string): void {
  console.log(msg);
}

// Never: It crashes or stops execution intentionally
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
```

### 3. Complex Data (Arrays, Objects, and Interfaces)

When you need to return lists or structured data.

- Arrays (`Type[] or Array<Type>`): A list of a specific type.

- Interfaces/Type Aliases: A custom shape of an object (like the User example we discussed earlier).

```TypeScript
// Returns an array of numbers
function getScores(): number[] {
  return [95, 80, 100];
}

// Returns a custom object shape
interface Product {
  id: number;
  name: string;
}

function createProduct(): Product {
  return { id: 1, name: "Keyboard" };
}
```

### 4. Asynchronous Types (Promises)

If you are fetching data from a database or an API, your function takes time to finish. In JavaScript, this is handled by a Promise. In TypeScript, you must specify what type the Promise will eventually resolve to.

- `Promise<Type>`: Returns a Promise that will eventually yield a specific type.

```TypeScript
// Notice the 'async' keyword. It means a Promise is automatically returned!
async function fetchUsername(userId: number): Promise<string> {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data.username; // This must be a string
}
```

### 5. The "Flexible" Types

Sometimes you don't know exactly what will come back, or it depends on the input.

- `any`: Turns off TypeScript's checking entirely (avoid this if possible).

- `unknown`: A safer version of any. It means "I don't know what this is yet, so force me to check before I use it."

- Union Types (`TypeA | TypeB`): The function might return one of several different types.

- Generics (`<T>`): A placeholder type that gets decided when you actually call the function.

```TypeScript
// Union: Returns EITHER a string OR a number
function parseId(id: string): string | number {
  if (id.startsWith("USER\_")) {
    return id; // Returns string
  }
  return parseInt(id); // Returns number
}
```
