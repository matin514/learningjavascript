let max = Number.MAX_SAFE_INTEGER;
console.log("Number Ouput "+(max + 1));  
console.log("Number Ouput "+(max + 2));  
console.log("Number Ouput "+(max + 3));
console.log("Number Ouput "+(max + 4));
console.log("Number Ouput "+(max + 5));
console.log("Number Ouput "+(max + 6));
console.log("Number Ouput "+(max + 7));
console.log("Number Ouput "+(max + 8));
console.log("Number Ouput "+(max + 9));
console.log("Number Ouput "+(max + 10));
console.log("Number Ouput "+(max + 100));
console.log("Number Ouput "+(max + 500));
console.log("Number Ouput "+(max + 1000));
console.log("Number Ouput "+(max + 10000));
console.log("Number Ouput "+(max + 100000));
console.log("Number Ouput "+(max + 1000000));
console.log("Number Ouput "+(max + 10000000));
console.log("Number Ouput "+(max + 100000000));
console.log("Number Ouput "+(max + 1000000000));
console.log("Number Ouput "+(max + 10000000000));
console.log("Number Ouput "+(max + 100000000000));
console.log("Number Ouput "+(max + 10000000000000));
console.log("Number Ouput "+(max + 100000000000000));
console.log("Number Ouput "+(max + 1000000000000000));
console.log("Number Ouput "+(max + 100000000000000000));


let bigMax = 9007199254740991n;
console.log(bigMax + 1n);  
console.log(bigMax + 2n);  
console.log(bigMax + 3n);

console.log("The type of "+bigMax+" is "+typeof bigMax);

try{
let mix=max+bigMax;
console.log("The answer of mix addition "+mix);
}catch(error){
console.log(error.message);
}