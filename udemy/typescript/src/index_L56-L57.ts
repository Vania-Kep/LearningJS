/**
 * Exclude null and undefined from T
 */
export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>; // string
type Expanded0 = NoEmpty<string> | NoEmpty<null>; // string | never
type Expanded1 = 
(string extends null | undefined ? never : string)
| (null extends null | undefined ? never : null); // string | never


// Lesson 57

export function createPerson(firstName: string, lastName: string){
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    };
}

// type ReturnType<T> =
//     T extends (...args: any[]) => infer R
//     ? R
//     : never;

// type Person = ReturnType<typeof createPerson>; // { firstName: string; lastName: string; fullName: string; }

function logPerson(person: ReturnType<typeof createPerson>) {
    console.log(
        'Person:',
        person.firstName,
        person.lastName,
        person.fullName
    )
}