export type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined' :
    T extends symbol ? 'symbol' :
    T extends bigint ? 'bigint' :
    T extends Function ? 'function' :
    T extends Date ? 'date' :
    T extends RegExp ? 'regexp' :
    T extends Array<any> ? 'array' :
    T extends null ? 'null' :
    'object';

function typeName<T> (t: T): TypeName<T> {
    if ( t === null) return 'null' as TypeName<T>;
    if (Array.isArray(t)) return 'array' as TypeName<T>;
    if (t instanceof Date) return 'date' as TypeName<T>;
    if (t instanceof RegExp) return 'regexp' as TypeName<T>;
    if (t instanceof Function) return 'function' as TypeName<T>;

    return typeof t as TypeName<T>;
}

console.log(typeName('hello')); // 'string'
console.log(typeName(42)); // 'number'
console.log(typeName(true)); // 'boolean'
console.log(typeName(undefined)); // 'undefined'
console.log(typeName(Symbol('sym'))); // 'symbol'
console.log(typeName(123n)); // 'bigint'
console.log(typeName(() => {})); // 'function'
console.log(typeName(new Date())); // 'date'
console.log(typeName(/abc/)); // 'regexp'
console.log(typeName([1, 2, 3])); // 'array'
console.log(typeName(null)); // 'null'
console.log(typeName({})); // 'object'
console.log(typeName(new Map())); // 'object'
console.log(typeName(new Set())); // 'object'
console.log(typeName(new WeakMap())); // 'object'
console.log(typeName(new WeakSet())); // 'object'
console.log(typeName(new ArrayBuffer(8))); // 'object'
console.log(typeName(new Int8Array(8))); // 'object'