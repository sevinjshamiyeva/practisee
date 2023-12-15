import Human from "./Human";
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

export default Student;
