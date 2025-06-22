"use strict";
let msg = "Hello, TypeScript!";
msg += " Let's learn together.";
console.log(msg);
//----------------------
// Lesson 2: Primitive Types
let isPresent = false;
let magic = 66.6;
let notDefined = undefined;
let notAssigned = null;
let bigNumber = 123n; // BigInt literal
let symbolValue = Symbol("star");
//----------------------
// Lesson 3: Instance types
let regexp = new RegExp("ab+c");
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
let queue = new Queue();
//----------------------
// Lesson 4: Arrays and Tuples
let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
// Tuples
let tuple = [1, "one"];
let tuple2 = [1, "one", true];
console.log(tuple);
console.log(tuple2);
tuple = [2, "two"]; // Valid
//tuple = [2, "two", true]; // Invalid, as it does not match the tuple type definition
//----------------------
// Lesson 5: Object types and Type Aliases
let center = { x: 0, y: 0 };
let unit = { x: 1, y: 0 };
let center2 = { x: 0, y: 0 };
let unit2 = { x: 1, y: 0 };
//----------------------
// Lesson 6: const declarations
const point = { x: 0, y: 0 };
// point = { x: 1, y: 1 }; // Error: Cannot assign to 'point' because it is a constant.
point.x = 10; // Valid: properties of a constant object can be modified
point.y = 20; // Valid: properties of a constant object can be modified
console.log(point);
//----------------------
// Lesson 6: Functions
function add(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
let add2;
add2 = function (x, y) {
    return x + y;
};
console.log(add(2, 3)); // 5
let user = { id: "user123" };
let product = { id: "product456" };
// Structural typing allows us to assign one type to another if they have the same structure
product = user; // Bad but still Valid: Product has the same structure as User
let point2D = { x: 1, y: 2 };
let point3D = { x: 10, y: 20, z: 30 };
/** Extra info is OK */
point2D = point3D;
function takesPoint2D(point) { }
takesPoint2D(point3D); // Valid: Point3D can be passed to a function expecting Point2D
/** Error: missing info */
//point3D = point2D; // Error: missing 'z' property
function takesPoint3D(point) { }
// takesPoint3D(point2D); // Error: Point2D cannot be passed to a function expecting Point3D
// -----------------------
// Lesson 8: Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let can = new Animal("Cat");
can.move(10); // Cat moved 10m.
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
//------------------------------
// Lesson 11: Gemnerics
// A FIFO (First In, First Out) queue implementation
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    ;
    pop() { return this.data.shift(); }
    ;
}
class NumberQueue extends Queue {
    push(item) { super.push(item); }
    pop() { return super.pop(); }
}
class GenericQueue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
//-------------------------------
// Lesson 12: Special Types: any and unknown
let anyValue = "Hello";
anyValue = 42; // Valid: any can be reassigned to any type
anyValue = true; // Valid: any can be reassigned to any type
let unknownValue = "Hello";
unknownValue = 42; // Valid: unknown can be reassigned to any type
unknownValue = true; // Valid: unknown can be reassigned to any type
let stringValue = anyValue; // Valid: any can be assigned to string
// let stringValue2: string = unknownValue; // Error: unknown cannot be directly assigned
if (typeof unknownValue === "string") {
    let stringValue2 = unknownValue; // Valid: after type checking, unknown can be assigned to string
}
