// Assignment 5

let empname= ["Alice Johnson"," Bob smith", "Carol davis","David Brown"," Eva Green"];

let salary1 =[75000,68000,82000,90000,60000];

let experience =[5.1,3.2,7.1,10.2,2.4];

let rating =[4.2,3.8,4.5,2.5,3.5];

for(let i = 0;i<empname.length;i++){

    let variablePay =0;
    let bonus =0;
    let reward =0;

    if(rating[i]>=4){

        variablePay =0.15;
        bonus = 1500;
    }
    else if(rating[i]>=3){

         variablePay =0.10;
        bonus = 1200;
    }
    else{

        variablePay =0.03;
        bonus = 300;
    }

    if(experience[i]>=5){
    reward=5000;


    }


    let hike: number= (salary1[i] * variablePay)+bonus+reward;

    let hikePercentage: number = hike/salary1[i];

    console.log(empname[i],"Hike %:" ,hikePercentage);
}










