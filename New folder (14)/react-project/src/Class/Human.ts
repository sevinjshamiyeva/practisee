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
export default Human;
