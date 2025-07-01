"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var union;
union = { name: "John" }; // Valid
union = { age: 30 }; // Valid
union = { name: "John", age: 30 }; // Valid, but not recommended
function filter(union) {
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
