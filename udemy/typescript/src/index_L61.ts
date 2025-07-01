// Lesson 61: Partial Type
export type Partial<T> = {
    [p in keyof T]?: T[p];
};

type Point = {
    x: number;
    y: number;
    z: number;
};