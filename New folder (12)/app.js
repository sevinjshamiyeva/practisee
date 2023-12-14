var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this.private_name = name;
        this.private_surname = name;
        this.age = age;
    }
    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this.private_name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this.private_surname;
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.getInfo = function () {
        return this.name, this.surname;
    };
    return Human;
}());
var position;
(function (position) {
    position[position["developer"] = 0] = "developer";
    position[position["designer"] = 1] = "designer";
    position[position["hr"] = 2] = "hr";
})(position || (position = {}));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, GPA, hobbies) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        if (GPA < 0 || GPA > 100) {
            _this._GPA = 0;
        }
        else {
            _this._GPA = GPA;
        }
        _this.hobbies = hobbies;
        return _this;
    }
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (value) {
            if (value >= 0 && value <= 100) {
                this._GPA = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        if (this._GPA < 50) {
            return false;
        }
        else {
            return true;
        }
    };
    //method override
    Student.prototype.getInfo = function () {
        return "".concat(this.groupName, " & has GPA:").concat(this.GPA);
    };
    return Student;
}(Human));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skills, position) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.salary = salary;
        _this.skills = skills;
        _this.position = position;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        return "".concat(this.position, " & get paid: ").concat(this.salary);
    };
    return Employee;
}(Human));
var Forms = document.querySelector(".Forms");
var inp2 = document.querySelector(".inp2");
var inp3 = document.querySelector(".inp3");
var inp4 = document.querySelector(".inp4");
var inp5 = document.querySelector(".inp5");
var inp6 = document.querySelector(".inp6");
var inp7 = document.querySelector(".inp7");
var inp8 = document.querySelector(".inp8");
