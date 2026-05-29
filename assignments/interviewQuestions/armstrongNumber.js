function checkArmstrongNumber(number){
    let temp=number;
    let anum=0;
    while(temp!==0){
       anum=anum+Math.pow((temp%10),3);
       temp=Math.floor(temp/10);
    }
    


    if(anum===number){
        console.log(`The number is armstrong number`);
    }else{
        console.log(`The number is not armstrong number`);
    }

}

checkArmstrongNumber(22);