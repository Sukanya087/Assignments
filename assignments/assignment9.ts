
let rows: number = 5;

for(let i =1;i<=rows;i++){

    let pattern:string = "";

        for(let j=1;j<=rows;j++){

            if(j<= rows-i){
                 pattern= pattern + " ";
            }

else{
             pattern= pattern + "*";

        }
    }
        console.log(pattern);
    
}
