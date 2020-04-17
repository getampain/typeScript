
//함수 변수,리턴값지정
function add(a: any, b:any):number {

    return 10;
}

{
    //화살표 함수를 통한 리턴값 지정, 파라메터 지정
    //한번이라도 전역에서 사용된적 있다면 재선언 불가능하게 때려막아버림
    // 사용하고싶다면 이것처럼 블록을줘야함 
    let returnFuction:(userAge : number) => number = function(userAge){
        userAge ++;
        return userAge;
    }
}

let arrayString:string[] = [];
arrayString.push("11212");
arrayString.push("가나다");

let arrayAny:any[] = [];
arrayAny.push(11212);
arrayAny.push("11212");

//애니보다는 유니온 타입이 권장된다.
let arrayUnion:(string | number)[] = [];
arrayUnion.push(11212);
arrayUnion.push("11212");

console.log("normal" + arrayString);
console.log("any" + arrayAny);
console.log("union" + arrayUnion);


var kusoStory ="dlwp tmftmf dpselddml 70vj tpsxmsms dhkTek"

let genArray:Array<string> = ["11","@222","!@#!@#@!#"];
let genUnion:Array<string | number> = ["2123",123,"123"];
let genRef: typeof genUnion = ["2123",123,"123"];
let genGen:Array<string> = new Array<string>();
genGen.push("sdsdsad");

let genObject: Array<() => string> = [() => "one", ()=> "two"];

console.log("hello ?? : "+genObject[0]);


//인터섹션 변수를 합치는것
interface inter1 { value:string }
interface inter2 { value2:number }
let interSection:inter1&inter2 = { value:"asdsad", value2:11}

//버전이 올라가면서 tuple의 갯수가 명확히 지정됨
let tuple2:[string, boolean] = ["asdas", false];
let tuple:[string, inter1&inter2, (boolean | number)] = ["asdas", { value:"asdsad", value2:11}, true];


//return x 함수형태
//void는 null, undefine 항목만 할당가능
function returnVoid():void{

}

//변수 선언 시 빈값은 null or undefine시 문제발생할 수 있음




//null은 값은 없지만 변수형태는 할당됨
//typeof 시 object형태

//undefined는 값도 없고 할당도 안됨
//typeof 시 undefined형태

//그래서 null과 undefined는 == 연산은 동일 하지만
// === 연산은 동일하지 않음


//whrmaaks ej qjxlaus wnakf start


JSON.stringify(arrayAny);
