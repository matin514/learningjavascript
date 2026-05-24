# Error Handling

**Topic:** try/catch/finally, throwing descriptive errors, error types, custom error classes  
**File to Create:** `error-handling.js`

---

Every Playwright test run will eventually hit something unexpected — a missing element, a network hiccup, bad test data. How your code responds to those moments is what separates a test suite that's useful from one that just crashes with a cryptic stack trace. In this exercise you'll go from basic try/catch through to writing your own error class with custom properties, the same pattern Playwright uses internally.

---

## Setup

Create `error-handling.js` in your `js-automation-training` folder and run it with `node error-handling.js` as you go.

---

## Exercise 1: Don't Let Errors Crash the Run

A function `fetchConfig(source)` loads test configuration from different sources, and some of them are broken. Right now, calling it with a bad source throws an exception and stops the program. Your job is to wrap it so the program keeps running and returns a useful result no matter what.

Here's the function — don't modify it:
```javascript
function fetchConfig(source) {
    if (source === "broken") throw new Error("Connection refused");
    if (source === "empty")  throw new Error("Config file is empty");
    return { browser: "Chrome", timeout: 5000 };
}
```

Write a function `safeLoadConfig(source)` that calls `fetchConfig` inside a try/catch and returns:
- `{ ok: true, config: <the config object> }` on success
- `{ ok: false, error: <the error message string> }` on failure — it must never throw

Then test it:
```javascript
let sources = ["ok", "broken", "empty"];
for (let source of sources) {
    let result = safeLoadConfig(source);
    if (result.ok) {
        console.log("Loaded (" + source + "):", result.config.browser + ", " + result.config.timeout + "ms");
    } else {
        console.log("Failed (" + source + "): " + result.error);
    }
}
```

Expected output:
```
Loaded (ok): Chrome, 5000ms
Failed (broken): Connection refused
Failed (empty): Config file is empty
```

---

## Exercise 2: Always Close the Browser

In real Playwright tests, you need to close the browser whether the test passes or fails. A test that throws before the close call leaves phantom browser processes running. The `finally` block was made exactly for this.

Here's a helper that simulates running a test — don't modify it:
```javascript
function runTest(testName, shouldFail) {
    if (shouldFail) throw new Error("Element not found on " + testName);
}
```

Write a function `runWithBrowser(testName, shouldFail)` that:
1. Logs `[browser] Opening for: <testName>`
2. Calls `runTest()` inside a try block — on success log `[test] PASSED`, on failure log `[test] FAILED: <message>`
3. Always logs `[browser] Closed` in a `finally` block, regardless of what happened
4. Returns `"PASSED"` or `"FAILED"`

```javascript
runWithBrowser("Login Test", false);
console.log();
runWithBrowser("Search Test", true);
```

Expected output:
```
[browser] Opening for: Login Test
[test] PASSED
[browser] Closed

[browser] Opening for: Search Test
[test] FAILED: Element not found on Search Test
[browser] Closed
```

---

## Exercise 3: Throw Meaningful Errors

Generic errors like `"something went wrong"` are useless when you're debugging a failing test at 11pm. Good validation code throws specific, actionable messages that tell you exactly what was wrong.

Write a function `validateCredentials(username, password)` that throws a descriptive `Error` for each bad input:

- Either argument is `null` or `undefined` → `"Credentials are required"`
- `username` is an empty string → `"Username cannot be empty"`
- `password` is shorter than 8 characters → `"Password must be at least 8 characters"`
- `username` has no `"@"` character → `"Username must be a valid email address"`
- If everything is valid, return `true`

```javascript
let cases = [
    [null,                  "Test@123"],
    ["",                    "Test@123"],
    ["tester@example.com",  "short"],
    ["notanemail",          "Test@123"],
    ["tester@example.com",  "Test@123"]
];

for (let [u, p] of cases) {
    try {
        validateCredentials(u, p);
        console.log("Valid:", u);
    } catch (e) {
        console.log("Error:", e.message);
    }
}
```

Expected output:
```
Error: Credentials are required
Error: Username cannot be empty
Error: Password must be at least 8 characters
Error: Username must be a valid email address
Valid: tester@example.com
```

---

## Exercise 4: Handle Different Error Types

Not all errors should be handled the same way. A `TypeError` (null reference) usually means a code bug. A `RangeError` (value out of bounds) means bad data. A generic `Error` might mean something recoverable. Using `instanceof` lets you route each type to the right handler.

Here's a pre-written function — don't modify it:
```javascript
function parseResult(result) {
    if (result === null || result === undefined) {
        throw new TypeError("result cannot be null or undefined");
    }
    if (result.score < 0 || result.score > 100) {
        throw new RangeError("score " + result.score + " is out of range (0-100)");
    }
    if (result.status !== "PASSED" && result.status !== "FAILED") {
        throw new Error("unknown status '" + result.status + "'");
    }
    return true;
}
```

Write a function `handleResult(result)` that calls `parseResult` and handles each error type with a different label:
- `TypeError`  → log `"TYPE ERROR: <message>"`
- `RangeError` → log `"RANGE ERROR: <message>"`
- Any other `Error` → log `"ERROR: <message>"`
- If valid → log `"Valid result: <status> (score: <score>)"`

```javascript
handleResult(null);
handleResult({ status: "PASSED", score: 150 });
handleResult({ status: "PENDING", score: 85 });
handleResult({ status: "PASSED", score: 85 });
```

Expected output:
```
TYPE ERROR: result cannot be null or undefined
RANGE ERROR: score 150 is out of range (0-100)
ERROR: unknown status 'PENDING'
Valid result: PASSED (score: 85)
```

---

## Challenge: Custom Error Class

Build a `TestError` class that extends the built-in `Error`. It should have two extra properties — `testName` (the test that failed) and `errorCode` (a short identifier like `"TEST_FAILED"`). The `error.name` property should report `"TestError"`, not `"Error"`.

Then write `executeTest(testName, fn)` that:
- Runs `fn()` in a try block
- If `fn()` passes, logs `"✓ <testName> passed"`
- If `fn()` throws, wraps the caught error in a `TestError` with `errorCode: "TEST_FAILED"` and throws that instead

```javascript
function record(name, fn) {
    try {
        executeTest(name, fn);
    } catch (e) {
        console.log("✗ " + e.testName + " — " + e.name + " [" + e.errorCode + "]: " + e.message);
    }
}

record("Login Test",  () => { /* passes */ });
record("Search Test", () => { throw new Error("Expected 'Results' but got 'No results'"); });
record("Logout Test", () => { /* passes */ });
```

Expected output:
```
✓ Login Test passed
✗ Search Test — TestError [TEST_FAILED]: Expected 'Results' but got 'No results'
✓ Logout Test passed
```

---

## Watch Out For

**An empty catch block is worse than no catch at all.** `catch (e) {}` swallows the error completely — the program keeps running but is now in a broken state, and you'll spend hours chasing a symptom somewhere unrelated. At minimum, log it.

**`finally` always runs — even after a `return`.** If your `try` block returns a value, `finally` still executes before the caller gets that value. This is exactly what you want for cleanup, but it can be surprising the first time you see it.

**Order matters when using `instanceof` in a chain.** If you check `e instanceof Error` before `e instanceof RangeError`, the `RangeError` branch will never be reached — because `RangeError` is a subclass of `Error` and the first check is already true. Put the most specific types first.

**When extending `Error`, always call `super(message)` and set `this.name`.** Without `super()`, `this.message` stays empty. Without `this.name`, every custom error logs as "Error" which tells you nothing.

---

## Quick Reference

```javascript
// Basic structure
try {
    // code that might throw
} catch (e) {
    console.log(e.name);     // "Error", "TypeError", "RangeError", etc.
    console.log(e.message);  // the error text
    console.log(e.stack);    // full stack trace
} finally {
    // always runs — cleanup goes here
}

// Throwing a descriptive error
throw new Error("Specific message about what went wrong");

// Checking error type — most specific first
if (e instanceof RangeError) { ... }
else if (e instanceof TypeError) { ... }
else { ... }

// Custom error class
class TestError extends Error {
    constructor(message, testName, errorCode) {
        super(message);
        this.name      = "TestError";
        this.testName  = testName;
        this.errorCode = errorCode;
    }
}
```

---

## Before You Move On

Can you explain what `finally` is for and when it runs relative to a `return` statement in the `try` block? Do you know why the order of `instanceof` checks matters when error types have a parent-child relationship? Can you say from memory why an empty `catch` block is dangerous? If you built the custom error class in the challenge, make sure `error.name` actually says `"TestError"` — that one property is what makes custom errors legible in logs.
