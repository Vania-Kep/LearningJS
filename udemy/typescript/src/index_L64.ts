type Persons = Record<string, { name: string, age: number }>;

const persons: Persons = {};

persons['000'] = { name: 'John', age: 30 };
persons['001'] = { name: 'Jane', age: 25 };

// persons['002'] = { name: 'Alice'}; // Error: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.


type PersonVerbose = { [key: string]: { name: string, age: number } };

//--------------------

type Roles = 'owner' | 'admin' | 'user' | 'guest';

let peopleWithRoles: Record<Roles, string[]> = {
    owner: ['Alice'],
    admin: ['Bob', 'Charlie'],
    user: ['Dave'],
    guest: ['Eve']
};

/*
peopleWithRoles = { // Error: Type '{ owner: string[]; admin: string[]; user: string[]; guest: string[]; }' is not assignable to type 'Record<Roles, string[]>'.
    owner: ['Alice']
};
*/

//------------

type Point = Record<'x' | 'y' | 'z', number>;

//-----------
type PageInfo = {
    id: string;
    title: string;
};

type PageVerbose = {
    home: PageInfo;
    about: PageInfo;
    contact: PageInfo;
};

// FINAL
type Pages = Record<
    'home' | 'about' | 'contact',
    { id: string; title: string }
>;
