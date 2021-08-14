const Name = (name: string) => {
    return (constructor: Function) => {
        constructor.prototype.name = name;
    }
}

const Details = (
    target: Object,
    key: string,
    propertyDescriptor: PropertyDescriptor
) => {
    propertyDescriptor.value = (...args: unknown[]) => {
        let [name, color, doors] = args;
        return `The name of car is ${name} and has ${color} color and ${doors} doors.`;
    }
}

const Param = (
    target: Object,
    key: string,
    index: number
) => {
    const paramPosition = index;
    // console.log(paramPosition);
}

@Name('BMW')
class Car {
    color: string;
    doors: number;
    name!: string; // The name property will be injected by the decorator!

    @Details
    getDetails(name: string, color: string, @Param doors: number) {
        // Returning details using @Details decorator
    }

    constructor(color: string, doors: number) {
        this.color = color;
        this.doors = doors;
    }
}

const car = new Car('white', 5);

const carName = car.name;
// console.log(carName); // Prining the name of car

const details = car.getDetails(car.name, car.color, car.doors);
// console.log(details)  // Prining the details of car

