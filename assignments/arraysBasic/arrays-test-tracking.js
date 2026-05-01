//Exercise 1


let array=["Valid credentials","Invalid password","Empty username","Empty password","Remember me checkbox"];

console.log("```");
console.log("Test Suite: Login Module");
console.log("Test Cases:");
console.log(array);
console.log("Total test cases: "+array.length);
console.log("First test: "+array[0]);
console.log("Last test: "+array[array.length-1]);
console.log("```");


//Exercise 2

let testResults=[];
console.log("```");
console.log("Running Test Suite...");
testResults[0]="PASSED";
console.log("Test 1 completed: "+testResults[0]);
testResults[1]="PASSED";
console.log("Test 2 completed: "+testResults[1]);
testResults[2]="FAILED";
console.log("Test 3 completed: "+testResults[2]);
testResults[3]="PASSED";
console.log("Test 4 completed: "+testResults[3]);
testResults[4]="SKIPPED";
console.log("Test 5 completed: "+testResults[4]);

console.log("Test Summary:");
console.log("Total tests run: "+testResults.length);
console.log("Results: "+testResults);
console.log("Contains failures: Yes (found at index 2)");
console.log("```");


//Exercise 3

let testEmails=["user1@test.com","user2@test.com","user3@test.com"];
console.log("```");
console.log("Test Email Management");
console.log("Initial emails:");
console.log(testEmails);
console.log(testEmails.length);
console.log();
testEmails[3]="user4@test.com";
console.log("After adding user4@test.com to end:");
console.log(testEmails);
testEmails.unshift("admin@test.com");
console.log("After adding admin@test.com to beginning:");
console.log(testEmails);
console.log("After removing last email:");
testEmails.pop();
console.log(testEmails);
testEmails.shift();
console.log("After removing first email:");
console.log(testEmails);
console.log("Final count: "+testEmails.length);
console.log("```");


//Exercise 4

let marks=[85, 92, 78, 95, 88, 73, 90];
let toFind=100;

console.log(marks);
console.log(`Total scores: ${marks.length}`);
console.log("First Score: "+marks[0]);
console.log("Last Score: "+marks[marks.length]);
console.log("Checking for specific scores...");
let flag=false;
let inc=0;

for(let i=0;i<marks.length;i++){
    if(marks[i]===toFind){
       flag=true;
       inc=i;
    }
}

if(flag){
    console.log(`Score ${toFind} found: Yes (at index ${inc})`);
}else{
    console.log(`Score ${toFind} found: No (index: -1)`);
}

console.log("```");