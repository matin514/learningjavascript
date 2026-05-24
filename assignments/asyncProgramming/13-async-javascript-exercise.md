# Asynchronous JavaScript

**Topics:** Callbacks, Promises, async/await, Error Handling  
**File to Create:** `async-javascript-exercise.js`

---

By the time you write your first Playwright test, every page interaction — clicking a button, filling a form, waiting for text to appear — will be an async operation that you `await`. This exercise builds that mental model one step at a time: you'll start with callbacks, move through promises, and arrive at the async/await pattern that Playwright uses throughout. The challenge at the end is structured exactly like a real Playwright test.

---

## Setup

Create `async-javascript-exercise.js` in your `js-automation-training` folder and run it with `node async-javascript-exercise.js` as you go.

---

## Exercise 1: Callback Functions

A callback is just a function you pass to another function so it can be called later with a result. Before promises existed, this was how all async code in JavaScript was written — and you'll still see it in older test runners.

Write `executeTest(testName, callback)` so that it:
1. Prints `"Running: " + testName`
2. Creates a result object with `name`, `status: "PASSED"`, and `duration`
3. Calls `callback` with that result

```javascript
function executeTest(testName, callback) {
    // YOUR CODE HERE
}

executeTest("Login Test", function(result) {
    console.log("Test completed: " + result.name);
    console.log("Status: " + result.status);
});

// Expected output:
// Running: Login Test
// Test completed: Login Test
// Status: PASSED
```

Once that works, try a bonus version that uses `Math.random()` to make the status 70% PASSED / 30% FAILED.

---

## Exercise 2: Create a Promise

A promise represents a value that will be available in the future. The executor function you pass to `new Promise(...)` does the work, then calls `resolve` on success or `reject` on failure.

Write `runAsyncTest(testName)` that returns a new Promise. Inside, use `setTimeout` to simulate a 1-second delay, then resolve with a result object.

```javascript
function runAsyncTest(testName) {
    // YOUR CODE HERE — return a new Promise
}

runAsyncTest("Async Test")
    .then(function(result) {
        console.log("Result: " + result.status);
    });

// Expected output (after 1 second):
// Result: PASSED
```

---

## Exercise 3: Promise with Error Handling

Now write a promise that can either succeed or fail, and use `.catch()` to handle the failure case without crashing.

Write `loginUser(username, password)` that returns a promise. Use `setTimeout` for a 500ms delay. Resolve with `"Login successful"` if the credentials are `admin` / `Test@123`, reject with `"Invalid credentials"` otherwise.

```javascript
function loginUser(username, password) {
    return new Promise(function(resolve, reject) {
        // YOUR CODE HERE
    });
}

loginUser("admin", "Test@123")
    .then(message => console.log("✓ " + message))
    .catch(error  => console.log("✗ " + error));

loginUser("admin", "wrong")
    .then(message => console.log("✓ " + message))
    .catch(error  => console.log("✗ " + error));

// Expected output:
// ✓ Login successful
// ✗ Invalid credentials
```

---

## Exercise 4: Promise Chaining

When one async step depends on the result of the previous one, you chain `.then()` calls. Each `.then()` receives what the previous step resolved with, does its work, and returns its own promise for the next step.

`openBrowser` is provided. Write the other three functions following the same pattern:

```javascript
function openBrowser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1. Browser opened");
            resolve("Browser");
        }, 500);
    });
}

function navigateToPage(browser) {
    // YOUR CODE HERE — 500ms delay, print "2. Page loaded", resolve with "Page"
}

function fillForm(page) {
    // YOUR CODE HERE — 500ms delay, print "3. Form filled", resolve with "Form"
}

function submitForm(form) {
    // YOUR CODE HERE — 500ms delay, print "4. Form submitted", resolve with "Success"
}

openBrowser()
    .then(browser => navigateToPage(browser))
    .then(page    => fillForm(page))
    .then(form    => submitForm(form))
    .then(result  => console.log("Final: " + result))
    .catch(error  => console.log("Error: " + error));

// Expected output:
// 1. Browser opened
// 2. Page loaded
// 3. Form filled
// 4. Form submitted
// Final: Success
```

---

## Exercise 5: Convert to async/await

The same flow from Exercise 4, written with `async/await` instead of a `.then()` chain. The result is identical — the syntax is just much easier to read.

```javascript
// Use the functions you wrote in Exercise 4

async function runTest() {
    // YOUR CODE HERE
    // await each step and pass its result to the next
    // print the final result
}

runTest();

// Expected output (same as Exercise 4):
// 1. Browser opened
// 2. Page loaded
// 3. Form filled
// 4. Form submitted
// Final: Success
```

---

## Exercise 6: Error Handling with try/catch

When you use `await`, a rejected promise behaves just like a thrown error — it jumps straight to the `catch` block. This is one of the main reasons async/await is nicer than `.then()/.catch()` chains.

```javascript
function riskyOperation(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject("Operation failed!");
            else            resolve("Operation succeeded!");
        }, 500);
    });
}

async function testWithErrorHandling(shouldFail) {
    // YOUR CODE HERE — try/catch, await riskyOperation, print ✓ or ✗
}

testWithErrorHandling(false);   // should succeed
testWithErrorHandling(true);    // should fail

// Expected output:
// ✓ Operation succeeded!
// ✗ Operation failed!
```

---

## Exercise 7: Sequential vs Parallel

Three `await` statements in a row run one after another — each waits for the previous to finish before starting. When the steps are independent, that's wasted time. `Promise.all()` starts all of them at once and waits for all to finish, taking the time of the slowest one instead of the sum.

```javascript
function task(name, duration) {
    return new Promise(resolve => {
        console.log(name + " started");
        setTimeout(() => {
            console.log(name + " completed");
            resolve(name);
        }, duration);
    });
}

async function runSequential() {
    console.log("=== Sequential ===");
    let start = Date.now();

    // YOUR CODE HERE — await task("Task 1", 1000), Task 2, Task 3

    let end = Date.now();
    console.log("Time: " + (end - start) + "ms\n");
}

async function runParallel() {
    console.log("=== Parallel ===");
    let start = Date.now();

    // YOUR CODE HERE — await Promise.all([...]) with Task A, B, C (1000ms each)

    let end = Date.now();
    console.log("Time: " + (end - start) + "ms\n");
}

runSequential();
setTimeout(() => runParallel(), 4000);

// Sequential should take ~3000ms (1 + 1 + 1)
// Parallel should take ~1000ms (all three at once)
```

---

## Challenge: Complete Login Flow

This is the shape of a real Playwright test. The `page` object is already built for you — your job is to write the async function that uses it. If you can do this from scratch without looking anything up, you're ready for Playwright.

```javascript
const page = {
    goto: (url) => new Promise(resolve => setTimeout(() => {
        console.log("Navigated to: " + url); resolve();
    }, 300)),

    fill: (selector, value) => new Promise(resolve => setTimeout(() => {
        console.log("Filled '" + selector + "' with: " + value); resolve();
    }, 200)),

    click: (selector) => new Promise(resolve => setTimeout(() => {
        console.log("Clicked: " + selector); resolve();
    }, 200)),

    textContent: (selector) => new Promise(resolve => setTimeout(() => {
        resolve("Welcome, Test User!");
    }, 200))
};

async function playwrightLoginTest() {
    try {
        console.log("=== Login Test Start ===\n");

        // YOUR CODE HERE
        // 1. Navigate to https://example.com/login
        // 2. Fill '#username' with "testuser"
        // 3. Fill '#password' with "Test@123"
        // 4. Click 'button[type="submit"]'
        // 5. Get textContent of '.welcome-message'
        // 6. Print "Welcome message: " + the text
        // 7. Print "✓ TEST PASSED"

    } catch (error) {
        console.log("✗ TEST FAILED: " + error);
    }
}

playwrightLoginTest();

// Expected output:
// === Login Test Start ===
//
// Navigated to: https://example.com/login
// Filled '#username' with: testuser
// Filled '#password' with: Test@123
// Clicked: button[type="submit"]
// Welcome message: Welcome, Test User!
// ✓ TEST PASSED
```

---

## Watch Out For

**Forgetting `async` when you use `await`.** `await` is only valid inside an `async` function. If you write `await` in a regular function, JavaScript throws a `SyntaxError` before anything runs.

**Forgetting `await` entirely.** If you write `let result = somePromise()` without `await`, `result` holds the Promise object, not its resolved value. It won't throw — it'll just silently give you `Promise { 'PASSED' }` instead of `'PASSED'`, which is hard to debug.

**No `try/catch` around async calls.** When an awaited promise rejects and there's no `catch`, Node.js prints an `UnhandledPromiseRejection` warning and the error disappears. Always wrap your top-level async calls in try/catch or add `.catch()`.

**Sequential when you meant parallel.** Three `await` statements in a row run one after another even if they don't depend on each other. For independent operations, use `Promise.all()` — it runs them concurrently and saves the sum of their delays.

---

## Quick Reference

```javascript
// Create a promise
function doWork() {
    return new Promise((resolve, reject) => {
        if (ok) resolve("result");
        else    reject("error");
    });
}

// Consume with .then() / .catch()
doWork()
    .then(result => console.log(result))
    .catch(err   => console.log(err));

// Consume with async/await
async function run() {
    try {
        let result = await doWork();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// Parallel — all start at once, wait for all to finish
let [a, b] = await Promise.all([doWork(), doWork()]);

// Rules
// - await only works inside async functions
// - async functions always return a Promise
// - await on a rejected promise throws — use try/catch
```

---

## Before You Move On

Can you explain the difference between a Promise and its resolved value, and why forgetting `await` silently gives you the wrong thing? Do you know when to use `Promise.all()` instead of sequential `await`? Can you write the same async flow as both a `.then()` chain and an `async/await` function? If you got the challenge working, you've already written your first Playwright-shaped test — the real thing just has more assertions.
