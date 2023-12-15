import Human from "./Human";
interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
}
enum Position {
  developer,
  designer,
  hr,
}
class Employee extends Human implements IEmployee<string[]> {
  public salary: number;
  public skills: string[];
  position: Position;

  constructor(
    name: string,
    surname: string,
    age: number,
    salary: number,
    skills: string[],
    position: Position
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
export default Employee;
