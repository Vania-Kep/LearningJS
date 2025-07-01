
// Lesson 62: Required Type
export type Required<T> = {
    [p in keyof T]-?: T[p];
};

type PartialPoint = {
    x?: number;
    y?: number;
    z?: number;
};

type RequiredPoint = Required<PartialPoint>;


type CircleConfig = {
    color?: string;
    radius?: number;
};

class Circle {
    private config: Required<CircleConfig>;

    constructor(config: CircleConfig) {
        this.config = {
            color: config.color ?? 'red',
            radius: config.radius ?? 0
        };
    }
}


// Lesson 63: Readonly Type
export type Readonly<T> = {
    readonly [p in keyof T]: T[p];
};

type Point = {
    x: number;
    y: number;
    z: number;
};

type ReadonlyPoint = Readonly<Point>;

const center: ReadonlyPoint = {
    x: 0,
    y: 0,
    z: 0
};


function makeReadonly<T> (object: T): Readonly<T> {
    return Object.freeze({ ...object });
};

const editablePoint: Point = {
    x: 10,
    y: 20,
    z: 30
};

editablePoint.x = 100; // This is allowed

const readonlyPoint = makeReadonly(editablePoint);

// readonlyPoint.x = 200; // Error: Cannot assign to 'x' because it is a read-only property