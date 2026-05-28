
function printFirstGivenPrimeNumbers(number){
    let primeCount=0;
    let j=2;
   
    while(primeCount<number){
         let isPrime=true;
       for(let i=2;i<=Math.sqrt(j);i++){
           if(j%i===0){
              isPrime=false;
              break;
           }
       }        

       if(isPrime){
          console.log(j);
          primeCount++;

       }

       j++;


    }




}

printFirstGivenPrimeNumbers(10);