
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let studentMarks: number[] = [75, 80, 82];

let total: number = 0;

console.log("Updated Marks:");

for (let i = 0; i < studentMarks.length; i++) {

    studentMarks[i] += 10;   // add 10 marks

    total += studentMarks[i];  // add to total

    console.log(studentNames[i] + ": " + studentMarks[i]);

}

let average: number = total / studentMarks.length;

console.log("Average Marks:", average.toFixed(1));

