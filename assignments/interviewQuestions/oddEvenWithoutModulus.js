function oddEvenWithoutModulus(number){
    let num=(number&1)

    if(num===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

oddEvenWithoutModulus(15);