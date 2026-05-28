function printFibonacciWithoutRecursion(number){
    
    let first=0;
    let second=1;
    let next;

    for(let i=0;i<number;i++){
        console.log(first);
        next=first+second;
        first=second;       
        second=next;

    }


}

function fibonacciWithRecursion(n){
    if(n===0){
        return 0;
    }

    if(n===1){
        return 1;
    }

   return fibonacciWithRecursion(n-1)+fibonacciWithRecursion(n-2);
}

for(let i=0;i<10;i++){
     console.log(fibonacciWithRecursion(i));
}

//printFibonacciWithoutRecursion(10);