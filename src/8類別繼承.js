"use strict";
// 類別的繼承
class Cat {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    ;
    get Name() {
        return this.name;
    }
    set Name(input) {
        this.name = input;
    }
    makeNoise() {
        console.log('Honk');
    }
}
class BlackCat extends Cat {
    // 子類別新增屬性 color
    constructor(color, age) {
        super('May', 'BlackCat', age);
        this.color = color;
        this.age = age;
    }
    ;
    // 複寫
    makeNoise() {
        console.log('Honk reg');
    }
}
const bCat = new BlackCat('red', 18);
bCat.name;
//# sourceMappingURL=8%E9%A1%9E%E5%88%A5%E7%B9%BC%E6%89%BF.js.map