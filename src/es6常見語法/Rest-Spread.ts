// ...解構
namespace 解構{
    const originalArray=[1,2,3,4];
    // 常見用法
    const copiedArray:number[] = [...originalArray];
    const [first,...rest] = originalArray;

    // 解構type
    type PersonInfo = {
        name:string;
        age:number;
        birth:string;
    }
    const wang:PersonInfo = {
        name:'wang',
        age:18,
        birth:'1209'
    }
    const {name,...otherProps}:PersonInfo = wang;
    
    // 函式解構 ，input必須要是陣列
    function maxNum(...input:number[]){}
    function maxStr(...input:string[]){}
}