"use strict";
const birthMonth = 9;
const test2 = {
    name: "swyoo",
    id: "getampain",
    age: 26
};
if (1) {
    const birthMonth = 12;
}
var testEnum;
(function (testEnum) {
    testEnum[testEnum["first"] = 0] = "first";
    testEnum[testEnum["second"] = 1] = "second";
    testEnum[testEnum["third"] = 2] = "third";
})(testEnum || (testEnum = {}));
let testEEE = testEnum.second;
test2.name = "swyoo_adjust";
test2.id = "getampain_adjust";
test2.age++;
console.log(birthMonth);
console.log(JSON.stringify(test2));
console.log(typeof test2);
console.log(testEEE);
