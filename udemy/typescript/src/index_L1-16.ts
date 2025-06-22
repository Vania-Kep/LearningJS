let msg : string = "Hello, TypeScript!";
msg += " Let's learn together.";
console.log(msg);


//----------------------
// Lesson 2: Primitive Types
let isPresent: boolean = false;
let magic: number = 66.6;

let notDefined: undefined = undefined;
let notAssigned: null = null;

let bigNumber: bigint = 123n; // BigInt literal
let symbolValue: symbol = Symbol("star");


//----------------------
// Lesson 3: Instance types
let regexp: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

class Queue<T> {
    private data: Array<T> = [];
    push(item: T) { this.data.push(item);  }
    pop(): T | undefined { return this.data.shift(); }
}

let queue: Queue<number> = new Queue();


//----------------------
// Lesson 4: Arrays and Tuples
let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];


// Tuples
let tuple: [number, string] = [1, "one"];
let tuple2: [number, string, boolean] = [1, "one", true];

console.log(tuple);
console.log(tuple2);

tuple = [2, "two"]; // Valid
//tuple = [2, "two", true]; // Invalid, as it does not match the tuple type definition


//----------------------
// Lesson 5: Object types and Type Aliases
let center: { x: number, y: number } = { x: 0, y: 0 };
let unit: { x: number, y: number } = { x: 1, y: 0 };

// Type Aliases
type Point = { x: number; y: number;};

let center2: Point = { x: 0, y: 0 };
let unit2: Point = { x: 1, y: 0 };


//----------------------
// Lesson 6: const declarations
const point: Point = { x: 0, y: 0 };

// point = { x: 1, y: 1 }; // Error: Cannot assign to 'point' because it is a constant.

point.x = 10; // Valid: properties of a constant object can be modified
point.y = 20; // Valid: properties of a constant object can be modified

console.log(point);



//----------------------
// Lesson 6: Functions
function add(x: number, y: number): number {
    return x + y;
}

function log(message: string): void {
    console.log(message);
}

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}



let add2: (x: number, y: number) => number;

add2 = function (x: number, y: number): number {
    return x + y;
};

console.log(add(2, 3)); // 5


// -----------------------
// Lesson 7: Structural Types
type User = { id: string };
type Product = { id: string };

let user: User = { id: "user123" };
let product: Product = { id: "product456" };

// Structural typing allows us to assign one type to another if they have the same structure
product = user; // Bad but still Valid: Product has the same structure as User


type Point2D = { x: number; y: number; };
type Point3D = { x: number; y: number; z: number; };

let point2D: Point2D = { x: 1, y: 2 };
let point3D: Point3D = { x: 10, y: 20, z: 30 };

/** Extra info is OK */
point2D = point3D;
function takesPoint2D(point: Point2D) { /** ... */}
takesPoint2D(point3D); // Valid: Point3D can be passed to a function expecting Point2D

/** Error: missing info */
//point3D = point2D; // Error: missing 'z' property
function takesPoint3D(point: Point3D) { /** ... */ }
// takesPoint3D(point2D); // Error: Point2D cannot be passed to a function expecting Point3D




// -----------------------
// Lesson 8: Classes
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }


}

let can: Animal = new Animal("Cat");
can.move(10); // Cat moved 10m.

class Bird extends Animal {
    public fly(distanceInMeters: number): void {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}

//------------------------------
// Lesson 11: Gemnerics

// A FIFO (First In, First Out) queue implementation
class Queue2 {
    data = [];
    push(item) { this.data.push(item); };
    pop(): any { return this.data.shift(); };
}

class NumberQueue extends Queue2 {
    push(item: number) { super.push(item); }
    pop(): number { return super.pop(); }
}

class GenericQueue<T> {
    private data: Array<T> = [];
    push(item: T): void { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}


//-------------------------------
// Lesson 12: Special Types: any and unknown
let anyValue: any = "Hello";
anyValue = 42; // Valid: any can be reassigned to any type
anyValue = true; // Valid: any can be reassigned to any type

let unknownValue: unknown = "Hello";
unknownValue = 42; // Valid: unknown can be reassigned to any type
unknownValue = true; // Valid: unknown can be reassigned to any type

let stringValue: string = anyValue; // Valid: any can be assigned to string
// let stringValue2: string = unknownValue; // Error: unknown cannot be directly assigned

if (typeof unknownValue === "string") {
    let stringValue2: string = unknownValue; // Valid: after type checking, unknown can be assigned to string
}


//-------------------------------
// Lesson 13: Type Assertions
function load(): any { return '';};

let hello = load();

const trimmedHello = (hello as string).trim();


//-------------------------------
// Lesson 14: Type Casting
let leet;

leet = "1337";

const number = leet as number; // Type assertion

console.log(number === 1337); // false, because leet is still a string

const number2 = +leet; // Type casting
console.log(number2 === 1337); // true, because leet is now cast to a number
