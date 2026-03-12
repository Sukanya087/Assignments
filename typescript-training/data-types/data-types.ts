// Syntax to store data in Typescript

// Primitive Data Tyeps(immutable)
// Non Primitive Data Types(mutable)


// 1. Number- The data type used to store with/without decimal values

let num1: number = 20;
let num2: number = 30.789;
console.log(num1);
console.log(num2);

// 2. String- The data type used to store text values

let empName: string = "Sukanya";
let location: string = "Bangalore";
let company: string = "Accenture";

console.log(empName);
console.log(location);
console.log(company);


// 3. Boolean- The data type used to store true/false values

let x: number = 10;
let y: number = 20;
let z:boolean = x > y;
console.log(z);

// 4. Null- The data type used to store null values
let n: null = null;
console.log(n);

// 5. Undefined- The data type used to store undefined values
let u: undefined = undefined;
console.log(u);

// 6. union- The data type used to store multiple types of values

let empAddress: string | number | boolean = " 432, Main Raoid"
console.log(empAddress);

empAddress = 560068;
console.log(empAddress);

empAddress = true;
console.log(empAddress);

// 7.any- The data type used to store any type of values

let data: any = "Hello World";
console.log(data);


// Non Primitive Data Types

//1. Object- The data type used to store key-value pairs

interface PersonInfo {
    name: string;
    empid: number;
    visaStatus: boolean;
    address:{
        city: string;
        state: string;
        zipcode: number;

    }
}
let person: PersonInfo = {
    name: "Sukanya",
    empid: 12345,
    visaStatus: true,
    address: {
        city: "Bangalore",
        state: "Karnataka",
        zipcode: 560068
    }
}
console.log(person);

// 2. Array- The data type used to store multiple values in a single variable
 let fruits: string[] = ["Apple", "Banana", "Orange"];
 let prices: number[] = [10, 20, 30];
 let fruitsAndPrices: (string | number)[] = ["Apple", 10, "Banana", 20, "Orange", 30];
 console.log(fruits);
 console.log(prices);
 console.log(fruitsAndPrices);

 console.log(fruits[2]);
 console.log(prices[1]);

 // Tuple- The data type used to store multiple values of different types in a single variable

 // Array vs Tuples
 let empInfo: (string | number | boolean) [] = [7477575755, "sukanya", true];    

 let newempInfo: [string ,number , boolean] = ["sukanya", 7477575755, true];    

 //





    





