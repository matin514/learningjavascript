# Wrapper Objects & String Methods

**Topic:** Auto-boxing, Wrapper Objects, Primitive vs Object Pitfalls  
**File to Create:** `wrapper-objects.js`

---

In this exercise you'll explore one of JavaScript's quiet backstage tricks — wrapper objects. Every time you write `"hello".toUpperCase()`, JavaScript briefly wraps that string in an object, calls the method, then throws the wrapper away. You never see it, but understanding it explains a whole category of comparison bugs that trip up automation engineers.

By the end you'll understand why `typeof new String("x")` returns `"object"`, why `new Boolean(false)` is truthy, and how to write normalisation functions that make your test comparisons resilient to formatting differences.

---

## Setup

Create a new file called `wrapper-objects.js` in your `js-automation-training` folder and run it with `node wrapper-objects.js` as you go.

---

## Exercise 1: Predict the typeof Output

Before running any code, read each declaration below and write down what you think `typeof` will return. Then copy the code into your file, run it, and compare.

```javascript
let a = "PASSED";
let b = new String("PASSED");

let c = 42;
let d = new Number(42);

let e = true;
let f = new Boolean(true);

console.log(typeof a);  // ?
console.log(typeof b);  // ?
console.log(typeof c);  // ?
console.log(typeof d);  // ?
console.log(typeof e);  // ?
console.log(typeof f);  // ?
```

Write your predictions before running:
```
typeof a → ___
typeof b → ___
typeof c → ___
typeof d → ___
typeof e → ___
typeof f → ___
```

Add a `console.log("Expected: ___")` line above each `typeof` call showing your prediction, then run the file and add a short comment on each line explaining why (primitive vs object).

Expected output:
```
string    ← primitive
object    ← wrapper object
number    ← primitive
object    ← wrapper object
boolean   ← primitive
object    ← wrapper object
```

---

## Exercise 2: The === Comparison Trap

A test helper function compares two status strings. It works fine when both values are plain strings, but fails when one comes from a different source — like a legacy API that wraps strings in `new String(...)`.

```javascript
function assertStatusMatch(expected, actual) {
    if (expected === actual) {
        console.log("✅ Status matches: " + actual);
    } else {
        console.log("❌ Status mismatch! Expected: " + expected + ", Got: " + actual);
    }
}

// Case 1: Both are primitives — works fine
let status1 = "PASSED";
let status2 = "PASSED";
assertStatusMatch(status1, status2);

// Case 2: One is a wrapper object — BREAKS!
let status3 = "PASSED";
let status4 = new String("PASSED");
assertStatusMatch(status3, status4);

// Case 3: Two wrapper objects — ALSO BREAKS!
let status5 = new String("PASSED");
let status6 = new String("PASSED");
assertStatusMatch(status5, status6);
```

Copy the code and run it to see the broken output. Then:

1. Add `console.log(typeof status3, typeof status4)` to see exactly why Case 2 fails
2. Fix `assertStatusMatch` so it handles both primitives and wrapper objects — hint: `String(value)` converts a wrapper object back to a primitive string

Expected output after your fix:
```
✅ Status matches: PASSED
✅ Status matches: PASSED
✅ Status matches: PASSED
```

---

## Exercise 3: The Boolean Wrapper Trap

This is one of the most surprising JavaScript gotchas. A validation function receives a Boolean wrapper object and produces the wrong result.

```javascript
function checkFeatureEnabled(flag) {
    if (flag) {
        console.log("Feature is ENABLED");
    } else {
        console.log("Feature is DISABLED");
    }
}

let featureA = true;
let featureB = false;
let featureC = new Boolean(false);   // looks like false...

checkFeatureEnabled(featureA);   // expected: ENABLED
checkFeatureEnabled(featureB);   // expected: DISABLED
checkFeatureEnabled(featureC);   // expected: DISABLED  (but is it?)
```

Run the code and note the surprising output for `featureC`. Then:

1. Add `console.log("typeof featureC:", typeof featureC)` to see why
2. Add `console.log("Boolean(featureC):", Boolean(featureC))` to understand what the object actually evaluates to
3. Fix the call so `featureC` behaves as a real `false`

Keep in mind: `new Boolean(false)` is an object, and any object is truthy in JavaScript — regardless of what value it wraps.

Expected output after your fix:
```
Feature is ENABLED
Feature is DISABLED
Feature is DISABLED
```

---

## Exercise 4: Normalise Test Data with String Methods

Your test suite receives emails and usernames from different sources — some uppercase, some lowercase, some padded with spaces. Normalising them before comparison means tests won't fail due to formatting differences.

Write a function `normaliseEmail(input)` that trims whitespace and converts to lowercase, and a function `normaliseUsername(input)` that does the same but also removes a leading `@` if present (some users accidentally include it).

Test with these inputs:

```javascript
let emails = [
    "  TEST@EXAMPLE.COM  ",
    "User@Example.COM",
    "ADMIN@TEST.ORG   "
];

let usernames = [
    "  TestUser  ",
    "@AdminUser",
    "JOHN_DOE "
];
```

Expected output:
```
Normalised emails:
  test@example.com
  user@example.com
  admin@test.org

Normalised usernames:
  testuser
  adminuser
  john_doe
```

Bonus: write `areEmailsEqual(email1, email2)` that normalises both before comparing and returns `true` or `false`.

---

## Challenge: Test Data Sanitiser

Before running tests, you need to clean and validate incoming user data. Write a function `sanitiseTestUser(user)` that receives a raw object like:

```javascript
{ username: "  TestUser  ", email: "TEST@EXAMPLE.COM", role: "ADMIN", age: "25" }
```

and returns a clean version:
- `username` — trimmed, lowercased
- `email` — trimmed, lowercased; if it doesn't contain `@`, set it to `null` and log a warning
- `role` — trimmed, lowercased
- `age` — converted to a real number using `Number(value)`

```javascript
function sanitiseTestUser(user) {
    // Your code here
}

let rawUsers = [
    { username: "  TestUser  ", email: "TEST@EXAMPLE.COM", role: "ADMIN",   age: "25" },
    { username: "JOHN ",        email: "john@test.org",     role: "user",    age: "30" },
    { username: "  baduser",    email: "not-an-email",      role: "VIEWER",  age: "22" }
];

rawUsers.forEach(user => {
    let clean = sanitiseTestUser(user);
    console.log(clean);
});
```

Expected output:
```
{ username: 'testuser', email: 'test@example.com', role: 'admin', age: 25 }
{ username: 'john',     email: 'john@test.org',     role: 'user',  age: 30 }
⚠ Warning: invalid email for user 'baduser'
{ username: 'baduser',  email: null,                role: 'viewer', age: 22 }
```

---

## Watch Out For

**Using `new String()`, `new Number()`, `new Boolean()`** — these create heap objects, not primitives, and cause subtle `===` bugs. Always use bare literals: `"Alice"`, `30`, `true`.

**Comparing a primitive to a wrapper object with `===`** — they'll never be equal because `===` checks type first. Use `String(val)` (without `new`) to safely extract the primitive before comparing.

**Trusting `new Boolean(false)` as falsy** — it won't be. Every object is truthy. If you see an unexpected "enabled" when passing a Boolean wrapper, this is why.

**Forgetting that string methods return new strings** — `status.toUpperCase()` does nothing on its own. You need `let upper = status.toUpperCase()`.

---

## Quick Reference

```javascript
// Safe conversion — no `new`, just the function
String(value)    // any value → primitive string
Number(value)    // any value → primitive number
Boolean(value)   // any value → primitive boolean

// Common string methods — all return NEW strings
str.toLowerCase()       // "PASSED" → "passed"
str.toUpperCase()       // "passed" → "PASSED"
str.trim()              // "  hi  " → "hi"
str.includes("@")       // true / false
str.startsWith("test")  // true / false
str.replace("a", "b")   // replace first match
str.split(",")          // → array
```

---

## Before You Move On

Can you explain auto-boxing in one sentence — what triggers it, and what JavaScript does with the wrapper object afterwards? Do you know why `new Boolean(false)` is truthy, and why `typeof new String("x")` returns `"object"`? If any of those feel fuzzy, re-read the relevant exercise before moving on.

Worth thinking about: where in your manual testing do you compare values that could differ by case or whitespace? How would you protect a test helper that might accidentally receive a wrapper object instead of a primitive?
