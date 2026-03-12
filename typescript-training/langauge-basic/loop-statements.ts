// Loop statements- Loop the statements  or execute the same statement multiple times

//1. for loop

let empName: string ="Sukanya";
for(let i: number = 1; i<=10; i++){
    console.log(empName);


}


// 2. while loop
let i: number = 1;
let isPageLoaded: boolean = false;

while(i>0){
     
    if(isPageLoaded || i==10){
    break;
    }

    console.log("refresh the page");
    i++;
    

}

// Special cases ofloop
//1. normal for loop

let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

for(let i: number = 0; i<fruits.length; i++){

    console.log(fruits[i]);
}


//2. for...of loop
 console.log("executing statements using for...of loop");

 for(let fruit of fruits){

    console.log(fruit);
 }

 //3. for...in loop
console.log("executing statements using for...in loop");

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

for(let key in person){

    console.log(key);
}


// 4. do while loop


