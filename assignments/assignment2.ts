// 1. Credit Score:
// If the credit score is above 750, the loan is automatically approved.
// If the credit score is between 650 and 750, additional checks are performed.
// If the credit score is below 650, the loan is denied.

let CreditScore: number = 600;
let income: number = 56000;

if (CreditScore > 750) {
    console.log("Loan Approved");
}
else if (CreditScore >= 650 && CreditScore <= 750) {
    console.log("Additional Checks Required");
}
else if (CreditScore < 650) {
    console.log("Loan Denied");
}

//2.Income: For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

let CreditScore1: number = 700;
let income1: number = 56000;

if (CreditScore1>= 650 && CreditScore1 <= 750) {

    if(income1 >= 50000){

        console.log("Income is sufficient for loan approval");
    }else{
        console.log("Income is insufficient for loan approval");
    }


}

//3.Employment Status: If the customer’s income is at least 50,000, the system checks whether the customer is employed. If the customer is unemployed, the loan is denied.
let creditscore2: number = 800;
let income2: number = 66000;
let isEmployed: boolean = false;

if (creditscore2>= 650 && creditscore2 <= 750) {
    if(income2 >= 50000){

        if(isEmployed){
            console.log("Customer is employed, loan approval process continues");
        }else{
            console.log("Customer is unemployed, loan denied");
        }
    }


}
//4 
let isEmployed1: boolean = true;
let dti: number = 80;

if (isEmployed1) {
    if (dti < 40) {
        console.log("Loan Approved");
    } else {       
        console.log("Loan denied");
    }
} else {
    console.log("Loan denied,Customer is unemployed");
}





