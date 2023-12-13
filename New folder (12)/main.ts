interface IAnimal {
  name: string;
  age: number;
}

abstract class Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
enum IFishh {
  river,
  ocean,
  sea,
}
interface IBird {
  getfly: () => void;
  wingColor: string;
}
interface IFish {
  getswim: () => void;
  livePlace: IFishh;
}
class Bird extends Animal {
  constructor(readonly name: string, readonly age: number) {
    super(name, age);
  }
}
class Fish extends Animal {
  constructor(readonly name: string, readonly age: number) {
    super(name, age);
  }
}
interface Ikill<T> {
  kill: T;
}
