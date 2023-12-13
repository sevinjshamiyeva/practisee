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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    return Animal;
}());
var IFishh;
(function (IFishh) {
    IFishh[IFishh["river"] = 0] = "river";
    IFishh[IFishh["ocean"] = 1] = "ocean";
    IFishh[IFishh["sea"] = 2] = "sea";
})(IFishh || (IFishh = {}));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    return Fish;
}(Animal));
