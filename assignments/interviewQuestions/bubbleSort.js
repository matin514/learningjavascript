function bubbleSort(array){
      
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[i]<array[j]){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }

    console.log(array);

}

bubbleSort([50,20,6,103,60,2,9]);