// 涵式的介面
// 常見有兩種

interface addition{
    (input1:number, input2:number): number;
    (input1:number, input2:string): number;
    (input1:string, input2:number): number;
    (input1:string, input2:string): number;
}

interface additionFn{
    add(input1:number, input2:number): number;
    add(input1:number, input2:string): number;
    add(input1:string, input2:number): number;
    add(input1:string, input2:string): number;
    // 其他規格
    propB:string;
}

const safeAdd:additionFn = {
    add:function(input1:number|string, input2:number|string){
        return 1;
    },

    propB:'123'
}

// 類別實踐介面
namespace IinterfaceAndClass{
    interface ICat{
        name:string;
        age:number;

        sayName(something:string):void;
    }

    class Cat implements ICat {
        constructor(public name:string,public age:number) {
            
        }
        sayName(something:string){

        }
    }

    // 類別只能繼承一個父類別，但是可以實踐很多介面
    // ex:class C implements I1,I2,..,In{}
    // 繼承+實踐介面
    // class Child extends Parents implements I1,I2,..,In{}


    // 介面中的檢查方式
    interface IPersonInfo {
        name:string;
        age:number
    }
    function printInfo(info:IPersonInfo){
        console.log(info.name);
        console.log(info.age);
    }

    const maxwell = {
        name:'E',
        age:18,
    }
    printInfo(maxwell)

    
    const maxwell1 = {
        name:'E',
        age:18,
        // 多了一哥不適IPersonInfo的屬性
        cm:18
    }
    printInfo(maxwell1)

    // 如果直接Key直會報錯，KEY變數部會
    // printInfo({
    //     name:'E',
    //     age:18,
    //     // 多了一哥不適IPersonInfo的屬性
    //     cm:18
    // }) error
}

