var EngineType;
(function (EngineType) {
    EngineType[EngineType["dohc"] = 0] = "dohc";
    EngineType[EngineType["turbo"] = 1] = "turbo";
})(EngineType || (EngineType = {}));
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["car"] = 0] = "car";
    VehicleType[VehicleType["motorcycle"] = 1] = "motorcycle";
})(VehicleType || (VehicleType = {}));
var Car = /** @class */ (function () {
    function Car(brandName, modelName, year, fuelCapacity, mileage, fuelFor1Km) {
        this.brandName = brandName;
        this.modelName = modelName;
        this.year = year;
        this.fuelCapacity = fuelCapacity;
        this.mileage = mileage;
        this.fuelFor1Km = fuelFor1Km;
    }
    Car.prototype.getVehicle = function () {
        console.log("Brand:".concat(this.brandName, ",Model:").concat(this.modelName, ",Year:").concat(this.year, ",fuelCapacity:").concat(this.fuelCapacity, ",mileage:").concat(this.mileage, ",fuelFor1Km").concat(this.fuelFor1Km));
    };
    Car.prototype.drive = function (km) {
        var fuelUse = km * this.fuelFor1Km;
        if (fuelUse <= this.fuelCapacity) {
            (this.fuelCapacity -= fuelUse), (this.mileage += km);
            console.log(km);
        }
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle(brandName, modelName, year, fuelCapacity, mileage, fuelFor1Km) {
        this.brandName = brandName;
        this.modelName = modelName;
        this.year = year;
        this.fuelCapacity = fuelCapacity;
        this.mileage = mileage;
        this.fuelFor1Km = fuelFor1Km;
    }
    Motorcycle.prototype.getVehiclee = function () {
        console.log("Brand:".concat(this.brandName, ",Model:").concat(this.modelName, ",Year:").concat(this.year, ",fuelCapacity:").concat(this.fuelCapacity, ",mileage:").concat(this.mileage, ",fuelFor1Km").concat(this.fuelFor1Km));
    };
    Motorcycle.prototype.drivee = function (km) {
        var fuelUse = km * this.fuelFor1Km;
        if (fuelUse <= this.fuelCapacity) {
            (this.fuelCapacity -= fuelUse), (this.mileage += km);
            console.log(km);
        }
    };
    return Motorcycle;
}());
var motor = new Motorcycle("motorstcle", "aa", 2000, 100, 80, 1.1);
var motors = motor.getVehiclee();
motor.drivee(80);
var car = new Car("Mercedes", "S-class", 2022, 100, 100, 0.1);
var cars = car.getVehicle();
car.drive(100);
