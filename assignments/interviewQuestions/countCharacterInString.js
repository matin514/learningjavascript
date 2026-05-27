// Program 2

function countCharacterInString(str,char){
     let count=0;
     for(let i=0;i<str.length;i++){
         if(str.charAt(i)===char){
            count++;
         }
     }

     console.log(`The count of ${char} is ${count}`);
}

countCharacterInString("SELENIUM","E");