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

