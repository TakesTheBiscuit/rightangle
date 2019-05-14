"use strict";
exports.__esModule = true;
var message = 'hello bantzs';
console.log(message);
var title = 'code bants';
console.log(title);
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
function sub(num1, num2) {
    if (num2) {
        return num2 - num1;
    }
    return num1;
}
console.log(sub(5));
function div(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num2 / num1;
    }
    return num1;
}
console.log(div(5));
function namer(person) {
    console.log(person.firstName + " " + person.lastName);
    return person.lastName;
}
namer({ firstName: 'la la' });
