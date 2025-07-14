type Person = {
    name: string;
    age: number;
    say(): string;
};

let mike: Person = {
    name: "Mike",
    age: 30,
    say() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
};

function sayIt(person: Person): string {
    return person.say();
}

console.log(sayIt(mike)); // Output: My name is Mike and I am 30 years old.