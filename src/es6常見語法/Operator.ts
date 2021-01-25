// ChainingOperator
const obj={
    propA:{
        propB:'123'
    },
}

// 想確認obj.propA.propB是否存在
if(obj && obj.propA && obj.propA.propB){
    console.log('obj.propA.propB exists')
}

// 也可以用
if(obj?.propA?.propB){
    console.log('obj.propA.propB exists')
}

// 如果要確認arr存不存在，如果存在時再存取arr[0]
let arr = [1,2,3,4,5];
arr?.[0];

interface ListOfString{
    [key:number]:string;
}

// 如果要確認arr存不存在，如果存在時再存取arr[0]
let strings:ListOfString = ['h','wo','ts'];
strings?.[0];


// CoalescingOperator
// ??是專門只擋null,undefined
let selectrdNumber = obj?.propA?.propB ?? 14;