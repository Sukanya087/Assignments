// Conditional Statements- The statements that perform different actions  based on different conditions-Statements along with conditions
let x: number = 10;
let y: number = 20;
let z: any  = "10";


if (x>y){

console.log("Equality Operator:", x == z); // true
console.log("Strict Equality Operator:", x === z); // false
console.log("Inequality Operator:", x != y);
console.log("Strict Inequality Operator:", x !== z);
console.log("Greater than Operator:", x > y);
console.log("Less than Operator:", x < y);
console.log("Greater than or Equal to Operator:", x >= y);
console.log("Less than or Equal to Operator:", x <= y);


}


// if-else statement

let percentage: number = 85;

if (percentage >= 90) {
console.log("Grade: A");

if (percentage >= 95) {
console.log("Hey buddy, you are eligible for Gold Medal Scolarship");
}else{

console.log("Hey buddy, you are eligible for silver medal Scolarship");
}



} else if (percentage >= 80) {
console.log("Grade: B");
} else if (percentage >= 70) {
console.log("Grade: C");
} else if (percentage >= 60) {
console.log("Grade: D");
}
else{
console.log("Grade: F");
}


// Switch case statement

let env: string = "production";

switch(env){
case "development":
console.log("Execute the tests in the development environment with dev.amzon.com");
break;

case "staging":
console.log("Execute the tests in the staging environment with staging.amazon.com");
break;

case "production":
console.log("Execute the tests in the production environment with amazon.com");
break;
default:
console.log("Please provide a valid environment");

}