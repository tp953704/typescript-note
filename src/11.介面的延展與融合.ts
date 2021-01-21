// 介面延展

interface PersonalInfo1{
    name:string;
    age:number;
}



interface SocialLinks{
    facebook?: string;
    twitter?:string;
    linkedin?:string;
    websites:({name:string; url:string})[]
}
interface UserAcc extends PersonalInfo1,SocialLinks{
    // 自己的屬性
    name:string;
    age:number;
}

// 介面融合
interface PersonalInfo2{
    name:string;
    age:number;
}
interface PersonalInfo2{
    height:number
}

// 介面超載
interface addition{
    (input1:number, input2:number): number;
    (input1:number, input2:string): number;
    (input1:string, input2:number): number;
    (input1:string, input2:string): number;
}

const additionSafe:addition = function(input1:number|string,input2:number|string){
    return 1
}

// 常用情景
interface CreateElement{
    (tagName:'p'):HTMLParagraphElement;
    (tagName:'a'):HTMLAnchorElement;
    (tagName:'button'):HTMLButtonElement;
    (tagName:'input'):HTMLInputElement;
}