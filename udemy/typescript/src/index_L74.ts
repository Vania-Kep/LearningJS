export type Name = { name: string };
export type Age = { age: number };

type Uion = Name | Age;

let union: Uion;

union = { name: "John" }; // Valid
union = { age: 30 }; // Valid
union = { name: "John", age: 30 }; // Valid, but not recommended

function filter(union: Uion) {
  if ("name" in union) {
    union.name;
  }

  if ("age" in union) {
    union.age;
  }

  if ("name" in union && "age" in union) {
    union.name;
    union.age;
  }
}