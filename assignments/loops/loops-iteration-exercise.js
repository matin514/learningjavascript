let testCases=[ "Login with valid credentials","Login with invalid password","Login with empty username", "Logout functionality","Remember me checkbox"];

console.log("```");
console.log("Login Module Test Suite");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

/*
for(let i=0;i<testCases.length;i++){
    
     console.log(`${(i+1)}. ${testCases[i]}`)
}*/

let count=0;

for(let test of testCases){
    console.log(`${++count}. ${test}`);
}
console.log("Total test cases: "+testCases.length);
console.log("```");

//Exercise 2

console.log("```");
console.log("Test Execution Results");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Counting results...");
console.log("Test Statistics:");

let testResults=["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];
let totalTests=testResults.length;

console.log("Total test: "+totalTests);
let passedTests=0;
let failedTests=0;
let skippedTests=0;

for(let test of testResults){
    if(test==="PASSED"){
        passedTests++;
    }else if(test==="FAILED"){
        failedTests++;
    }else if(test==="SKIPPED"){
        skippedTests++;
    }
}



console.log(`Passed: ${passedTests} ✓`);
console.log(`Failed: ${failedTests} ✗`);
console.log(`Skipped: ${skippedTests} ⊘`);

console.log("Pass rate: "+(passedTests/totalTests)*100);
console.log("Fail rate: "+(failedTests/totalTests)*100);
console.log("```");

//Exercise 3

let testScores=[ 85, 92, 78, 95, 88, 73, 90, 87];
console.log("```");
console.log(`Test Score Analysis
━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log("Calculating statistics...");
console.log("Results:");
let total=0;
let average=0;
let highest=0;
let lowest=Number.MAX_VALUE;

for(let score of testScores){
    total=total+score;
    if(score>highest){
        highest=score;
    }
    if(score<lowest){
        lowest=score;
    }
}

average=(total/testScores.length);

console.log(`Total: ${total}`);
console.log(`Average: ${average}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);

console.log("```");


//Exercise 4
console.log("```");
console.log(`Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

All Tests:`);


let testNames=["Login", "Logout", "Search", "Checkout", "Payment", "Profile"];
let testResult=["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"];

let failureCount=0;

for(let i=0;i<testNames.length;i++){
    if(testResult[i]==="PASSED"){
        console.log(`${(i+1)}. ${testNames[i]}: ${testResult[i]}  ✓`);
    }else if(testResult[i]==="FAILED"){
         console.log(`${(i+1)}. ${testNames[i]}: ${testResult[i]}  ✗`);
         failureCount++;
    }
}

console.log("Failed Tests (requires attention):");

for(let i=0;i<testNames.length;i++){
    if(testResult[i]==="FAILED"){
        console.log(`- ${testNames[i]}`);
    }
}

console.log(`Total failures: ${failureCount}`);
console.log("```");

//Exercise 5

function runFlakyTest(){
     return Math.random() > 0.7;
}

    let  testName= "Login Test";
    let attempts= 0;
    let maxAttempts= 5;
    let testPassed=false;
    console.log(`Retry Logic Test Runner
 ━━━━━━━━━━━━━━━━━━━━━━━━━

Running: Login Test
Max attempts: 5`);

    do {
    attempts++;
    console.log("Attempt " + attempts + "...");

    testPassed = runFlakyTest();

    if (testPassed) {
       console.log(`✓ Test PASSED!`);
       console.log(`✓ Test passed on attempt ${attempts}`);
    } else {
        console.log(`✗ Test FAILED`);
        console.log(`Retrying...`)
        if(attempts===5){
            console.log(`✗ Test failed after 5 attempts`)
        }
    }

} while (!testPassed && attempts < maxAttempts);
