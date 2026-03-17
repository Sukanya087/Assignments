//Array- Collection of multiple values

//1. Creating an array
console.log("1 creating an array");
let fruits: string [] = ["banana","Apple","Orange"]
let prices: number [] = [100,200,300]
let fruitsAndPrice:(string | number)[] =["bpple",100,"Apple",200,"Orange",300];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrice);

// 2. Access element from array
console.log("2. access elemets from array");
console.log(fruits[1]);
console.log(fruits.length);

//3. Adding addtional values to the existing array at the end
console.log("3.Adding addtional values to the existing array at the end")
fruits.push("Mango");
console.log(fruits);

//4. remove existing value 