"use strict";
// 涵式的介面
// 常見有兩種
const safeAdd = {
    add: function (input1, input2) {
        return 1;
    },
    propB: '123'
};
// 類別實踐介面
var IinterfaceAndClass;
(function (IinterfaceAndClass) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayName(something) {
        }
    }
    function printInfo(info) {
        console.log(info.name);
        console.log(info.age);
    }
    const maxwell = {
        name: 'E',
        age: 18,
    };
    printInfo(maxwell);
    const maxwell1 = {
        name: 'E',
        age: 18,
        // 多了一哥不適IPersonInfo的屬性
        cm: 18
    };
    printInfo(maxwell1);
    // 如果直接Key直會報錯，KEY變數部會
    // printInfo({
    //     name:'E',
    //     age:18,
    //     // 多了一哥不適IPersonInfo的屬性
    //     cm:18
    // }) error
})(IinterfaceAndClass || (IinterfaceAndClass = {}));
//# sourceMappingURL=12%E4%BB%8B%E9%9D%A2%E5%AF%A6%E8%B8%90.js.map