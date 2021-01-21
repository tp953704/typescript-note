"use strict";
class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.noise = "2EFEWF";
    }
    talk(saySomething) {
        console.log(`${this.name} is say ${saySomething}`);
    }
}
class Cat2 {
    constructor(name, breed) {
        this.noise1 = 'hello';
        this.name = name;
        this.breed = breed;
        this.noise = "2EFEWF";
    }
    talk(saySomething) {
        console.log(`${this.name} is say ${saySomething}`);
    }
}
const cat2 = new Cat2('f3r', '23');
class Cat3 {
    constructor(name, breed = "Hello") {
        this.name = name;
        this.breed = breed;
        this.noise1 = 'hello';
        this.name = name;
        this.breed = breed;
        this.noise = "2EFEWF";
    }
    talk(saySomething) {
        console.log(`${this.name} is say ${saySomething}`);
    }
}
const Users = [
    {
        username: 'lergreg',
        password: 'tpregergergr',
        savings: 111,
    },
    {
        username: '22e33',
        password: 'tergrreg0erg',
        savings: 113,
    },
];
class CashMachine {
    getAccountInfo() {
        return '123';
    }
    get accountInfo() {
        return '123';
    }
    set username(input) {
    }
}
class MyMath {
    static pow(base, exponent) {
        return base ** exponent;
    }
    static abs(input) {
        return input >= 0 ? input : -input;
    }
}
console.log(MyMath.pow(2, 4));
//# sourceMappingURL=7類別.js.map

declare class Cat {
    name: string;
    breed: string;
    noise: string;
    noise1?: string;
    constructor(name: string, breed: string);
    talk(saySomething: string): void;
}
declare class Cat2 {
    name: string;
    breed: string;
    private noise;
    noise1?: string;
    constructor(name: string, breed: string);
    talk(saySomething: string): void;
}
declare const cat2: Cat2;
declare class Cat3 {
    readonly name: string;
    breed: string;
    private readonly noise;
    noise1?: string;
    constructor(name: string, breed?: string);
    talk(saySomething: string): void;
}
declare type UserAccount = {
    username: string;
    password: string;
    savings: number;
};
declare const Users: UserAccount[];
declare class CashMachine {
    private currentUser?;
    getAccountInfo(): string;
    get accountInfo(): string;
    set username(input: string);
}
declare class MyMath {
    static pow(base: number, exponent: number): number;
    static abs(input: number): number;
}
