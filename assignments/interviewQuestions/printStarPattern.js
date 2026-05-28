function printStarPattern(number){


    for(let i=1;i<=number;i++){
        let pattern="";
        for(let j=1;j<number-i;j++){
           pattern=pattern+" ";
        }

        for(let j=1;j<=i;j++){
        pattern=pattern+"* ";
        }
        console.log(pattern);
    }
   
}

printStarPattern(10);