interface IVehicle {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: 30 | 40 | 50 | 70 | 100;
  mileage: number;
  fuelFor1Km: number;
}
enum EngineType {
  dohc,
  turbo,
}
enum VehicleType {
  car,
  motorcycle,
}
class Car implements IVehicle {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: 30 | 40 | 50 | 70 | 100;
  mileage: number;
  fuelFor1Km: number;

  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: 30 | 40 | 50 | 70 | 100,
    mileage: number,
    fuelFor1Km: number
  ) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.year = year;
    this.fuelCapacity = fuelCapacity;
    this.mileage = mileage;
    this.fuelFor1Km = fuelFor1Km;
  }
  getVehicle(): void {
    console.log(
      `Brand:${this.brandName},Model:${this.modelName},Year:${this.year},fuelCapacity:${this.fuelCapacity},mileage:${this.mileage},fuelFor1Km${this.fuelFor1Km}`
    );
  }
  drive(km: number): void {
    const fuelUse = km * this.fuelFor1Km;
    if (fuelUse <= this.fuelCapacity) {
      (this.fuelCapacity -= fuelUse), (this.mileage += km);
      console.log(km);
    }
  }
}

class Motorcycle implements IVehicle {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: 30 | 40 | 50 | 70 | 100;
  mileage: number;
  fuelFor1Km: number;
  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: 30 | 40 | 50 | 70 | 100,
    mileage: number,
    fuelFor1Km: number
  ) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.year = year;
    this.fuelCapacity = fuelCapacity;
    this.mileage = mileage;
    this.fuelFor1Km = fuelFor1Km;
  }
  getVehiclee(): void {
    console.log(
      `Brand:${this.brandName},Model:${this.modelName},Year:${this.year},fuelCapacity:${this.fuelCapacity},mileage:${this.mileage},fuelFor1Km${this.fuelFor1Km}`
    );
  }
  drivee(km: number): void {
    const fuelUse = km * this.fuelFor1Km;
    if (fuelUse <= this.fuelCapacity) {
      (this.fuelCapacity -= fuelUse), (this.mileage += km);
      console.log(km);
    }
  }
}
const motor = new Motorcycle("motorstcle", "aa", 2000, 100, 80, 1.1);
const motors = motor.getVehiclee();
motor.drivee(80);

const car = new Car("Mercedes", "S-class", 2022, 100, 100, 0.1);
const cars = car.getVehicle();
car.drive(100);
