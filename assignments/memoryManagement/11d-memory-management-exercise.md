# Memory Management

**Topic:** Stack vs Heap, Primitives vs References, Pass by Value vs Pass by Reference  
**File to Create:** `memory-management.js`

---

This exercise is about one of the sneakiest bug categories in test automation: tests that silently corrupt each other's data. You'll start by predicting what JavaScript actually does when you copy a number versus when you copy an object, then fix two real mutation bugs, and finish by writing a factory that guarantees every test gets a completely independent copy of its inputs.

---

## Setup

Create `memory-management.js` in your `js-automation-training` folder and run it with `node memory-management.js` as you go.

---

## Exercise 1: Predict the Output

Before running any code, read each snippet and write down what you think will be printed. Then copy them into your file and run to check. For each one, add a `console.log("Expected: ...")` line above it so you can compare prediction vs reality.

**Snippet A — primitive copy:**
```javascript
let scoreA = 85;
let scoreB = scoreA;
scoreB = 50;
console.log("scoreA:", scoreA);
console.log("scoreB:", scoreB);
```

**Snippet B — object reference:**
```javascript
let result1 = { testName: "Login", status: "PASSED" };
let result2 = result1;
result2.status = "FAILED";
console.log("result1.status:", result1.status);
console.log("result2.status:", result2.status);
```

**Snippet C — primitive passed to function:**
```javascript
function resetScore(s) {
    s = 0;
}
let myScore = 99;
resetScore(myScore);
console.log("myScore after resetScore():", myScore);
```

**Snippet D — object passed to function:**
```javascript
function markFailed(test) {
    test.status = "FAILED";
}
let myTest = { testName: "Checkout", status: "PASSED" };
markFailed(myTest);
console.log("myTest.status after markFailed():", myTest.status);
```

Fill in your predictions before running:
```
scoreA:  ___     scoreB:  ___
result1.status: ___     result2.status: ___
myScore after resetScore(): ___
myTest.status after markFailed(): ___
```

---

## Exercise 2: Fix the Shared Config Bug

Two test functions share a config object. The smoke test changes the timeout and headless flag for its own use — but this accidentally breaks the regression test that runs after it.

Here's the broken code:
```javascript
let baseConfig = { browser: "Chrome", timeout: 30000, headless: false };

function runSmokeTest(config) {
    config.timeout  = 5000;
    config.headless = true;
    console.log("Smoke:      " + config.browser + ", " + config.timeout + "ms, headless=" + config.headless);
}

function runRegressionTest(config) {
    console.log("Regression: " + config.browser + ", " + config.timeout + "ms, headless=" + config.headless);
}

runSmokeTest(baseConfig);
runRegressionTest(baseConfig);
```

Current output:
```
Smoke:      Chrome, 5000ms, headless=true
Regression: Chrome, 5000ms, headless=true   ← wrong! expected 30000ms, headless=false
```

Fix the call to `runSmokeTest` so `baseConfig` is never mutated. Don't change the function bodies — only change how you call them.

Expected output:
```
Smoke:      Chrome, 5000ms, headless=true
Regression: Chrome, 30000ms, headless=false
```

---

## Exercise 3: Shallow Copy Is Not Enough

You make a copy of a test suite config and change the copy's settings — but the original gets changed too. Spread created a shallow copy, which means the nested `settings` object is still shared between both variables.

Here's the broken code:
```javascript
let loginSuite = {
    name: "Login Suite",
    settings: { retries: 3, screenshotOnFail: true }
};

let quickSuite = { ...loginSuite };
quickSuite.name = "Quick Suite";
quickSuite.settings.retries = 0;

console.log("loginSuite.name:             " + loginSuite.name);
console.log("loginSuite.settings.retries: " + loginSuite.settings.retries);
console.log("quickSuite.name:             " + quickSuite.name);
console.log("quickSuite.settings.retries: " + quickSuite.settings.retries);
```

Current output:
```
loginSuite.name:             Login Suite
loginSuite.settings.retries: 0         ← wrong! should still be 3
quickSuite.name:             Quick Suite
quickSuite.settings.retries: 0
```

Fix the copy so changing `quickSuite.settings.retries` does not affect `loginSuite`. Use `JSON.parse(JSON.stringify(...))` for the deep copy.

Expected output:
```
loginSuite.name:             Login Suite
loginSuite.settings.retries: 3
quickSuite.name:             Quick Suite
quickSuite.settings.retries: 0
```

---

## Exercise 4: Fix the Object Comparison

A helper function is supposed to check whether a test result matches the expected result. But it always prints "FAILED" — because it compares references, not property values.

Here's the broken code:
```javascript
function assertResultMatches(expected, actual) {
    if (expected === actual) {
        console.log("✅ Test PASSED - result matches expected");
    } else {
        console.log("❌ Test FAILED - result does not match expected");
    }
}

let expectedResult = { status: "PASSED", score: 100, duration: 2.5 };
let actualResult   = { status: "PASSED", score: 100, duration: 2.5 };

assertResultMatches(expectedResult, actualResult);
```

Fix `assertResultMatches` so it compares the content of both objects. Use `JSON.stringify` for the comparison. Then test it with a matching pair and a non-matching pair:

- `{ status: "PASSED", score: 100, duration: 2.5 }` vs same values → should PASS
- `{ status: "PASSED", score: 100, duration: 2.5 }` vs `{ status: "FAILED", score: 80, duration: 1.1 }` → should FAIL

Expected output:
```
✅ Test PASSED - result matches expected
❌ Test FAILED - result does not match expected
```

---

## Challenge: Test Data Factory

Your test suite needs different types of users — a patient, an admin, a doctor. Each test needs its own independent copy so one test can't accidentally corrupt another's data.

Write a function `createTestUser(overrides)` that:
1. Starts from this base template every time: `{ username: "testuser", password: "Test@123", role: "patient", active: true }`
2. Merges any `overrides` into the base (overrides win)
3. Returns a completely fresh object every call

```javascript
function createTestUser(overrides) {
    // Your code here
}

let patientUser = createTestUser();
let adminUser   = createTestUser({ role: "admin" });
let doctorUser  = createTestUser({ username: "drsmith", role: "doctor" });

patientUser.active = false;

console.log("patient:", patientUser.username, "| role:", patientUser.role,   "| active:", patientUser.active);
console.log("admin:  ", adminUser.username,   "| role:", adminUser.role,     "| active:", adminUser.active);
console.log("doctor: ", doctorUser.username,  "| role:", doctorUser.role,    "| active:", doctorUser.active);
```

Expected output:
```
patient: testuser  | role: patient  | active: false
admin:   testuser  | role: admin    | active: true
doctor:  drsmith   | role: doctor   | active: true
```

Hint: `{ ...defaults, ...overrides }` merges two objects in one step — properties on the right win.

---

## Watch Out For

**`let b = a` is not a copy when `a` is an object.** Both variables end up pointing at the same heap object. Writing to either one affects both.

```javascript
let cfg1 = { timeout: 30000 };
let cfg2 = cfg1;           // same reference!
cfg2.timeout = 5000;
console.log(cfg1.timeout); // 5000 — cfg1 changed too
```

**Spread only copies the top level.** If your object contains a nested object, the copy and the original still share that inner object. Writing to `copy.settings.retries` also changes `original.settings.retries`. Use `JSON.parse(JSON.stringify(...))` when you need full independence at every level.

**`===` compares addresses, not property values.** Two objects with identical contents will never be `===` unless they're the exact same instance in memory. Use `JSON.stringify(a) === JSON.stringify(b)` to compare content.

**Functions that receive objects can silently change the caller's data.** When you pass an object to a function, the function holds a reference to your original. Spread at the call site to protect it: `runSmokeTest({ ...baseConfig })`.

---

## Quick Reference

```javascript
// Primitives — copied by value, independent after assignment
let a = 42;
let b = a;    // b is its own copy — changing b doesn't affect a

// Objects — copied by reference
let x = { n: 1 };
let y = x;                                    // same object — writes affect both
let z = { ...x };                             // shallow copy — top-level only
let d = JSON.parse(JSON.stringify(x));         // deep copy — fully independent

// Merge with overrides
let merged = { ...defaults, ...overrides };   // properties on the right win

// Content equality
JSON.stringify(a) === JSON.stringify(b)        // true when all properties match
```

---

## Before You Move On

Can you explain in one sentence why `let b = obj` does not create a new object? Do you know when spread is good enough and when you need `JSON.parse(JSON.stringify(...))`? Can you spot a mutation bug in someone else's test code — the kind where one test silently changes data that a later test relies on? If Exercise 1 gave you any surprises, sit with those snippets before moving on. They're the mental model that everything else in this topic builds on.
