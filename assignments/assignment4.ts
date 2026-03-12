// Assignment 4

const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let totalCredits: number = 0;
let totalDebits: number = 0;
let totalCreditAmount:number= 0;
let totalDebitAmount:number =0;
let suspeciousTransactions: number =0;

for(const amount of transactions){

if(amount>0)

totalCredits++;
totalCreditAmount += amount;

if(amount>1000){

    console.log(`Suspecious credit transaction with Amount: ${amount}`);
    suspeciousTransactions++;

}
else{
    totalDebits++;
    totalDebitAmount -= amount;

}
if(amount < -10000){
 console.log(`Suspecious debit transaction with Amount: ${amount}`);
 suspeciousTransactions++;


}

}
const finalBalance: number= totalCreditAmount - totalDebitAmount;
console.log(" Transaction Summary");
console.log("total number of credit transactions:", totalCredits);
console.log("total number of debit transactions:", totalDebits);
console.log("total amount credited:", totalCreditAmount);
console.log("total amount debited:", totalDebitAmount);
console.log("final reamimng balanmce in account:",finalBalance) ;
console.log("total number of suspicious transactions:",suspeciousTransactions);



















