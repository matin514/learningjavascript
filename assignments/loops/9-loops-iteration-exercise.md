# Loops & Iteration - Exercise

**Topic:** Loops - Automating Repetitive Tasks
**File to Create:** `loops-iteration-exercise.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Write for loops to iterate through arrays
- ✅ Use for...of loops for cleaner array iteration
- ✅ Understand when to use for vs for...of
- ✅ Use while loops for conditional iteration
- ✅ Use do...while loops for execute-at-least-once scenarios
- ✅ Implement retry logic with do...while
- ✅ Count and analyze array elements
- ✅ Calculate totals and averages
- ✅ Apply loop control (break, continue)
- ✅ Build automated test reports

---

## Setup

1. Open VSCode
2. Create a new file: `loops-iteration-exercise.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node loops-iteration-exercise.js`

---

## Exercise 1: Print All Test Cases

**Scenario:** Display all test cases in a test suite with numbering.

**Requirements:**
1. Create an array called `testCases` with these values:
   - "Login with valid credentials"
   - "Login with invalid password"
   - "Login with empty username"
   - "Logout functionality"
   - "Remember me checkbox"

2. Use a for loop to print each test case with:
   - Test number (starting from 1, not 0!)
   - Test case name

**Example Output:**
```
Login Module Test Suite
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Login with valid credentials
2. Login with invalid password
3. Login with empty username
4. Logout functionality
5. Remember me checkbox

Total test cases: 5
```

---

## Exercise 1.5: Refactor with for...of Loop

**Scenario:** Learn the modern, cleaner way to iterate arrays when you don't need the index.

**Requirements:**
1. Take the same `testCases` array from Exercise 1
2. Rewrite the loop using `for...of` instead of traditional for loop
3. Notice how the code becomes cleaner and more readable

**Traditional for loop (from Exercise 1):**
```javascript
for (let i = 0; i < testCases.length; i++) {
    console.log((i + 1) + ". " + testCases[i]);
}
```

**Your task:** Write the same output using for...of
- **Challenge:** You'll need a separate counter for numbering since for...of doesn't give you `i`
- **Hint:** Create a variable like `let number = 1` before the loop

**Example Output:**
```
Login Module Test Suite (for...of version)
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Login with valid credentials
2. Login with invalid password
3. Login with empty username
4. Logout functionality
5. Remember me checkbox

Total test cases: 5
```

**Solution structure:**
```javascript
console.log("Login Module Test Suite (for...of version)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

let testNumber = 1;
for (let testCase of testCases) {
    // Your code here: print testNumber and testCase
    // Don't forget to increment testNumber!
}
```

**Key Learning:**
- **Use for...of when:** You just need the values (cleaner code)
- **Use traditional for when:** You need the index position
- **for...of syntax:** `for (let item of array)` - reads naturally!

---

## Exercise 2: Count Test Results

**Scenario:** Analyze test execution results and generate statistics.

**Requirements:**
1. Create an array called `testResults` with these values:
   - "PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"

2. Use a for loop to count:
   - Total tests
   - PASSED tests
   - FAILED tests
   - SKIPPED tests

3. Calculate and print:
   - Pass rate (percentage)
   - Fail rate (percentage)

**Example Output:**
```
Test Execution Results
━━━━━━━━━━━━━━━━━━━━━━━━━

Counting results...

Test Statistics:
  Total tests: 8
  Passed: 5 ✓
  Failed: 2 ✗
  Skipped: 1 ⊘

  Pass rate: 62.5%
  Fail rate: 25.0%
```

---

## Exercise 3: Calculate Test Scores

**Scenario:** Calculate statistics for test automation scores.

**Requirements:**
1. Create an array called `testScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90, 87

2. Use a for loop to calculate:
   - Total of all scores
   - Average score
   - Highest score (you'll need to track this as you loop)
   - Lowest score (you'll need to track this as you loop)

**Hint for finding highest/lowest:**
```javascript
let highest = testScores[0];  // Start with first score
for (let i = 1; i < testScores.length; i++) {
    if (testScores[i] > highest) {
        highest = testScores[i];
    }
}
```

**Example Output:**
```
Test Score Analysis
━━━━━━━━━━━━━━━━━━━━━━━━━

Scores: [ 85, 92, 78, 95, 88, 73, 90, 87 ]

Calculating statistics...

Results:
  Total: 688
  Average: 86.0
  Highest: 95
  Lowest: 73
```

---

## Exercise 4: Find Failed Tests

**Scenario:** Identify and report all failed tests from a test run.

**Requirements:**
1. Create two parallel arrays:
   - `testNames`: ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"]
   - `testResults`: ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"]

2. Use a for loop to:
   - Print all test results
   - Find and print ONLY the failed tests with their names
   - Count total failures

**Example Output:**
```
Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

All Tests:
  1. Login: PASSED ✓
  2. Logout: FAILED ✗
  3. Search: PASSED ✓
  4. Checkout: FAILED ✗
  5. Payment: PASSED ✓
  6. Profile: FAILED ✗

Failed Tests (requires attention):
  - Logout
  - Checkout
  - Profile

Total failures: 3
```

---

## Exercise 5: Retry Logic with do...while

**Scenario:** Implement retry logic for a flaky test that might fail occasionally.

**Requirements:**
1. Create a function called `runFlakyTest()` that randomly returns true or false:
   ```javascript
   function runFlakyTest() {
       return Math.random() > 0.7;  // 30% success rate
   }
   ```

2. Use a do...while loop to:
   - Run the test at least once
   - Keep trying until it passes OR max attempts reached
   - Track the number of attempts
   - Print the status of each attempt

3. Variables to create:
   - `testName`: "Login Test"
   - `attempts`: 0
   - `maxAttempts`: 5
   - `testPassed`: false

4. After the loop, print whether the test eventually passed or failed

**Why do...while?**
- The test must run **at least once** (can't know if it passes without trying!)
- We check the condition **after** each attempt
- Perfect for retry scenarios

**Example Output:**
```
Retry Logic Test Runner
━━━━━━━━━━━━━━━━━━━━━━━━━

Running: Login Test
Max attempts: 5

Attempt 1...
  ✗ Test FAILED
  Retrying...

Attempt 2...
  ✗ Test FAILED
  Retrying...

Attempt 3...
  ✓ Test PASSED!

✓ Test passed on attempt 3
```

**OR if all attempts fail:**
```
Attempt 1...
  ✗ Test FAILED
  Retrying...

Attempt 2...
  ✗ Test FAILED
  Retrying...

Attempt 3...
  ✗ Test FAILED
  Retrying...

Attempt 4...
  ✗ Test FAILED
  Retrying...

Attempt 5...
  ✗ Test FAILED

✗ Test failed after 5 attempts
```

**Hint for do...while structure:**
```javascript
do {
    attempts++;
    console.log("Attempt " + attempts + "...");

    testPassed = runFlakyTest();

    if (testPassed) {
        // Print success message
    } else {
        // Print failure message
        // Print retry message if attempts < maxAttempts
    }

} while (!testPassed && attempts < maxAttempts);
```

**Key Learning:**
- **do...while** runs the code block first, then checks the condition
- Perfect for scenarios where you need to try at least once
- Common in testing: retry logic, polling, validation
- Difference from while: while might not run at all, do...while always runs once

---

## Additional Challenges

### Challenge: Complete Test Report Generator

**Scenario:** Complete test report generator with multiple metrics.

**Requirements:**
Create a comprehensive test report that combines everything:

1. Create three parallel arrays:
   - `testNames`: Array of 6 test names
   - `testResults`: Array of 6 results (PASSED/FAILED/SKIPPED)
   - `testDurations`: Array of 6 durations in seconds

2. Use loops to calculate:
   - Total tests, passed, failed, skipped
   - Pass rate
   - Total duration
   - Average duration per test
   - List of failed tests

3. Print a formatted report with all statistics

**Example Output:**
```
╔═══════════════════════════════════════════╗
║       TEST EXECUTION FINAL REPORT         ║
╚═══════════════════════════════════════════╝

Test Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Login Test
   Result: PASSED ✓
   Duration: 2.5s

2. Logout Test
   Result: FAILED ✗
   Duration: 1.8s

3. Search Test
   Result: PASSED ✓
   Duration: 3.2s

4. Checkout Test
   Result: PASSED ✓
   Duration: 2.1s

5. Payment Test
   Result: SKIPPED ⊘
   Duration: 0.0s

6. Profile Test
   Result: FAILED ✗
   Duration: 2.4s

Summary Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total tests: 6
Passed: 3 (50.0%)
Failed: 2 (33.3%)
Skipped: 1 (16.7%)

Duration:
  Total: 12.0s
  Average: 2.0s per test

Failed Tests:
  - Logout Test
  - Profile Test

Overall Status: ⚠️  NEEDS ATTENTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Common Mistakes to Avoid

**❌ Off-by-one error:**
```javascript
// Wrong - tries to access beyond array
for (let i = 0; i <= testResults.length; i++) {  // <= is wrong!
```

**✅ Correct:**
```javascript
for (let i = 0; i < testResults.length; i++) {  // < is correct
```

**❌ Starting at wrong index:**
```javascript
// Wrong - skips first element
for (let i = 1; i < testCases.length; i++) {
```

**✅ Correct:**
```javascript
for (let i = 0; i < testCases.length; i++) {  // Start at 0
```

**❌ Not updating loop variable:**
```javascript
// Wrong - infinite loop!
let i = 0;
while (i < 5) {
    console.log(i);
    // Forgot i++
}
```

**✅ Correct:**
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;  // MUST increment!
}
```

**❌ Wrong comparison in counting:**
```javascript
// Wrong - assigns instead of compares
if (results[i] = "PASSED") {  // Single = is assignment!
```

**✅ Correct:**
```javascript
if (results[i] === "PASSED") {  // === is comparison
```

---

## Loop Patterns Quick Reference

**Print all elements (traditional for):**
```javascript
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

**Print all elements (modern for...of):**
```javascript
for (let element of array) {
    console.log(element);  // Cleaner when index not needed!
}
```

**Count matching elements:**
```javascript
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === "target") {
        count++;
    }
}
```

**Calculate total:**
```javascript
let total = 0;
for (let i = 0; i < array.length; i++) {
    total += array[i];
}
```

**Find highest:**
```javascript
let highest = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > highest) {
        highest = array[i];
    }
}
```

**Find first match:**
```javascript
let found = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] === "target") {
        found = true;
        break;  // Stop searching
    }
}
```

**Retry logic with do...while:**
```javascript
let attempts = 0;
let maxAttempts = 3;
let success = false;

do {
    attempts++;
    success = tryOperation();  // Try at least once
} while (!success && attempts < maxAttempts);
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Do I understand when to use `<` vs `<=` in loop conditions?
2. ✅ Can I loop through an array from start to finish?
3. ✅ Do I know how to count matching elements?
4. ✅ Can I calculate totals and averages with loops?
5. ✅ Do I understand when to use break vs continue?
6. ✅ Do I understand the difference between while and do...while?
7. ✅ Can I implement retry logic with do...while?
8. ✅ Did I avoid off-by-one errors?

---

## Reflection

**Think about:**
1. How do loops make your code more efficient?
2. Where in manual testing do you repeat the same process?
3. How could loops help automate your test reporting?
4. What patterns did you notice in loop structures?

---

**Debugging tips:**
- Print `i` inside the loop to see progression
- Print `array.length` to verify size
- Check your loop condition carefully
- Make sure you update loop variables

---

## Progress Check

**You can now:**
- ✅ Write for loops to process arrays
- ✅ Use for...of loops for cleaner code
- ✅ Choose the right loop type for the task
- ✅ Use while loops for conditions
- ✅ Use do...while loops for execute-at-least-once scenarios
- ✅ Implement retry logic with do...while
- ✅ Count and analyze data
- ✅ Calculate statistics
- ✅ Build automated reports
- ✅ Apply professional loop patterns