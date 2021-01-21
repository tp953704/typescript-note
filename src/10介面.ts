namespace Interface介面{
    // 跟型別相比介面具有更好的延展性，是規格書
    interface PersonalInfo{
        name:string;
        age:number;
    }

    interface Cat{
        name:string;
        age:number;
        owner?:PersonalInfo;
        readonly sex :'Male'|'Female';
    }

    interface StringDic{
        [key:string]:string;
    }

    interface BinaryOper{
        (operand1:any, operand2:any):any;
    }
}