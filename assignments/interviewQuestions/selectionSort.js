function selectionSort(array){
    for(let i=0;i<array.length;i++){
       let minIndex=i;
       for(let j=i;j<array.length;j++){
        if(array[j]<array[minIndex]){
            minIndex=j;
        }

       }

       let temp=array[i];
       array[i]=array[minIndex];
       array[minIndex]=temp;




    }

    console.log(array);
}


selectionSort([16,37,4,45,9,78,92])