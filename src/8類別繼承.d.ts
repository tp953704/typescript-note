declare class Cat {
    name: string;
    breed: string;
    age?: number | undefined;
    constructor(name: string, breed: string, age?: number | undefined);
    get Name(): string;
    set Name(input: string);
    makeNoise(): void;
}
declare class BlackCat extends Cat {
    color: string;
    age: number;
    constructor(color: string, age: number);
    makeNoise(): void;
}
declare const bCat: BlackCat;
