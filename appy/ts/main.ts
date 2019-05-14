
export {}

let message = 'hello bantzs';
console.log(message);

const title = 'code bants';
console.log(title);



function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(5, 10));


function sub(num1: number, num2?: number): number {
    if (num2) {
        return num2 - num1;
    } 
    return num1;
}

console.log(sub(5));


function div(num1: number, num2: number = 10): number {
    if (num2) {
        return num2 / num1;
    } 
    return num1;
}

console.log(div(5));


// interfaces solve fugly function definitions
interface Person {
    firstName: string;
    lastName?: string;
}



function namer(person: Person): string {
    console.log(`${person.firstName} ${person.lastName}`);

    return person.lastName;
}

namer({firstName: 'la la', lastName: 'tellytubby'});
namer({firstName: 'la la'});

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`greetings ${this.employeeName}`);
    }
}

let e = new Employee('peter!');
e.greet();


