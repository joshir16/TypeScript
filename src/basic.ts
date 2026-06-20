// boolean
let hasLoggedIn: boolean = true;

// number
let num: number = 28;

// string
let user: string = "Rishabh";
user += " Joshi";

// Array
const names: string[] = user.split(" ");
const myValues: Array<number> = [1, 2, 3, 4, 5];

// Object
interface Person {
  firstName: string;
  firstLast: string;
}

const obj: Person = {
  firstName: "Rishabh",
  firstLast: "Joshi",
  //   cool: true
  // only specify known properties and 'cool' does not exist in type '{ firstName: string; firstLast: string; }`
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";
