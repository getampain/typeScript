
let tupleTest:[string,number,string];
let arrayTest:number[]


//인터섹션 변수를 합치는것
interface body1 { value:string }
interface body2 { value2:number }
let totalBody:body1&body2 = { value:"asdsad", value2:11}

//유니언 타입 해당 코드는 bool 또느 string 지원 
var unionTest:boolean|string|number

tupleTest = ["asdsa",12,"asd"];
arrayTest = [12,22,1,1,23,2,32,3];

let testUndefine:undefined = undefined;
var person = {
    name : "Jhon dow"
};
//객체 리터럴을 null값으로 초기화 하기 위해선  "strict": true,  해당옵션을 false로 변화시켜야한다.
//person = null;


//자동리턴 undefin 
//리턴하려고 하면 에러뜸
function returnNull():void{
    console.log("returnNull work");

}


let returnValue = returnNull();


console.log(returnValue);
console.log(totalBody);
unionTest = true;
console.log(unionTest);
unionTest = "test";
console.log(unionTest);
unionTest = 12;
console.log(unionTest);

console.log(tupleTest);
console.log(arrayTest);
