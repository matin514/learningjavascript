# Functions Enhanced - Exercise

**Topic:** Default Parameters, Guard Clauses, Function Expressions, Factory Functions
**File to Create:** `functions-enhanced.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Use default parameters to make functions flexible
- ✅ Understand when defaults apply (undefined only)
- ✅ Rewrite nested if-else as guard clauses (early returns)
- ✅ Create function expressions and store them in variables
- ✅ Store functions in arrays and loop through them
- ✅ Write factory functions that return other functions

---

## Setup

1. Open VSCode
2. Create a new file: `functions-enhanced.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node functions-enhanced.js`

---

## Exercise 1: Default Parameters - Test Runner

**Scenario:** Your team runs tests across different browsers and environments. Write a function that has sensible defaults so callers only need to provide what's different.

**Requirements:**
1. Create a function `configureTest(testName, browser, timeout, environment)` where:
   - `browser` defaults to `"Chrome"`
   - `timeout` defaults to `30000`
   - `environment` defaults to `"staging"`
2. The function should print:
   ```
   Test: <testName>
   Browser: <browser>
   Timeout: <timeout>ms
   Environment: <environment>
   ```
3. Call the function four times:
   - With only `testName` (all defaults)
   - With `testName` and `"Firefox"` (custom browser)
   - With `testName`, `"Safari"`, and `60000` (custom browser + timeout)
   - With all four arguments fully specified

**Test Cases:**
- `configureTest("Login Test")` → Chrome, 30000ms, staging
- `configureTest("Login Test", "Firefox")` → Firefox, 30000ms, staging
- `configureTest("Login Test", "Safari", 60000)` → Safari, 60000ms, staging
- `configureTest("Login Test", "Chrome", 30000, "production")` → all specified

**Example Output:**
```
--- All defaults ---
Test: Login Test
Browser: Chrome
Timeout: 30000ms
Environment: staging

--- Custom browser ---
Test: Login Test
Browser: Firefox
Timeout: 30000ms
Environment: staging
```

**Bonus:** After your four calls, add these two lines and observe the output. Why does `""` not use the default but `undefined` does?
```javascript
configureTest("Edge Case", "");        // empty string
configureTest("Edge Case", undefined); // explicit undefined
```

---

## Exercise 2: Guard Clauses - Form Validator

**Scenario:** A form validator written with nested if-else is hard to read. Rewrite it using early returns (guard clauses) so the logic is flat and easy to scan.

**Here is the nested version — do NOT change it, just read it:**

```javascript
function validateFormNested(username, password, age) {
    if (username !== "") {
        if (password.length >= 8) {
            if (age >= 18) {
                return "✅ Form is valid";
            } else {
                return "❌ Must be 18 or older";
            }
        } else {
            return "❌ Password must be at least 8 characters";
        }
    } else {
        return "❌ Username is required";
    }
}
```

**Requirements:**
1. Write a new function `validateFormGuard(username, password, age)` that produces **identical results** using guard clauses (early returns)
2. No nesting allowed — the function body must be flat
3. Test both functions with the same inputs and confirm the outputs match

**Test Cases:**
- `("", "Test@123", 25)` → Username is required
- `("john", "abc", 25)` → Password too short
- `("john", "Test@123", 16)` → Must be 18+
- `("john", "Test@123", 25)` → Form is valid

**Example Output:**
```
Nested:     ❌ Username is required
Guard:      ❌ Username is required

Nested:     ❌ Password must be at least 8 characters
Guard:      ❌ Password must be at least 8 characters

Nested:     ✅ Form is valid
Guard:      ✅ Form is valid
```

---

## Exercise 3: Function Expressions - Password Validators

**Scenario:** Build a password validation system where each rule is stored as a function expression. This lets you easily add, remove, or swap rules.

**Requirements:**
1. Create three function expressions stored in `const` variables:
   - `hasMinLength` — returns `true` if password is 8+ characters
   - `hasSpecialChar` — returns `true` if password contains `@`, `!`, or `#`
   - `hasUppercase` — returns `true` if password contains at least one uppercase letter (hint: `/[A-Z]/.test(password)`)
2. Store all three in an array called `passwordValidators`
3. Write a function `validatePassword(password)` that:
   - Loops through `passwordValidators`
   - Prints `✓ Passed check N` for each passing validator
   - Prints `✗ Failed check N` and stops (returns `false`) on the first failure
   - Prints `✓ Password is valid!` if all pass
4. Test with `"Test@123"` (should pass all) and `"weak"` (should fail)

**Example Output:**
```
Validating: "Test@123"
  ✓ Passed check 1
  ✓ Passed check 2
  ✓ Passed check 3
  ✓ Password is valid!

Validating: "weak"
  ✗ Failed check 1
```

---

## Exercise 4: Factory Functions - URL Builder

**Scenario:** Your tests run against multiple environments (staging, production). Write a factory function that creates a URL builder for each environment so you never hardcode base URLs.

**Requirements:**
1. Write a function `makeUrlBuilder(baseUrl)` that **returns a new function**
2. The returned function takes a `path` argument and returns `baseUrl + path`
3. Create two builders:
   - `stagingUrl` using `"https://staging.example.com"`
   - `productionUrl` using `"https://example.com"`
4. Use each builder to print URLs for `/login` and `/dashboard`

**Example Output:**
```
Staging URLs:
  https://staging.example.com/login
  https://staging.example.com/dashboard

Production URLs:
  https://example.com/login
  https://example.com/dashboard
```

**Bonus:** Create a third builder for `"https://dev.example.com"` and generate a `/api/users` URL from it.

---

## Additional Challenge

### Challenge: Configurable Validator Factory

**Scenario:** Different test environments have different validation rules (e.g. staging is lenient, production is strict). Write a factory function that creates a user validator with configurable rules.

**Requirements:**
Create a function `makeUserValidator(minPasswordLength, minAge)` that:
1. Uses default parameter: `minPasswordLength = 8`, `minAge = 18`
2. Returns a function that validates `(username, password, age)` using guard clauses
3. The returned function checks:
   - Username is not empty
   - Username is 3–20 characters
   - Password meets `minPasswordLength`
   - Age meets `minAge`
4. Returns a descriptive error string or `"✅ Valid user"` on success

```javascript
function makeUserValidator(minPasswordLength = 8, minAge = 18) {
    // Your code here — return a function!
}

const standardValidator = makeUserValidator();       // defaults
const strictValidator   = makeUserValidator(12, 21); // strict rules

// Test standard
console.log(standardValidator("testuser", "Test@123", 25));  // ✅ Valid
console.log(standardValidator("", "Test@123", 25));           // ❌ Username empty

// Test strict (password "Test@123" is only 8 chars — fails strict)
console.log(strictValidator("testuser", "Test@123", 25));    // ❌ Password too short
console.log(strictValidator("testuser", "Test@123Secure!", 25)); // ✅ Valid
```

**Expected Output:**
```
✅ Valid user
❌ Username cannot be empty
❌ Password too short (min 12 characters, current: 8)
✅ Valid user
```

---

## Testing Your Code

**Run your file:**
```bash
node functions-enhanced.js
```

**You should see:**
- Exercise 1: four test runner outputs showing defaults filling in
- Exercise 2: nested and guard outputs matching for each test case
- Exercise 3: per-check pass/fail output for each password
- Exercise 4: four URLs built by two different builders

---

## Common Mistakes to Avoid

**❌ Thinking `""` (empty string) triggers a default**
```javascript
function greet(name = "Guest") { console.log(name); }

greet("");        // prints "" — empty string is NOT undefined!
greet(undefined); // prints "Guest" — only undefined uses the default
```

**❌ Forgetting `return` in the inner function of a factory**
```javascript
// Wrong — returns undefined
function makeBuilder(base) {
    return function(path) {
        base + path;  // no return!
    };
}

// Correct
function makeBuilder(base) {
    return function(path) {
        return base + path;
    };
}
```

**❌ Guard clauses in the wrong order**
```javascript
// Wrong — checks age before checking if username exists
if (age < 18) return "Too young";
if (username === "") return "Username required";  // username never guarded first!

// Correct — most basic checks first
if (username === "") return "Username required";
if (age < 18) return "Too young";
```

**❌ Calling the validator array instead of each element**
```javascript
// Wrong
if (!validators(password)) { ... }     // validators is an array, not a function!

// Correct
if (!validators[i](password)) { ... }  // call element i
```

---

## Quick Reference

**Default Parameters:**
```javascript
function fn(a, b = 10) { }   // b defaults to 10 when undefined
fn(5);        // b = 10
fn(5, 20);    // b = 20
fn(5, "");    // b = ""  (NOT the default!)
```

**Guard Clause Pattern:**
```javascript
function fn(x) {
    if (!x) return "error 1";   // guard: exit early on bad input
    if (x < 0) return "error 2"; // guard: exit early
    return "happy path";          // only reached if all guards pass
}
```

**Function Expression:**
```javascript
const double = function(x) { return x * 2; };
const triple = (x) => x * 3;   // arrow function — also an expression
```

**Factory Function:**
```javascript
function makeMultiplier(factor) {
    return function(n) { return n * factor; };
}
const double = makeMultiplier(2);
double(5); // 10
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Do I know which value (and only which value) triggers a default parameter?
2. ✅ Can I rewrite any nested if-else as guard clauses?
3. ✅ Do I understand why function expressions are not hoisted?
4. ✅ Can I store functions in an array and call them with `array[i]()`?
5. ✅ Can I explain what a factory function is in one sentence?
6. ✅ Did I test edge cases (empty string, undefined, boundary values)?

---

## Reflection

**Think about:**
1. Where in a real test suite would default parameters save you from repetition?
2. What makes guard clauses easier to read than nested if-else?
3. Why would storing validators in an array be better than a long if-else chain?
4. How does the URL builder factory pattern apply to switching test environments?

---

## Need Help?

**Debugging tips:**
- Print the result of each validator call individually before putting them in an array
- Add `console.log(typeof yourFunction)` to confirm something is a function
- For factory functions, add a `console.log` inside the returned function to trace when it runs
- If defaults aren't applying, check: are you passing `undefined` or `""` or `null`?

---

## Progress Check

**You can now:**
- ✅ Write functions with default parameters
- ✅ Explain why only `undefined` triggers a default
- ✅ Refactor nested if-else into flat guard clauses
- ✅ Create function expressions stored in variables and arrays
- ✅ Write factory functions that return customised functions
