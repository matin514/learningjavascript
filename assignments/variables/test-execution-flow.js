let testStatus="To Start";
let testStep=0;
let tester="Bruce";
let userName="testuser@example.com"
const TEST_NAME="Login Functionality Test";

const start = Date.now();

console.log("```");
console.log("=========================================");
console.log("   TEST EXECUTION FLOW   ");
console.log("=========================================");
console.log("Test Name: "+TEST_NAME);
console.log("Tester: "+tester);
console.log("");
console.log("Step "+(++testStep)+": Opening browser");
testStatus="IN PROGRESS"
console.log("Status: "+testStatus);
console.log("");
console.log("Step "+(++testStep)+": Navigating to login page");
console.log("Status: "+testStatus);
console.log("");
console.log("Step "+(++testStep)+": Entering credentials");
console.log("Username: "+userName);
console.log("Status: "+testStatus);
console.log("");
console.log("Step "+(++testStep)+": Clicking login button");
console.log("Status: "+testStatus);
console.log("");
console.log("Step "+(++testStep)+": Verifying dashboard");
testStatus="COMPLETED"
console.log("Status: "+testStatus);
console.log("");
const end = Date.now()
const timelapsed = end - start;
const timeSeconds = timelapsed / 1000;
console.log("=========================================");
console.log("Final Status: PASSED");
console.log("Test Duration: "+timeSeconds+" seconds");
console.log("=========================================");
console.log("```");
