let totalTests=90;
let passedTests=85;
let failedTests=5;
let passRate=(passedTests/totalTests)*100;
let testSuiteName="Initial Test Run";
let allTestsPassed=(passRate==100)?true:false;

console.log("Total tests: "+totalTests);
console.log("Passed tests: "+passedTests);
console.log("Failed tests: "+failedTests);
console.log("Pass rate: "+passRate);
console.log("Test suite name: "+testSuiteName);
console.log("All tests passed?: "+allTestsPassed);