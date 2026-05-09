//Exercise 1

let testcase={
    id: "TC-001",
   name: "Login with valid credentials",
   priority: "High",
   status: "Passed",
   duration: 2.5,
   browser: "Chrome"
}

console.log(`Test Case Details
━━━━━━━━━━━━━━━━━━━━━━━━━`);


console.log(`ID: ${testcase.id}`);
console.log(`Name: ${testcase.name}`);
console.log(`Priority: ${testcase.priority}`);
console.log(`Status: ${testcase.status}`);
console.log(`Duration: ${testcase.duration}`);
console.log(`Browser: ${testcase.browser}`);

console.log(`Adding tester...
Changing status...`);

testcase.tester="John Doe";
testcase.status="Failed";

console.log(`Updated Test Case:`);
console.log(testcase);

//Exercise 2

let testUsers=[
    {
        username:"Batman",
        password:"Batman@123",
        email:"Bruce@batman.com",
        role:"admin"
    },
    {
        username:"Ironman",
        password:"Ironman@123",
        email:"Tony@ironman.com",
        role:"admin"
    },
    {
        username:"Captain America",
        password:"Cap@123",
        email:"Steve@cap.com",
        role:"user"
    }
]

let adminCount=0;
let userCount=0;
console.log(`Test Users Database
━━━━━━━━━━━━━━━━━━━━━━━━━`);

for(let i=0;i<testUsers.length;i++){
  console.log(`User ${i+1}:`);
  console.log(`  Username: ${testUsers[i].username}`);
  console.log(`  Password: **********`);
  console.log(`  Email:    ${testUsers[i].email}`);
  console.log(`  role:     ${testUsers[i].role}`);

  if(testUsers[i].role==="admin"){
    adminCount++;
  }else{
    userCount++;
  }

}

console.log(`Summary:
  Total users: ${testUsers.length}
  Admins: ${adminCount}
  Regular users: ${userCount}`)


//Exercise 3

let testResults=[
  {
    name:"Login Test",
    result:"Passed",
    duration:2.5
  },
  {
    name:"Logout Test",
    result:"Failed",
    duration:1.8
  },
  {
    name:"Search Test",
    result:"Passed",
    duration:3.2
  },
  {
    name:"Checkout Test",
    result:"Skipped",
    duration:0.0
  },
  {
    name:"Payment Test",
    result:"Failed",
    duration:2.0
  }
]

console.log(`Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

Test Results:`);
let passedCount=0;
let failedCount=0;
let skipCount=0;
let totalCount=testResults.length;
let totalDuration=0;


for(let i=0;i<testResults.length;i++){
 if(testResults[i].result==="Passed"){
   console.log(`✓ ${i+1}. ${testResults.name}`);
   passedCount++;
 }else if(testResults[i].result==="Failed"){
   console.log(`✗ ${i+1}. ${testResults.name}`); 
   failedCount++;
 }else if(testResults[i].result==="Skipped"){
  console.log(`⊘ ${i+1}. ${testResults.name}`);
  skipCount++; 
 }

 console.log(`Result: ${testResults[i].result}`);
 console.log(`Duration: ${testResults[i].duration}s`);
 totalDuration+=testResults[i].duration;

}

let passPercentage=(passedCount/totalCount)*100;
let failPercentage=(failedCount/totalCount)*100;
let skipPercentage=(skipCount/totalCount)*100;
let averageDuration=(totalDuration/totalCount);

console.log(`Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`Total tests: ${totalCount}`);
console.log(`Passed: ${passedCount} (${passPercentage.toFixed(1)}%)`);
console.log(`Failed: ${failedCount} (${failPercentage.toFixed(1)}%)`);
console.log(`Skipped: ${skipCount} (${skipPercentage.toFixed(1)}%)`);
console.log(`Total duration: ${totalDuration}s
Average duration: ${averageDuration}s`);





//Exercise 4

console.log(`Test Runner with Methods
━━━━━━━━━━━━━━━━━━━━━━━━━`);
let testRunner={
  name:"Login Suite",
  totalTests: 5,
  passedTests: 0,
  failedTests: 0,
  start(){
    console.log(`Running test suite: ${this.name}`);
  },
  pass(){
    this.passedTests++;
    console.log(`✓ Test passed! Total passed: ${this.passedTests}`);
  },
  fail(){
        this.failedTests++;
        console.log(`✗ Test failed! Total failed: ${this.failedTests}`);
    
  },
  getReport(){
        const passRate = ((this.passedTests / this.totalTests) * 100).toFixed(1);
        const failRate = ((this.failedTests / this.totalTests) * 100).toFixed(1);
        const notRun = this.totalTests - (this.passedTests + this.failedTests);

    console.log(`Test Suite Report:
  Name: ${this.name}
  Total tests: ${this.totalTests}
  Passed: ${this.passedTests} (${this.passRate}%)
  Failed: ${this.failedTests} (${this.failRate}%)
  Not yet run: ${this.notRun}

━━━━━━━━━━━━━━━━━━━━━━━━━`);

  }
}

testRunner.start();
testRunner.pass();
testRunner.pass();
testRunner.pass();
testRunner.fail();
testRunner.getReport();


console.log("\nTest Case with Methods:\n");

let testCase={
    name:"Login Test",
    status:"NOT STARTED",
    duration:0,
    startTime:0,
    start(){
      this.status="RUNNING";
      this.startTime=Date.now();

      console.log(`✓ Started: ${this.name}
  Status: ${this.status}`);
    },
    pass(){
      this.status="PASSED",
      this.duration=((Date.now() - this.startTime) / 1000).toFixed(2);
      console.log(`✓ ${this.name} ${this.status}
  Duration: ${this.duration}s`);
    },
    fail(reason){
      this.status="FAILED",
      this.duration=((Date.now() - this.startTime) / 1000).toFixed(2);
      console.log(`Test case failed due to ${reason}`);
    }
}


testCase.start();
setTimeout(()=>{
testCase.pass();
},50);
testCase.start();
setTimeout(()=>{
testCase.fail("Timeout");
},50);

//Exercise 5

let testData={
  username: "testuser@example.com",
  password: "Test@123",
  sessionToken: "abc123xyz",
  firstName: "John",
  lastName: "Doe"
}

console.log(`Cleanup Sensitive Data
━━━━━━━━━━━━━━━━━━━━━━━━━

Before cleanup:`);

console.log(testData);
delete testData.password;
delete testData.sessionToken;

console.log(`After cleanup:`);
console.log(testData);

console.log(`Does 'password' exist? ${"password" in testData}
Does 'username' exist? ${"username" in testData}

✓ Sensitive data removed successfully!`);

//Exercise 6

let testTracker={
  suiteName: "Login Module",
  environment: "Staging",
  browser: "Chrome",
  tests:[
  {
   name:"Valid credentials",
   result: "FAILED",
   duration: 1.8
  },
  {
   name:"Invalid password",
   result: "PASSED",
   duration: 2.5

  },
  {
   name:"Empty username",
   result: "FAILED",
   duration: 1.2
  },
  {
   name:"Remember me checkbox",
   result: "PASSED",
   duration: 2.1
  }]
}

console.log(`╔══════════════════════════════════════════╗
║       TEST SUITE EXECUTION REPORT        ║
╚══════════════════════════════════════════╝`);

console.log(`Suite Information:
  Name: ${testTracker.suiteName}
  Environment: ${testTracker.environment}
  Browser: ${testTracker.browser}`);

  console.log(`Test Results:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
 
 totalDuration=0;
totalCount=testTracker.tests.length;

for(let i=0;i<testTracker.tests.length;i++){
 if(testTracker.tests[i].result==="Passed"){
   console.log(`✓ Test ${i+1}. ${testTracker.tests[i].name}`);
   passedCount++;
 }else if(testTracker.tests[i].result==="Failed"){
   console.log(`✗ Test ${i+1}. ${testTracker.tests[i].name}`); 
   
  failedCount++;
 }

console.log(`Result: ${testTracker.tests[i].name}
  Duration: ${testTracker.tests[i].duration}s`);
 totalDuration+=testTracker.tests[i].duration;

}

console.log(`Summary Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);


passPercentage=(passedCount/totalCount)*100;
failPercentage=(failedCount/totalCount)*100;
averageDuration=(totalDuration/totalCount);

console.log(`Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`Total tests: ${totalCount}`);
console.log(`Passed: ${passedCount} (${passPercentage.toFixed(1)}%)`);
console.log(`Failed: ${failedCount} (${failPercentage.toFixed(1)}%)`);
console.log(`Total duration: ${totalDuration}s
Average duration: ${averageDuration}s`);

console.log(`Status: ⚠️  Review failed tests before deployment
╚══════════════════════════════════════════╝`);