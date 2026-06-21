// return type can be number, string, array, Promise, void

function addTwo(a: number, b: number): number {
  return a + b;
}

console.log(addTwo(1, 2));

function getGreeting(name: string): string {
  return `Hello, ${name}!`;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}
