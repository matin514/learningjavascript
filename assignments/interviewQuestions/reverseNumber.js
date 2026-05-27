// Program 1

function reverseGivenNumber(number){
     let rev=0;
     while(number!==0){
        rev=rev*10+number%10;
        //number=Math.floor(number/10); both options work
        number=parseInt(number/10);
     }

     console.log(`Reverse Number ${rev}`);

}

reverseGivenNumber(1234);