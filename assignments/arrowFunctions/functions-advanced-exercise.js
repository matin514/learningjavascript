//Exercise 1

const greet=(name)=> {
    return "Hello, " + name;
}


const isAdult=(age)=>{
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

const calculateTotal=(price, quantity)=> {
    let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
}

console.log(greet("John"));           // "Hello, John"
console.log(isAdult(25));             // true
console.log(calculateTotal(100, 3));

//Exercise 2

let testResults = [
    { name: "Login Test", score: 85, status: "PASSED" },
    { name: "Logout Test", score: 72, status: "FAILED" },
    { name: "Search Test", score: 95, status: "PASSED" },
    { name: "Checkout Test", score: 88, status: "PASSED" },
    { name: "Payment Test", score: 65, status: "FAILED" }
];

let passedTests= testResults.filter(test=>test.status==="PASSED");
let testNames =testResults.map(test=>test.name);
let highScores =testResults.filter(test=>test.score>80);
let firstFailed =testResults.find(test=>test.status==="FAILED");
let allPassed = testResults.every(test=>test.status==="PASSED");
let anyFailed =testResults.some(test=>test.status==="FAILED");

console.log("Passed tests:", passedTests);
console.log("Test names:", testNames);
console.log("High scores:", highScores);
console.log("First failed:", firstFailed);
console.log("All passed?", allPassed);
console.log("Any failed?", anyFailed);


//Exercise 5

function validateAll(...conditions) {
   return conditions.every(conditions=>conditions);
}

let user = {
    email: "test@example.com",
    age: 25,
    password: "Test@123",
    active: true
}

console.log("\nTest 1: All valid");

let result1 = validateAll(
    user.email.includes("@"),
    user.age >= 18,
    user.password.length >= 8,
    user.active === true
);
console.log("Result:", result1);

console.log("\nTest 2: One invalid");
let result2 = validateAll(
    user.email.includes("@"),
    user.age >= 30,  // This will be false!
    user.active === true
);
console.log("Result:", result2);


console.log("\nTest 3: No conditions");
let result3 = validateAll();
console.log("Result:", result3);