function checkPalindrome(number){
    let temp=number;
    let rev=0;
    while(temp!==0){
        rev=rev*10+temp%10;        
        temp=Math.floor(temp/10);
    }
 
    if(rev===number){
        console.log(`The number is a palindrome`);
    }else{
        console.log(`The number is not a palindrome`);
    }
}

checkPalindrome(139);