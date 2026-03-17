//storing data of a person in object
interface personInfo{
 name: string,
 age?: number,
 empID: number,
 visaStatus: boolean,
 address:{
    city: string,
    state: string,
    country: string,
    },
    role? : string
}

let person:personInfo = {
name: "Sukanya",
age: 25,
 empID: 1234,
 visaStatus: true,
 address:{
    city: "Nashik",
    state: "Maharashtra",
    country: "India"
 }
}

// 2. Access the data from object
console.log(person.name);
console.log(person["name"]);

console.log(person.address.country);
console.log(person.address["country"]);

//3. adding a new property to an object
person.role = "QA";
console.log(person);

// 4. Update the existing property from an object

person.role = " Senior QA";
console.log(person);

// 5. Delete the existing property from an object
delete person.age;
console.log(person);

//6. Check perticuler property is available or not
console.log("empID" in person);
console.log("age"in person);

//7.Get all keys from an object
console.log(Object.keys(person));

//8. Get all values from an object
console.log(Object.values(person.address));

// 9.Get all the entries from an object

console.log(Object.entries(person.address));

//10. Iterate all keys from an array


for(let key in person){

console.log(key);
console.log(person[key as keyof personInfo]);

}

// 11. verify the data type of perticuler property inside the object

console.log(typeof person.visaStatus);
console.log(typeof person.empID);
console.log(typeof person.name);


// 12. Merge two different objects together

interface projectInfo{

    projectName: string,
    projectId : number;
}

let project:projectInfo ={

 projectName: "Amazon",
    projectId : 345,

}

let mergedObject= {...person,...project};
console.log(mergedObject);









