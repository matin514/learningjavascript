# Objects Basics - Exercise

**Topic:** Objects - Structured Test Data
**File to Create:** `objects-basics-exercise.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Create objects with key-value pairs
- ✅ Access object properties with dot and bracket notation
- ✅ Modify and add object properties
- ✅ Delete object properties with `delete` keyword
- ✅ Create object methods (functions inside objects)
- ✅ Use 'this' keyword in methods
- ✅ Create arrays of objects
- ✅ Loop through arrays of objects
- ✅ Build complete Test Result Tracker

---

## Setup

1. Open VSCode
2. Create a new file: `objects-basics-exercise.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node objects-basics-exercise.js`

---

## Exercise 1: Create Test Case Object

**Scenario:** Create a structured test case object.

**Requirements:**
1. Create an object called `testCase` with these properties:
   - id: "TC-001"
   - name: "Login with valid credentials"
   - priority: "High"
   - status: "Passed"
   - duration: 2.5
   - browser: "Chrome"

2. Print each property using dot notation
3. Add a new property `tester` with value "John Doe"
4. Modify the `status` to "Failed"
5. Print the complete object

**Example Output:**
```
Test Case Details
━━━━━━━━━━━━━━━━━━━━━━━━━

ID: TC-001
Name: Login with valid credentials
Priority: High
Status: Passed
Duration: 2.5s
Browser: Chrome

Adding tester...
Changing status...

Updated Test Case:
{
  id: 'TC-001',
  name: 'Login with valid credentials',
  priority: 'High',
  status: 'Failed',
  duration: 2.5,
  browser: 'Chrome',
  tester: 'John Doe'
}
```

---

## Exercise 2: Test User Objects

**Scenario:** Create multiple test user objects.

**Requirements:**
1. Create 3 test user objects with these properties:
   - username
   - password
   - email
   - role

2. Store all 3 users in an array called `testUsers`

3. Loop through the array and print each user's details

4. Count how many users have role "admin" vs "user"

**Example Output:**
```
Test Users Database
━━━━━━━━━━━━━━━━━━━━━━━━━

User 1:
  Username: admin@test.com
  Password: ********
  Email: admin@test.com
  Role: admin

User 2:
  Username: user1@test.com
  Password: ********
  Email: user1@test.com
  Role: user

User 3:
  Username: user2@test.com
  Password: ********
  Email: user2@test.com
  Role: user

Summary:
  Total users: 3
  Admins: 1
  Regular users: 2
```

---

## Exercise 3: Test Results Array

**Scenario:** Create an array of test result objects and calculate statistics.

**Requirements:**
1. Create an array called `testResults` with 5 test objects
2. Each test object should have:
   - name (test name)
   - result ("PASSED", "FAILED", or "SKIPPED")
   - duration (in seconds)

3. Loop through and print each test result

4. Calculate and print:
   - Total tests
   - Passed count
   - Failed count
   - Skipped count
   - Pass rate (percentage)
   - Total duration

**Example Output:**
```
Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

Test Results:

✓ 1. Login Test
  Result: PASSED
  Duration: 2.5s

✗ 2. Logout Test
  Result: FAILED
  Duration: 1.8s

✓ 3. Search Test
  Result: PASSED
  Duration: 3.2s

⊘ 4. Checkout Test
  Result: SKIPPED
  Duration: 0.0s

✓ 5. Payment Test
  Result: PASSED
  Duration: 2.1s

Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━
  Total tests: 5
  Passed: 3 (60.0%)
  Failed: 1 (20.0%)
  Skipped: 1 (20.0%)

  Total duration: 9.6s
  Average duration: 1.9s
```

---

## Exercise 4: Object Methods and 'this' Keyword

**Scenario:** Create objects with methods to simulate a test runner.

**Requirements:**
1. Create an object called `testRunner` with:
   - name: "Login Suite"
   - totalTests: 5
   - passedTests: 0
   - failedTests: 0

2. Add these methods to the object:
   - `start()` - prints "Running test suite: [name]"
   - `pass()` - increments passedTests and prints the count
   - `fail()` - increments failedTests and prints the count
   - `getReport()` - prints a summary with pass rate

3. Call the methods to:
   - Start the suite
   - Mark 3 tests as passed
   - Mark 1 test as failed
   - Generate the report

4. Create a second object `testCase` with methods:
   - `start()` - sets status to "RUNNING" and records start time
   - `pass()` - sets status to "PASSED" and calculates duration
   - `fail(reason)` - sets status to "FAILED" with reason
   - Properties: name, status, duration, startTime

**Example Output:**
```
Test Runner with Methods
━━━━━━━━━━━━━━━━━━━━━━━━━

Running test suite: Login Suite

✓ Test passed! Total passed: 1
✓ Test passed! Total passed: 2
✓ Test passed! Total passed: 3
✗ Test failed! Total failed: 1

Test Suite Report:
  Name: Login Suite
  Total tests: 5
  Passed: 3 (60.0%)
  Failed: 1 (20.0%)
  Not yet run: 1

━━━━━━━━━━━━━━━━━━━━━━━━━

Test Case with Methods:

✓ Started: Login Test
  Status: RUNNING

✓ Login Test PASSED
  Duration: 0.05s
```

**Hints:**
- Use `this.propertyName` inside methods to access object properties
- For duration calculation: `Date.now()` gives current time in milliseconds
- Use `function() { }` syntax for methods, not arrow functions (for 'this' to work)

---

## Exercise 5: Deleting Properties

**Scenario:** Clean up sensitive test data after execution.

**Requirements:**
1. Create an object `testData` with:
   - username: "testuser@example.com"
   - password: "Test@123"
   - sessionToken: "abc123xyz"
   - firstName: "John"
   - lastName: "Doe"

2. Print the object before cleanup

3. Use `delete` to remove:
   - password
   - sessionToken

4. Print the object after cleanup

5. Use the `in` operator to check if 'password' still exists

**Example Output:**
```
Cleanup Sensitive Data
━━━━━━━━━━━━━━━━━━━━━━━━━

Before cleanup:
{
  username: 'testuser@example.com',
  password: 'Test@123',
  sessionToken: 'abc123xyz',
  firstName: 'John',
  lastName: 'Doe'
}

After cleanup:
{
  username: 'testuser@example.com',
  firstName: 'John',
  lastName: 'Doe'
}

Does 'password' exist? false
Does 'username' exist? true

✓ Sensitive data removed successfully!
```

---

## Exercise 6: Complete Test Tracker

**Scenario:** Build a complete test tracker object with nested data.

**Requirements:**
1. Create an object called `testTracker` with:
   - suiteName: "Login Module"
   - environment: "Staging"
   - browser: "Chrome"
   - tests: (array of test objects with name, result, duration)

2. Add a method to calculate statistics (don't worry if this is advanced - try your best!)

3. Print the complete report:
   - Suite information
   - Each test result
   - Statistics

**Example Output:**
```
╔══════════════════════════════════════════╗
║       TEST SUITE EXECUTION REPORT        ║
╚══════════════════════════════════════════╝

Suite Information:
  Name: Login Module
  Environment: Staging
  Browser: Chrome

Test Results:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Test 1: Valid credentials
  Result: PASSED
  Duration: 2.5s

✗ Test 2: Invalid password
  Result: FAILED
  Duration: 1.8s

✗ Test 3: Empty username
  Result: FAILED
  Duration: 1.2s

✓ Test 4: Remember me checkbox
  Result: PASSED
  Duration: 2.1s

Summary Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Total tests: 4
  Passed: 2 (50.0%)
  Failed: 2 (50.0%)
  Total duration: 7.6s
  Average duration: 1.9s

Status: ⚠️  Review failed tests before deployment
╚══════════════════════════════════════════╝
```

---

## Common Mistakes to Avoid

**❌ Missing commas:**
```javascript
// Wrong
let obj = {
    name: "Test"
    result: "PASSED"  // Missing comma!
};
```

**✅ Correct:**
```javascript
let obj = {
    name: "Test",     // Comma here
    result: "PASSED"
};
```

**❌ Wrong property access:**
```javascript
let test = { name: "Login" };
console.log(test.result);  // undefined (property doesn't exist)
```

**❌ Confusing array and object syntax:**
```javascript
// Array - square brackets
let arr = [1, 2, 3];

// Object - curly braces
let obj = { a: 1, b: 2 };
```

---

## Object Patterns Quick Reference

**Create object:**
```javascript
let obj = {
    key1: "value1",
    key2: 123,
    key3: true
};
```

**Access properties:**
```javascript
obj.key1              // Dot notation (most common)
obj["key1"]           // Bracket notation (dynamic)
```

**Modify object:**
```javascript
obj.key1 = "new";     // Change existing
obj.newKey = "add";   // Add new property
```

**Array of objects:**
```javascript
let arr = [
    { name: "Test1", result: "PASSED" },
    { name: "Test2", result: "FAILED" }
];

// Access
arr[0].name           // "Test1"
arr[1].result         // "FAILED"
```

**Loop through array of objects:**
```javascript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
    console.log(arr[i].result);
}
```

**Loop through object properties:**
```javascript
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Do I understand the difference between objects and arrays?
2. ✅ Can I create objects with multiple properties?
3. ✅ Do I know when to use dot vs bracket notation?
4. ✅ Can I delete properties using the `delete` keyword?
5. ✅ Can I create object methods (functions inside objects)?
6. ✅ Do I understand how to use 'this' keyword in methods?
7. ✅ Can I create and loop through arrays of objects?
8. ✅ Do I understand how to access nested properties?

---

## Reflection

**Think about:**
1. Where in your testing do you work with structured data?
2. How could objects improve your test data management?
3. What other test-related data could be represented as objects?

---

## Need Help?

**Debugging tips:**
- Print the entire object to see its structure
- Check for missing commas
- Verify property names are correct
- Use dot notation for clarity when possible

---

## Progress Check

**You can now:**
- ✅ Create structured objects
- ✅ Access and modify properties
- ✅ Delete properties when needed
- ✅ Create object methods (functions)
- ✅ Use 'this' keyword in methods
- ✅ Build arrays of objects
- ✅ Process complex data structures
