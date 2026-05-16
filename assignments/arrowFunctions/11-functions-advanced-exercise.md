# Advanced Functions - Exercise

**Topics:** Arrow functions, 'this' keyword,  Rest parameters
**File to Create:** `functions-advanced-exercise.js`

---

## Instructions

Create a new file called `functions-advanced-exercise.js` and complete the following exercises.

Run your code with:
```bash
node functions-advanced-exercise.js
```

---

## Exercise 1: Convert to Arrow Functions

Convert the following traditional functions to arrow functions:

```javascript
// Exercise 1a: Convert this function
function greet(name) {
    return "Hello, " + name;
}

// Exercise 1b: Convert this function
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Exercise 1c: Convert this function
function calculateTotal(price, quantity) {
    let total = price * quantity;
    let tax = total * 0.1;
    return total + tax;
}
```

**Your arrow functions:**

```javascript
// 1a: Arrow function for greet
const greet = // YOUR CODE HERE

// 1b: Arrow function for isAdult (hint: use ternary operator)
const isAdult = // YOUR CODE HERE

// 1c: Arrow function for calculateTotal
const calculateTotal = // YOUR CODE HERE

// Test them
console.log(greet("John"));           // "Hello, John"
console.log(isAdult(25));             // true
console.log(calculateTotal(100, 3));  // 330
```

---

## Exercise 2: Array Methods with Arrow Functions

Use arrow functions with array methods to solve these problems:

```javascript
let testResults = [
    { name: "Login Test", score: 85, status: "PASSED" },
    { name: "Logout Test", score: 72, status: "FAILED" },
    { name: "Search Test", score: 95, status: "PASSED" },
    { name: "Checkout Test", score: 88, status: "PASSED" },
    { name: "Payment Test", score: 65, status: "FAILED" }
];

// 2a: Filter all passed tests
let passedTests = // YOUR CODE HERE

// 2b: Get array of just the test names
let testNames = // YOUR CODE HERE

// 2c: Get array of scores that are above 80
let highScores = // YOUR CODE HERE

// 2d: Find the first failed test
let firstFailed = // YOUR CODE HERE

// 2e: Check if ALL tests passed (every)
let allPassed = // YOUR CODE HERE

// 2f: Check if ANY test failed (some)
let anyFailed = // YOUR CODE HERE

console.log("Passed tests:", passedTests);
console.log("Test names:", testNames);
console.log("High scores:", highScores);
console.log("First failed:", firstFailed);
console.log("All passed?", allPassed);
console.log("Any failed?", anyFailed);
```

---

## Exercise 5: Rest Parameters - Validation Function

Create a function that validates ALL conditions using rest parameters:

```javascript
// Create a function that takes any number of conditions
// and returns true only if ALL are true
function validateAll(...conditions) {
    // YOUR CODE HERE
    // Hint: Use a loop or array method to check all conditions
}

// Test cases
let user = {
    email: "test@example.com",
    age: 25,
    password: "Test@123",
    active: true
};

// Test 1: All valid conditions
console.log("\nTest 1: All valid");
let result1 = validateAll(
    user.email.includes("@"),
    user.age >= 18,
    user.password.length >= 8,
    user.active === true
);
console.log("Result:", result1);  // Should be true

// Test 2: One invalid condition
console.log("\nTest 2: One invalid");
let result2 = validateAll(
    user.email.includes("@"),
    user.age >= 30,  // This will be false!
    user.active === true
);
console.log("Result:", result2);  // Should be false

// Test 3: No conditions (edge case)
console.log("\nTest 3: No conditions");
let result3 = validateAll();
console.log("Result:", result3);  // Should be true (no conditions to fail)
```
---