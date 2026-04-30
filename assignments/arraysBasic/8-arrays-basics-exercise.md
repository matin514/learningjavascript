# Arrays Basics - Exercise

**Topic:** Arrays - Storing Multiple Values
**File to Create:** `arrays-test-tracking.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Create arrays with multiple values
- ✅ Access array elements by index
- ✅ Use array properties (.length)
---

## Setup

1. Open VSCode
2. Create a new file: `arrays-test-tracking.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node arrays-test-tracking.js`

---

## Exercise 1: Test Suite Array

**Scenario:** Create an array to store test case names for a login module.

**Requirements:**
1. Create an array called `testCases` with these 5 test names:
   - "Valid credentials"
   - "Invalid password"
   - "Empty username"
   - "Empty password"
   - "Remember me checkbox"

2. Print the following:
   - The complete array
   - Total number of test cases
   - The first test case
   - The last test case (use .length, not hard-coded index!)

**Example Output:**
```
Test Suite: Login Module

Test Cases:
[ 'Valid credentials',
  'Invalid password',
  'Empty username',
  'Empty password',
  'Remember me checkbox' ]

Total test cases: 5
First test: Valid credentials
Last test: Remember me checkbox
```

---

## Exercise 2: Test Results Tracker

**Scenario:** Build a test results array dynamically as tests run.

**Requirements:**
1. Create an empty array called `testResults`
2. "Run" 5 tests by adding these results one by one:
   - "PASSED"
   - "PASSED"
   - "FAILED"
   - "PASSED"
   - "SKIPPED"
3. After adding each result, print: "Test X completed: [RESULT]"
4. At the end, print:
   - Total tests run
   - The complete results array
   - Check if "FAILED" exists (using indexOf)

**Example Output:**
```
Running Test Suite...

Test 1 completed: PASSED
Test 2 completed: PASSED
Test 3 completed: FAILED
Test 4 completed: PASSED
Test 5 completed: SKIPPED

Test Summary:
Total tests run: 5
Results: [ 'PASSED', 'PASSED', 'FAILED', 'PASSED', 'SKIPPED' ]
Contains failures: Yes (found at index 2)
```

---

## Exercise 3: Test Data Management

**Scenario:** Manage test user emails using array methods.

**Requirements:**
1. Create an array called `testEmails` with these initial values:
   - "user1@test.com"
   - "user2@test.com"
   - "user3@test.com"

2. Perform these operations:
   - Print initial emails and count
   - Add "user4@test.com" to the END
   - Add "admin@test.com" to the BEGINNING
   - Remove the last email
   - Remove the first email
   - Print final emails and count

**Example Output:**
```
Test Email Management

Initial emails:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]
Count: 3

After adding user4@test.com to end:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After adding admin@test.com to beginning:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After removing last email:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

After removing first email:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

Final count: 3
```

---

## Exercise 4: Test Score Analysis

**Scenario:** Store and analyze test automation scores.

**Requirements:**
1. Create an array called `testScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90

2. Calculate and print:
   - Total number of scores
   - First score
   - Last score
   - Check if score 95 exists in the array

**Example Output:**
```
Test Score Analysis

Scores: [ 85, 92, 78, 95, 88, 73, 90 ]
Total scores: 7

First score: 85
Last score: 90

Checking for specific scores...
Score 95 found: Yes (at index 3)
Score 100 found: No (index: -1)
```
---

## Common Mistakes to Avoid

**❌ Off-by-one error accessing last element:**
```javascript
// Wrong - goes beyond array
let last = array[array.length];  // undefined!

// Correct
let last = array[array.length - 1];
```

**❌ Forgetting arrays are zero-indexed:**
```javascript
// Wrong - first element is at index 0
console.log(array[1]);  // This is the SECOND element!

// Correct - first element
console.log(array[0]);  // This is the FIRST element
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Do I understand zero-based indexing?
2. ✅ Can I access first and last elements correctly?
3. ✅ Can I use .length properly?

---

## Reflection

**Think about:**
1. How are arrays better than multiple individual variables?
2. Where in testing do you track multiple values?
3. How could arrays improve your test data management?
4. What test scenarios would benefit from arrays?

---