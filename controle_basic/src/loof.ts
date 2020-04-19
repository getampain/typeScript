for(let i:number = 0;i<3;i++){
    console.log("loof1")
}


let loofIn:number[] = [1,2,3,4,5,6,7];
for(let loofVar in loofIn){
    console.log(loofIn[loofVar]);
}

let loofObject:{ "ball": string, "count" : number, "str" : string}
= {
    "ball" : "baseball", 
    "count" : 12,
    "str" : "this is just test" 
};
for(let indexes in loofObject){
    //console.log( loofObject[indexes]);
    //인덱스 까지는 뽑아오지만 값을 뽑아오지 못한다,,
    //타입에 관련된 오류라고 추정됨 일단은 진행후 다시 확인해야할것
}
let varTest:string = "ball";


let itMap:Map<string,number> = new Map([["one",1],["one",2]]);
itMap.set("one",3);

for(let entry of itMap){
    console.log(entry);
}

console.log(itMap.get("one"));


let arrLoof = [1,2];
let inObj = arrLoof[Symbol.iterator]();

console.log(inObj.next());
console.log(inObj.next());
console.log(inObj.next());
console.log(inObj.next());

for(let tt of arrLoof){
    console.log(tt);arrLoof
}

////////////////////////////////////////////////////////////////////
var myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
}

for (let value of myIterable) { 
    //console.log(value); 
}

function printProfile({name = "hongGilDong", nation = "korea"} = {name:"noName", nation:"NoContury"}){
    console.log(name,nation);
}
printProfile();
printProfile({name:"jhone"});
printProfile({name:"jhone", nation:"korea"});
printProfile({nation:"korea"});

//뒤의 값이 아무것도 없을 경우 이다
function printProfile2({name = "hongGilDong", nation = "korea"}){
    console.log(name,nation);
}
printProfile2({name:"jhone"});
printProfile2({name:"jhone", nation:"korea"});
printProfile2({nation:"korea"});

type C = {
    b?: number,
    a?: string
}

function testType( {a,b}: C  ):void{
    console.log(a,b);
}

testType({a:"apple"});
testType({});