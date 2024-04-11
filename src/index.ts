function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age: number) {
  return age >= 35;
}

function countOdd(arr: number[]): number {
  return arr.filter((num) => num % 2 !== 0).length;
}

function sumEven(arr: number[]): number {
  return arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0);
}

type Address = {
  street: string;
  streetNo: number;
  city: string;
};

type Person = {
  name: string;
  birthYear: number;
  address: Address;
};

function getPersonStreetNo(p: Person) {
  return p.address.streetNo;
}

class PersonClass {
  private name: string = "";

  birthYear: number = 0;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}

class EmployeeClass extends PersonClass {
  employeeId: number = -1;
}

interface IPerson {
  name: string;
  birthYear: number;
}

const getPersonNameString = (p: IPerson) => `${p.name}, ${p.birthYear}`;

const printThis = (p: Person | undefined | null) =>
  !p ? "no person supplied" : p.name;

const optionallyAdd = (
  num1: number,
  num2: number,
  num3: number = 0,
  num4: number = 0,
  num5: number = 0
) => {
  return num1 + num2 + num3 + num4 + num5;
};

const greetPeople = (greeting: string, ...names: string[]) => {
  return `${greeting} ${names.join(" and ")}`.trim();
};

const addToStart = <T>(list: T[], itemToAdd: T): T[] => {
  return [itemToAdd, ...list];
};

class Wrapper<T> {
  private list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  public getFirst(): T {
    return this.list[0];
  }
  public getLast(): T {
    return this.list[this.list.length - 1];
  }
}

/*const p = new PersonClass("Marcus", 1972);
console.log(p.getName());

const e = new EmployeeClass("Marcus Employee", 1972);
console.log(e.getName());
console.log(e.employeeId);*/

export {
  greet,
  isOld,
  countOdd,
  sumEven,
  Address,
  Person,
  getPersonStreetNo,
  getPersonNameString,
  printThis,
  PersonClass,
  EmployeeClass,
  IPerson,
  optionallyAdd,
  greetPeople,
  isOld as isOldPerson, // can export as an alias
  addToStart,
  Wrapper
};

export const isOldPer = (age: number) => age >= 35; // can export the function directly

