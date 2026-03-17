//1. Count the total number of words in the sentence.
//2. Print the sentence words in reverse order.
//3. Convert the first character of each word to uppercase and print original sentence

let word1: string ="Java";
let word2: string ="programming";
let word3: string ="is";
let word4: string ="fun"
let word5: string ="and";
let word6: string ="challenging";

let sentence:string =`${word1} ${word2} ${word3} ${word4} ${word5} ${word6}`;
console.log("sentence:",sentence);

console.log("1.Count the total number of words in the sentence.");
let count: number = sentence.split(" ").length;
console.log("Total words:", count);

console.log("2.Print the sentence words in reverse order.");
let reverseString = sentence.split(" ");

for(let i = reverseString.length-1; i>=0; i--){
    console.log(reverseString[i]);

}

console.log("3 Convert the first character of each word to uppercase and print original sentence");
let words = sentence.split(" ");

for(let i=0;i<words.length;i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
let result = words.join(" ");
console.log(result);







