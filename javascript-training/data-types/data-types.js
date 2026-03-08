// data types in javascript

// 1. Primitive data types (Immutable data types)
// 2. Non-primitive data types (Mutable data types)


// immutable
let a = 10;
a+10;
console.log(a);

// mutable
 let obj = {
    name: "Sukanya",
    age:25

 }
 obj.sal = 2500;
 console.log(obj);
 


//  data types in js
// primitive data types
// number,string,boolean ,null,undefined,symbol


//1. Number 
let num1 = 20;
let num2 = 30;
console.log(num1);
console.log(num2);

// 2. String
 let str1 = "Hello";
 let str2 = "welcome";
 console.log(str1);
 console.log(str2);  
 console.log(typeof str2)

 let empName = " Sukanya";
 let empCity = "Bangalore";
 let comapany = "Klipit"

 console.log("Emp Name is  "+empName+" Emp City is "+empCity+" Company is "+comapany);
 console.log(`Emp Name is ${empName}, Emp City is ${empCity}, Company is ${comapany}`);



 // 3. Boolean

let x = 10;
let y =20;
console.log(x>y);
let z =30;
console.log(typeof z);


// 4. undefined 
let age;
console.log(age);


// 5. null
let salary = 100
 salary = null;
console.log(salary);

// 6. Symbol - unique and hidden identifier


// non-primitive data types
// 1. Object - collection of key value pairs within curly braces
let person = {
    name: "Rinku",
    age: 26,
    visastatus: true,
    city: "Nashik"
}
console.log(person);

// 2. Array - Array repersents a list of values

let fruits = ["apple", "banana","gareps","mango"];
let price =[100,200,300,450];
let FruitsAndPrice = [["apple",100],["banana",200],["grapes",300],["mango",450]];
console.log(fruits);
console.log(price);
console.log(FruitsAndPrice);

console.log (fruits[1]);
console.log(price[2]);
console.log(FruitsAndPrice[3][0]);

//3. Function - A function represents a block of code or collection of statments return together to complete a perticuler task

// Set() - Set represents a collection of unique values


let empID = new Set()
empID.add(101);
empID.add(102);
empID.add(101);
console.log(empID);

// Map()- Map represents a collection of key value pair
let empdata = new Map();
empdata.set(123,"Sukanya");

empdata.set(124 ,"Rinku");

empdata.set(123 ,"Raj");

empdata.set(124 ,"Manoj");


console.log(empdata);


// Date()- Date represents a  specific point in time



