"use strict";
let returnFuction = function (userAge) {
    userAge++;
    return userAge;
};
var enumTest1;
(function (enumTest1) {
    enumTest1[enumTest1["first"] = 0] = "first";
    enumTest1[enumTest1["second"] = 1] = "second";
    enumTest1[enumTest1["third"] = 2] = "third";
})(enumTest1 || (enumTest1 = {}));
;
var enumTest2;
(function (enumTest2) {
    enumTest2[enumTest2["first"] = 10] = "first";
    enumTest2[enumTest2["second"] = 20] = "second";
    enumTest2[enumTest2["third"] = 30] = "third";
})(enumTest2 || (enumTest2 = {}));
;
var enumTest3;
(function (enumTest3) {
    enumTest3["first"] = "10";
    enumTest3["second"] = "20";
    enumTest3["third"] = "30";
})(enumTest3 || (enumTest3 = {}));
;
var enumTest4;
(function (enumTest4) {
    enumTest4[enumTest4["first"] = 10] = "first";
    enumTest4[enumTest4["second"] = 80] = "second";
})(enumTest4 || (enumTest4 = {}));
;
let enumCopy = enumTest3.second;
let number1 = 40;
let number2 = 40;
let number3 = 40;
let testObj = 30;
console.log("point : " + typeof testObj);
console.log(number1.toFixed(2));
console.log(number2.toFixed(2));
console.log(number3.toFixed(2));
console.log(enumTest1);
console.log(enumTest2);
console.log(enumTest3);
console.log(returnFuction(23));
console.log(enumTest4);
