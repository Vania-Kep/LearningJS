class Person {
    private _age: number;
    constructor(_age: number) {
        this._age = _age;
    }
    growOlder = () => {
        this._age++;
    }
    age = () => {
        return this._age;
    }
}

const person = new Person(20);
console.log(person.age()); // 20
person.growOlder();
console.log(person.age()); // 21