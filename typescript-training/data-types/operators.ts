// Operators - special characters used in programming language to perform operations
 // 1. Arithmetic Operators - The Operators used to perform mathematical operations (+,-,*,/,%,++)

 let a: number = 10;
 let b: number = 5;
    console.log(a + b); // Addition
    console.log(a - b); // Subtraction
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
    console.log(a++); // Post Increment
    console.log(++a);
    console.log(a--); // Post Decrement
    console.log(--a);

    let temp = 25.5


// 2. Assignment Operators - The Operators used to assign values to variables (=,+=,-=,*=,/=,%=)
let c: number = 10;
console.log("Simple Assignment:", c);
c +=10;
console.log("Addition Assignment:", c)  
c -=5;
console.log("Subtraction Assignment:", c)
c *=2;
console.log("Multiplication Assignment:", c)
c /=5;
console.log("Division Assignment:", c)
c %=3;
console.log("Modulus Assignment:", c)

// 3. Comparison Operators - The Operators used to compare values (==,===,!=,!==,>,<,>=,<=)
let x: number = 10;
let y: number = 20;
let z: any= "10";

console.log("Equaliy Operator:", x == z); // true
console.log("Strict Equality Operator:", x === z); // false
console.log("Inequality Operator:", x != y);
console.log("Strict Inequality Operator:", x !== z);
console.log("Greater than Operator:", x > y);
console.log("Less than Operator:", x < y);
console.log("Greater than or Equal to Operator:", x >= y);
console.log("Less than or Equal to Operator:", x <= y);


// 4 Logical Operators - The Operators used to combine multiple conditions (&&,||,!)

let i : number = 10;
let j : number = 20;
let k : number = 30;

console.log("Logical AND Operator:", i < j && j < k); // true
console.log("Logical OR Operator:", i < j || j > k);
console.log("Logical NOT Operator:", !(i < j)); // false

// 5. Ternary Operator - The Operator used to write a condition in a single line (condition ? true : false)
let age: number = 18;
let isAdult: string = age >= 18 ? "Yes" : "No";
console.log("Is Adult:", isAdult);

let num1: number = 50;
let num2: number = 70;
let max: number = num1 > num2 ? num1 : num2;
console.log("Maximum Number:", max);






