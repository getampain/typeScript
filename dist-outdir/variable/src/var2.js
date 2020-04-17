"use strict";
let tupleTest;
let arrayTest;
let totalBody = { value: "asdsad", value2: 11 };
var unionTest;
tupleTest = ["asdsa", 12, "asd"];
arrayTest = [12, 22, 1, 1, 23, 2, 32, 3];
let testUndefine = undefined;
var person = {
    name: "Jhon dow"
};
const basicObject = {
    "name": "상욱",
    "e-mail": "sss@sss.com",
    "age": 30
};
basicObject.age++;
console.log("object " + JSON.stringify(basicObject));
function returnNull() {
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
