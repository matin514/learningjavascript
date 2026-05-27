//Program 4

function printNumbersWithCondition(number){
    for(let i=1;i<=number;i++){
        if(i%3===0){
            console.log(`abc`);

        }else if(i%10===0){
            console.log(`abcdef`);

        }else if(i%5===0){
            console.log(`def`);
        }else{
            console.log(i)
        }
    }
}

printNumbersWithCondition(50);