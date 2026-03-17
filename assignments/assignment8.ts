//Write a program to search for all occurrences of a “Java” word in the paragraph and print their indexes.
//1. Find total number of occurrences
//2. Print count and Indexes of the word


console.log("1.Find total number of occurrences");

let paragraph = "Java is a popular programming language. Java is used for webdevelopment, mobile applications, and more.";

let word: string = "Java";
let count1: number =0;

let index =paragraph.indexOf(word);
while(index != -1){

console.log("index:",index);

    count1 = count1 + 1;
    index = paragraph.indexOf(word, index + 1);

}
console.log("total count1:",count1);




