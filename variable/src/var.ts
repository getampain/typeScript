const birthMonth:number = 9;

//const 오브젝트 형태는 타입 어노테이션을 걸어두면 오류발생
//test2 자체를 바꿀수는 없지만 해당 내용물을 수정하는것은 가능
const test2 ={
    name : "swyoo",
    id : "getampain",
    age : 26
}

if(1){
    const birthMonth:number = 12;
}

enum testEnum {
    first, second, third
}
let testEEE:testEnum = testEnum.second;


test2.name = "swyoo_adjust";
test2.id = "getampain_adjust";
test2.age ++;

console.log(birthMonth);
console.log(JSON.stringify(test2));
console.log(typeof test2);
console.log(testEEE);