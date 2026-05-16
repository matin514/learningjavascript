# Object-Oriented Programming - Exercise

**Topics:** Classes, Inheritance
**File to Create:** `oop-classes-exercise.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Write ES6 classes with constructors and methods
- ✅ Implement inheritance with extends and super
- ✅ Use getters and setters for validation and computed properties
- ✅ Implement static properties and methods for shared data

---

## Setup

1. Create a new file: `oop-classes-exercise.js`
2. Save it in your `js-automation-training` folder
3. Test by running: `node oop-classes-exercise.js`

---

## Exercise 1: ES6 Classes

**Scenario:** Refactor constructor functions to ES6 classes.

**Requirements:**
1. Create a `TestSuite` class with:
   - Constructor accepting `name` parameter
   - Public field: `tests = []`
   - Private field: `#executionCount = 0`

2. Add public methods:
   - `addTest(testName)` - adds test to array, increments #executionCount
   - `run()` - logs running message for each test
   - `getExecutionCount()` - returns #executionCount

3. Create an instance and add 5 tests
4. Run the suite and display execution count

**Example Output:**
```
=== EXERCISE 1: ES6 Classes ===

Test Suite: Regression Tests

Adding tests...
  Added: Login Test
  Added: Logout Test
  Added: Search Test
  Added: Checkout Test
  Added: Payment Test

Running suite...
  Running test 1/5: Login Test
  Running test 2/5: Logout Test
  Running test 3/5: Search Test
  Running test 4/5: Checkout Test
  Running test 5/5: Payment Test

Total tests executed: 5
```

**Starter code:**
```javascript
console.log("=== EXERCISE 1: ES6 Classes ===\n");

class TestSuite {
    // Your code here
}

let suite = new TestSuite("Regression Tests");
console.log(`Test Suite: ${suite.name}\n`);

console.log("Adding tests...");
suite.addTest("Login Test");
// Add more tests

console.log("\nRunning suite...");
suite.run();

console.log(`\nTotal tests executed: ${suite.getExecutionCount()}`);
```

---

## Exercise 2: Inheritance with extends

**Scenario:** Create specialized test classes using inheritance.

**Requirements:**
1. Create a base `Test` class with:
   - Constructor: `name`, `status = "PENDING"`, `duration = 0`
   - Method `start()`: logs start message, sets status to "RUNNING"
   - Method `finish(passed)`: sets status to PASSED/FAILED, logs result

2. Create `UITest` class that extends `Test`:
   - Constructor: `name`, `url`, `selector`
   - Method `navigate()`: logs navigation
   - Override `start()`: call parent start(), then navigate()

3. Create `APITest` class that extends `Test`:
   - Constructor: `name`, `endpoint`, `method`
   - Method `sendRequest()`: logs API call
   - Override `start()`: call parent start(), then sendRequest()

4. Create instances of each and run them

**Example Output:**
```
=== Exercise 2: Inheritance ===

Running UI Test:
  Starting: Login UI Test
  Navigating to: https://app.com/login
  Clicking selector: #loginBtn
  ✓ Login UI Test PASSED

Running API Test:
  Starting: Get Users API Test
  Sending: GET /api/users
  ✓ Get Users API Test PASSED

Inheritance check:
  uiTest instanceof UITest: true
  uiTest instanceof Test: true
  apiTest instanceof APITest: true
  apiTest instanceof Test: true
```

**Starter code:**
```javascript
console.log("=== Exercise 2: Inheritance ===\n");

class Test {
    constructor(name) {
        this.name = name;
        this.status = "PENDING";
        this.duration = 0;
    }

    start() {
        // Your code here
    }

    finish(passed) {
        // Your code here
    }
}

class UITest extends Test {
    constructor(name, url, selector) {
        // Your code here
    }

    navigate() {
        // Your code here
    }

    start() {
        // Your code here - call super.start() first!
    }
}

class APITest extends Test {
    // Your code here
}

// Create and run tests
let uiTest = new UITest("Login UI Test", "https://app.com/login", "#loginBtn");
let apiTest = new APITest("Get Users API Test", "/api/users", "GET");

// Run them
```

---

## Exercise 3: Getters and Setters

**Scenario:** Create a test configuration class with validation using getters and setters.

**Requirements:**
1. Create a `TestConfig` class with:
   - Private field: `#timeout = 30000`
   - Private field: `#retries = 2`
   - Private field: `#baseUrl = ""`

2. Add getters and setters for `timeout`:
   - Getter: return `#timeout` value
   - Setter: validate timeout is between 1000 and 300000, log warnings for invalid values

3. Add a computed property getter `timeoutInSeconds`:
   - Returns timeout converted to seconds

4. Add a read-only property getter `maxRetries`:
   - Returns `#retries` (no setter)

5. Add getter and setter for `baseUrl`:
   - Setter: validate URL is not empty, trim whitespace

6. Create an instance and test all getters/setters

**Example Output:**
```
=== Exercise 3: Getters and Setters ===

Creating test configuration...

Setting timeout:
  ✓ Setting timeout to: 45000ms

Getting values:
  Current timeout: 45000ms
  Timeout in seconds: 45s
  Max retries: 2

Testing validation:
  ❌ Timeout too short! Setting to minimum: 1000ms
  Current timeout: 1000ms

  ❌ Timeout too long! Setting to maximum: 300000ms
  Current timeout: 300000ms

Setting base URL:
  ✓ Base URL set to: https://app.test.com
  Current base URL: https://app.test.com

Testing read-only property:
  Max retries is read-only: 2
```

**Starter code:**
```javascript
console.log("=== Exercise 3: Getters and Setters ===\n");

class TestConfig {
    #timeout = 30000;
    #retries = 2;
    #baseUrl = "";

    // Add getter for timeout
    get timeout() {
        // Your code here
    }

    // Add setter for timeout with validation
    set timeout(value) {
        // Your code here
        // Validate: must be between 1000 and 300000
    }

    // Add computed property: timeoutInSeconds
    get timeoutInSeconds() {
        // Your code here
    }

    // Add read-only property: maxRetries
    get maxRetries() {
        // Your code here
    }

    // Add getter/setter for baseUrl
    get baseUrl() {
        // Your code here
    }

    set baseUrl(url) {
        // Your code here
        // Validate: trim whitespace, check not empty
    }
}

console.log("Creating test configuration...\n");
let config = new TestConfig();

console.log("Setting timeout:");
config.timeout = 45000;

console.log("\nGetting values:");
console.log(`  Current timeout: ${config.timeout}ms`);
console.log(`  Timeout in seconds: ${config.timeoutInSeconds}s`);
console.log(`  Max retries: ${config.maxRetries}`);

console.log("\nTesting validation:");
config.timeout = 500;  // Too short
console.log(`  Current timeout: ${config.timeout}ms`);

config.timeout = 500000;  // Too long
console.log(`  Current timeout: ${config.timeout}ms`);

console.log("\nSetting base URL:");
config.baseUrl = "  https://app.test.com  ";
console.log(`  Current base URL: ${config.baseUrl}`);

console.log("\nTesting read-only property:");
console.log(`  Max retries is read-only: ${config.maxRetries}`);
```

---

## Exercise 4: Static Properties and Methods

**Scenario:** Create a test runner that tracks statistics using static properties.

**Requirements:**
1. Create a `Test` class with:
   - Static property: `totalTests = 0`
   - Static property: `passedTests = 0`
   - Static property: `failedTests = 0`
   - Instance properties: `name`, `status = "PENDING"`

2. Add instance method `run(shouldPass)`:
   - Increments `Test.totalTests`
   - If `shouldPass` is true, increment `Test.passedTests`, set status to "PASSED"
   - Otherwise, increment `Test.failedTests`, set status to "FAILED"
   - Log the result

3. Add static method `getStats()`:
   - Returns an object with total, passed, failed, and success rate

4. Add static method `reset()`:
   - Resets all counters to 0

5. Add static factory method `createSmokeTest(name)`:
   - Returns a new Test instance with "[SMOKE]" prefix

6. Create and run multiple tests, display statistics

**Example Output:**
```
=== Exercise 4: Static Properties and Methods ===

Running tests...
  ✓ Login Test PASSED
  ✓ Search Test PASSED
  ✗ Checkout Test FAILED
  ✓ Dashboard Test PASSED

Statistics after 4 tests:
  Total: 4
  Passed: 3
  Failed: 1
  Success Rate: 75.0%

Creating smoke test with factory method:
  ✓ [SMOKE] Quick Login PASSED

Final Statistics:
  Total: 5
  Passed: 4
  Failed: 1
  Success Rate: 80.0%

Resetting counters...
Statistics after reset:
  Total: 0
  Passed: 0
  Failed: 0
  Success Rate: 0%
```

**Starter code:**
```javascript
console.log("=== Exercise 4: Static Properties and Methods ===\n");

class Test {
    static totalTests = 0;
    static passedTests = 0;
    static failedTests = 0;

    constructor(name) {
        this.name = name;
        this.status = "PENDING";
    }

    run(shouldPass) {
        // Your code here
        // Increment Test.totalTests
        // Update Test.passedTests or Test.failedTests based on shouldPass
        // Set this.status
        // Log result
    }

    static getStats() {
        // Your code here
        // Return object with total, passed, failed, successRate
    }

    static reset() {
        // Your code here
    }

    static createSmokeTest(name) {
        // Your code here
        // Return new Test with "[SMOKE]" prefix
    }
}

console.log("Running tests...");
let test1 = new Test("Login Test");
test1.run(true);

let test2 = new Test("Search Test");
test2.run(true);

let test3 = new Test("Checkout Test");
test3.run(false);

let test4 = new Test("Dashboard Test");
test4.run(true);

console.log("\nStatistics after 4 tests:");
let stats = Test.getStats();
console.log(`  Total: ${stats.total}`);
console.log(`  Passed: ${stats.passed}`);
console.log(`  Failed: ${stats.failed}`);
console.log(`  Success Rate: ${stats.successRate}%`);

console.log("\nCreating smoke test with factory method:");
let smokeTest = Test.createSmokeTest("Quick Login");
smokeTest.run(true);

console.log("\nFinal Statistics:");
stats = Test.getStats();
console.log(`  Total: ${stats.total}`);
console.log(`  Passed: ${stats.passed}`);
console.log(`  Failed: ${stats.failed}`);
console.log(`  Success Rate: ${stats.successRate}%`);

console.log("\nResetting counters...");
Test.reset();

console.log("Statistics after reset:");
stats = Test.getStats();
console.log(`  Total: ${stats.total}`);
console.log(`  Passed: ${stats.passed}`);
console.log(`  Failed: ${stats.failed}`);
console.log(`  Success Rate: ${stats.successRate}%`);
```

---
## Common Mistakes to Avoid

**❌ Forgetting super() in child constructor:**
```javascript
class UITest extends Test {
    constructor(name, url) {
        this.url = url;  // ERROR! Call super() first
    }
}
```

**✅ Correct:**
```javascript
class UITest extends Test {
    constructor(name, url) {
        super(name);  // Call parent first
        this.url = url;
    }
}
```

**❌ Forgetting 'new' keyword:**
```javascript
let test = TestCase("Login");  // Returns undefined!
```

**✅ Correct:**
```javascript
let test = new TestCase("Login");
```

---

## Key Takeaways

**Classes:**
- ES6 classes are syntactic sugar over constructor functions
- Still use prototypes under the hood
- Cleaner, more intuitive syntax

**Inheritance:**
- `extends` creates inheritance relationship
- `super()` calls parent constructor (REQUIRED)
- `super.method()` calls parent method
- Child inherits all parent properties and methods

**Getters and Setters:**
- Use `get` keyword for getters (read access)
- Use `set` keyword for setters (write access with validation)
- Enable computed properties and validation logic
- Create read-only properties (getter without setter)

**Static Members:**
- Static properties are shared across all instances
- Static methods are called on the class, not instances
- Useful for utility functions, factory methods, and counters
- Access with `ClassName.staticProperty`

---

## Self-Check

Before moving on, ensure you can:

**Basic OOP Concepts:**
- ✅ Create ES6 classes with constructors
- ✅ Implement inheritance with extends
- ✅ Use super() in child constructors
- ✅ Override parent methods

**Advanced OOP Concepts:**
- ✅ Create getters and setters with validation
- ✅ Implement static properties and methods
---