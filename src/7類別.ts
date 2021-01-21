// "use strict";
// class Cat {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//         this.noise = "2EFEWF";
//     }
//     talk(saySomething) {
//         console.log(`${this.name} is say ${saySomething}`);
//     }
// }
// class Cat2 {
//     constructor(name, breed) {
//         this.noise1 = 'hello';
//         this.name = name;
//         this.breed = breed;
//         this.noise = "2EFEWF";
//     }
//     talk(saySomething) {
//         console.log(`${this.name} is say ${saySomething}`);
//     }
// }
// const cat2 = new Cat2('f3r', '23');
// class Cat3 {
//     constructor(name, breed = "Hello") {
//         this.name = name;
//         this.breed = breed;
//         this.noise1 = 'hello';
//         this.name = name;
//         this.breed = breed;
//         this.noise = "2EFEWF";
//     }
//     talk(saySomething) {
//         console.log(`${this.name} is say ${saySomething}`);
//     }
// }
// const Users = [
//     {
//         username: 'lergreg',
//         password: 'tpregergergr',
//         savings: 111,
//     },
//     {
//         username: '22e33',
//         password: 'tergrreg0erg',
//         savings: 113,
//     },
// ];
// class CashMachine {
//     getAccountInfo() {
//         return '123';
//     }
//     get accountInfo() {
//         return '123';
//     }
//     set username(input) {
//     }
// }
// class MyMath {
//     static pow(base, exponent) {
//         return base ** exponent;
//     }
//     static abs(input) {
//         return input >= 0 ? input : -input;
//     }
// }
// console.log(MyMath.pow(2, 4));
// //# sourceMappingURL=7類別.js.map

// declare class Cat {
//     name: string;
//     breed: string;
//     noise: string;
//     noise1?: string;
//     constructor(name: string, breed: string);
//     talk(saySomething: string): void;
// }
// declare class Cat2 {
//     name: string;
//     breed: string;
//     private noise;
//     noise1?: string;
//     constructor(name: string, breed: string);
//     talk(saySomething: string): void;
// }
// declare const cat2: Cat2;
// declare class Cat3 {
//     readonly name: string;
//     breed: string;
//     private readonly noise;
//     noise1?: string;
//     constructor(name: string, breed?: string);
//     talk(saySomething: string): void;
// }
// declare type UserAccount = {
//     username: string;
//     password: string;
//     savings: number;
// };
// declare const Users: UserAccount[];
// declare class CashMachine {
//     private currentUser?;
//     getAccountInfo(): string;
//     get accountInfo(): string;
//     set username(input: string);
// }
// declare class MyMath {
//     static pow(base: number, exponent: number): number;
//     static abs(input: number): number;
// }

namespace 類別{
    // 基本類別
    // class Cat {
    //     name: string;
    //     breed: string;
        
    //     constructor(name: string, breed: string){
    //         this.name = name;
    //         this.breed = breed;
    //     };
    //     talk(saySomething: string): void{
            
    //     };
    // }

    // 建構子外的類別
    // class Cat {
    //     name: string;
    //     breed: string;
    //     age: number=123;//可以這樣
    //     constructor(name: string, breed: string){
    //         this.name = name;
    //         this.breed = breed;
    //     };
    //     talk(saySomething: string): void{
            
    //     };
    // }
    // or
    // class Cat {
    //     name: string;
    //     breed: string;
    //     age?: number;//也可以這樣
    //     constructor(name: string, breed: string){
    //         this.name = name;
    //         this.breed = breed;
    //     };
    //     talk(saySomething: string): void{
            
    //     };
    // }

    // 類別加修飾子 Access public protected private 以下樣本都依樣
    // class Cat {
    //     public name: string;
    //     public breed: string;
    //     public age?: number;//也可以這樣
    //     constructor(name: string, breed: string){
    //         this.name = name;
    //         this.breed = breed;
    //     };
    //     talk(saySomething: string): void{
            
    //     };
    // }
    // or
    // class Cat {
    //     public age?: number;//也可以這樣
    //     constructor(public name: string,public breed: string){};
    //     talk(saySomething: string): void{
            
    //     };
    // }
    // class Cat {
    //     constructor(public name: string,public breed: string,public age?: number){};
    //     talk(saySomething: string): void{
            
    //     };
    // }
    // class Cat {
    //     constructor(public name: string,public breed: string,public age=18){};
    //     talk(saySomething: string): void{
            
    //     };
    // }

    // Accessors存取方法 以下範例依樣

    // class Cat {
    //     constructor(public name: string,public breed: string,public age?: number){};
    //     getName(){
    //         return this.name;
    //     }
    //     setName(input:string){
    //         this.name=input;
    //     }
    // }
    // const mCat = new Cat('kelly','Cat',18);
    // mCat.getName();
    // mCat.setName('Evan')

    // class Cat {
    //     constructor(public name: string,public breed: string,public age?: number){};
    //     get Name(){
    //         return this.name;
    //     }
    //     set Name(input:string){
    //         this.name=input;
    //     }
    // }
    // const mCat = new Cat('kelly','Cat',18);
    // mCat.Name='Evan';
    // mCat.Name;

    // 唯讀
    // class Cat {
    //     constructor(public readonly name: string,public breed: string,public age?: number){};
        
    // }
    // const mCat = new Cat('kelly','Cat',18);
    // // mCat.name=1;error

    // 靜態成員
    /**
     1. 靜態成員本身的屬性和方法
     2. 靜態成員的宣告必須用static
     3.static可以加private public protected
     */

     class MyMath{
         static pow(base:number,exponent:number){
             return base**exponent;
         }
     }

}
