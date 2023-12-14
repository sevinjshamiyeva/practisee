interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): string;
}
abstract class Human implements IHuman {
  private_name!: string;
  private_surname!: string;
  age: number;
  constructor(name: string, surname: string, age: number) {
    this.private_name = name;
    this.private_surname = name;
    this.age = age;
  }
  get name() {
    return this.private_name;
  }
  get surname() {
    return this.private_surname;
  }
  getInfo(): string {
    return this.name, this.surname;
  }
}
enum position {
  developer,
  designer,
  hr,
}
interface IEmployee<T> {
  salary: number;
  position: position;
  skills: T;
}

interface IStudent<T> {
  groupName: string;
  hobbies: T;
  GPA: number;
  hasPassed: () => boolean;
}
class Student extends Human implements IStudent<string[]> {
  public groupName: string;
  private _GPA!: number;
  public hobbies: string[];
  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    GPA: number,
    hobbies: string[]
  ) {
    super(name, surname, age);
    this.groupName = groupName;
    if (GPA < 0 || GPA > 100) {
      this._GPA = 0;
    } else {
      this._GPA = GPA;
    }
    this.hobbies = hobbies;
  }

  get GPA() {
    return this._GPA;
  }
  set GPA(value: number) {
    if (value >= 0 && value <= 100) {
      this._GPA = value;
    }
  }

  hasPassed(): boolean {
    if (this._GPA < 50) {
      return false;
    } else {
      return true;
    }
  }

  //method override
  getInfo(): string {
    return `${this.groupName} & has GPA:${this.GPA}`;
  }
}

class Employee extends Human implements IEmployee<string[]> {
  public salary: number;
  public skills: string[];
  position: position;

  constructor(
    name: string,
    surname: string,
    age: number,
    salary: number,
    skills: string[],
    position: position
  ) {
    super(name, surname, age);
    this.salary = salary;
    this.skills = skills;
    this.position = position;
  }

  getInfo(): string {
    return `${this.position} & get paid: ${this.salary}`;
  }
}
let Forms = document.querySelector(".Forms");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");
let inp5 = document.querySelector(".inp5");
let inp6 = document.querySelector(".inp6");
let inp7 = document.querySelector(".inp7");
let inp8 = document.querySelector(".inp8");
