import { promises } from "fs";

// promise 
// promise有三種狀態 Pending Resolved Rejected

// start -> Pending -> Call Resolve -> Resolved -> return Promise -> if(return Promise) Pending
                                 // -> Rejected                   -> else Complete

let p = new Promise<string>(function(resolve,reject){
    // resolve(['Hello Promise'])  必須要是string error
    resolve('Hello Promise') 
})

// 沒指定型別是unknown
let p1 = new Promise(function(resolve,reject){
    resolve(['Hello Promise']) 
})

p.then(function(value){
    
})

p1.then(function(value){

})


// Promise 常見API
// Promise.resolve 可以回傳一個立即進入Resolved狀態Promise物件
// Promise.reject 可以回傳一個立即進入Reject狀態Promise物件
// Promise.all 傳入一系列物件，等全部物件都進入Resolve，最外層Promise.all回傳Promise才會進入Resolve，否則Reject
// Promise.race 則是傳入一系列Promise物件，最先進入Resolved或Rejected狀態的Promise物件會以Promise狀態最為整個Promise.race

// await async
async function asuncMessage(){
    return 'Async:Hello World';
}

async function example(){
    try{
        // await possiblyReject('Promise 1');
    }catch(error){
        console.log(`${error}`)
        return ;
    }
    try{
        // await possiblyReject('Promise 1');
    }catch(error){
        console.log(`${error}`)
        return ;
    }

} 