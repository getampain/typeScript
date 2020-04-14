const birthMonth:number = 9;
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