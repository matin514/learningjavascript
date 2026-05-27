//Program 3

function leadingZerosInArray(array){
   

    for(let i=0;i<array.length;i++){

        if(array[i]===0){
            let j=i;
            while(j>0){
                array[j]=array[j-1];
                j--;
            }
            array[0]=0;
        }
    }

    console.log(array);


}

leadingZerosInArray([4,5,6,-8,0,-6,7,-3,0,9,-5]);