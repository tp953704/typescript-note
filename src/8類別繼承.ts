// 類別的繼承

class Cat {
    constructor(public name: string,public breed: string,public age?: number){};
    get Name(){
        return this.name;
    }
    set Name(input:string){
        this.name=input;
    }
    public makeNoise(){
        console.log('Honk')
    }
}

class BlackCat extends Cat{
    // 子類別新增屬性 color
    constructor(public color:string,public age:number){
        super('May','BlackCat',age);
    };
    
    // 複寫
    public makeNoise(){
        console.log('Honk reg')
    }
}
const bCat = new BlackCat('red',18);
bCat.name;