function findFactorial(number){
    let fact=1;
    for(let i=1;i<=number;i++){
        fact=fact*i;
    }

    console.log(`The factorial is ${fact}`);
}

//findFactorial(6);


function factorialRecursion(number){
    if(number==0){
        return 1;
    }

    return number*factorialRecursion(number-1);
}

console.log(`The factorial is ${factorialRecursion(6)}`);