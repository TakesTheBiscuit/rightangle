"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
namer({ firstName: 'la la', lastName: 'tellytubby' });
namer({ firstName: 'la la' });
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("greetings " + this.employeeName);
    };
    return Employee;
}());
var e = new Employee('peter!');
e.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("manager delegating tasks");
    };
    return Manager;
}(Employee));
var mgr = new Manager('brucey');
mgr.greet();
mgr.delegateWork();
