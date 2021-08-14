"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const Name = (name) => {
    return (constructor) => {
        constructor.prototype.name = name;
    };
};
const Details = (target, key, propertyDescriptor) => {
    propertyDescriptor.value = (...args) => {
        let [name, color, doors] = args;
        return `The name of car is ${name} and has ${color} color and ${doors} doors.`;
    };
};
let Car = class Car {
    constructor(color, doors) {
        this.color = color;
        this.doors = doors;
    }
    getDetails(name, color, doors) {
        // Returning details using @Details decorator
    }
};
__decorate([
    Details,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], Car.prototype, "getDetails", null);
Car = __decorate([
    Name('BMW'),
    __metadata("design:paramtypes", [String, Number])
], Car);
const car = new Car('white', 5);
const carName = car.name;
// console.log(carName); // Prining the name of car
const details = car.getDetails(car.name, car.color, car.doors);
// console.log(details)  // Prining the details of car
